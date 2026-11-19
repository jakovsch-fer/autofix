from django.db import models
#from django.contrib.auth.models import AbstractUser

class Uloga(models.TextChoices):
    VLASNIK = 'vlasnik'
    VODITELJ = 'voditelj'
    SERVISER = 'serviser'

class Korisnik(models.Model):
    ime = models.CharField(max_length=128)
    prezime = models.CharField(max_length=128)
    email = models.EmailField(max_length=128)
    aktivan = models.BooleanField(default=True)
    #uloga = models.CharField(max_length=max(len(k) for k, _ in ULOGE), choices=ULOGE)
    #profil_potpun = models.BooleanField(default=False)

class Vlasnik(models.Model):
    korisnik = models.OneToOneField(Korisnik, on_delete=models.CASCADE, related_name='profil_vlasnik')
    broj_tel = models.CharField(max_length=128)

class Voditelj(models.Model):
    korisnik = models.OneToOneField(Korisnik, on_delete=models.CASCADE, related_name='profil_voditelj')
    autoservis = models.CharField(max_length=128)

class Serviser(models.Model):
    korisnik = models.OneToOneField(Korisnik, on_delete=models.CASCADE, related_name='profil_serviser')
    autoservis = models.CharField(max_length=128)
    specijalizacija = models.CharField(max_length=128)

class VanjskiIdentitet(models.Model):
    korisnik = models.ForeignKey(Korisnik, on_delete=models.CASCADE, related_name='identiteti')
    pruzatelj = models.CharField(max_length=128)
    subjekt = models.CharField(max_length=256, unique=True)
    vr_oznaka = models.DateTimeField(auto_now_add=True)
