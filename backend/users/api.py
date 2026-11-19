from typing import Annotated, Literal, Union
from django.db import transaction
from ninja import Router, Schema, Field
from .models import Uloga, Korisnik, Vlasnik, Voditelj, Serviser

auth = Router(tags=['auth'], auth=None)
users = Router(tags=['users'], auth=None)

class VlasnikInOut(Schema):
    uloga: Literal['vlasnik']
    broj_tel: str

class VoditeljInOut(Schema):
    uloga: Literal['voditelj']
    autoservis: str

class ServiserInOut(Schema):
    uloga: Literal['serviser']
    autoservis: str
    specijalizacija: str

ProfilInOut = Annotated[
    Union[VlasnikInOut, VoditeljInOut, ServiserInOut],
    Field(discriminator='uloga'),
]

class KorisnikIn(Schema):
    ime: str
    prezime: str
    email: str
    profil: ProfilInOut

class KorisnikOut(KorisnikIn):
    id: int
    aktivan: bool

    @staticmethod
    def resolve_profil(data):
        if hasattr(data, 'profil_vlasnik') and data.profil_vlasnik is not None:
            data.profil_vlasnik.uloga = 'vlasnik'
            return data.profil_vlasnik
        if hasattr(data, 'profil_voditelj') and data.profil_voditelj is not None:
            data.profil_voditelj.uloga = 'voditelj'
            return data.profil_voditelj
        if hasattr(data, 'profil_serviser') and data.profil_serviser is not None:
            data.profil_serviser.uloga = 'serviser'
            return data.profil_serviser
        return None

@users.get('/me', response=KorisnikOut)
def me(request):
    from django.shortcuts import get_object_or_404
    return get_object_or_404(
        Korisnik.objects.select_related('profil_vlasnik', 'profil_voditelj', 'profil_serviser'),
        id=1,
    )

@auth.post('/register', response=KorisnikOut)
def register(request, payload: KorisnikIn):
    user_data = payload.model_dump()
    profile_data = user_data.pop('profil')
    role = profile_data.pop('uloga')

    with transaction.atomic():
        user = Korisnik.objects.create(**user_data)
        if role == Uloga.VLASNIK: Vlasnik.objects.create(korisnik=user, **profile_data)
        if role == Uloga.VODITELJ: Voditelj.objects.create(korisnik=user, **profile_data)
        if role == Uloga.SERVISER: Serviser.objects.create(korisnik=user, **profile_data)

    return user
