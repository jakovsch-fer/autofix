from ninja.security import HttpBearer
from .models import Korisnik, VanjskiIdentitet

class TokenAuth(HttpBearer):
    def authenticate(self, req, token):
        payload = verifikacija(token)
        if not payload: return None

        sub = payload.get('sub')
        email = payload.get('email')

        try:
            user = (VanjskiIdentitet.objects
                .select_related('korisnik')
                .get(subjekt=sub)
                .korisnik)
        except VanjskiIdentitet.DoesNotExist:
            user = Korisnik.objects.create_user(
                username=f"ext_{sub}",
                email=email,
                is_profile_complete=False
            )
            VanjskiIdentitet.objects.create(user=user, provider="oidc_provider", sub=sub)

        return user
