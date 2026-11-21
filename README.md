# Autofix

**Projekt na kolegiju:** Ovu je aplikaciju razvio studentski tim u sklopu kolegija [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz) na Fakultetu elektrotehnike i računarstva Sveučilišta u Zagrebu (FER).

**Tim**: G04.3 (Autofix)

**Tema**: [G04 (AutoServis)](https://www.fer.unizg.hr/_download/repository/G04%20-%20EJ1%20-%20AutoServis.pdf)

## Opis aplikacije

Web platforma za upravljanje servisiranjem vozila koja povezuje vlasnike vozila, servisere i voditelje autoservisa.

### Ključne funkcionalnosti

- Dodavanje vozila i naručivanje na servis
- Raspoređivanje narudžbi i dodjela serviseru
- Praćenje tijeka servisa i evidentiranje radova
- Praćenje servisne povijesti vozila

Za potpuni opseg, zahtjeve, oblikovanje i dokaze ispitivanja pogledajte [projektnu dokumentaciju](docs/0-Home.md).

<a id="deployment"></a>
## Postavljanje (engl. deployment)

**Javno dostupna inačica:** https://g04-3-autofix.onrender.com

**Isprobajte:** Prijavite se, isprobajte gore navedene funkcionalnosti (ili više), odjavite se i ponovite za korisnike s drugim ulogama.

**Pristup:** Prijava preusmjerava na portal pružatelja identiteta, registracija je moguća izravno putem adrese e-pošte ili identitetom treće strane (Google ili Microsoft). Postoje i 3 unaprijed registrirana korisnika s odgovarajućim ulogama: `vlasnik@example.com`, `voditelj@example.com` i `serviser@example.com`.

**Ograničenja:** Demonstracijska inačica za prvi ciklus postavljena je kao samostalan klijentski dio sustava (pogledajte [4. poglavlje](docs/4-Arhitektura-i-oblikovanje.md#41-ključne-arhitekturne-odluke)), stoga su radnje koje trajno utječu na bazu podataka ograničene na lokalnu pohranu u korištenom pregledniku.

<a id="quick-start"></a>
## Brzi početak / instalacija

**Preduvjeti:** Node.js (>= 24), Python (>= 3.13), npm ili [pnpm](https://pnpm.io), [uv](https://docs.astral.sh/uv)

```bash
git clone 'https://github.com/jakovsch-fer/autofix'
cd autofix/frontend
npm run build
python -m http.server -d dist -b localhost 8000
```

**Adresa:** `http://localhost:8000/`

<!-- **Konfiguracija:** [Navedite potrebne varijable okruženja (engl. environment variables) ili uputite na sigurnu datoteku `.env.example`; objasnite gdje se dobivaju vrijednosti. Nikada ne stavljajte stvarne pristupne podatke u ovu datoteku, primjer konfiguracije, snimke zaslona, zapise ni zapise promjena (engl. commits).] -->

## Tehnologije

| Tehnologija ili alat | Uloga u projektu | Razlog uporabe |
| --- | --- | --- |
| [Django](https://www.djangoproject.com) | Poslužiteljski dio (backend) | Iskustvo tima s programskim jezikom Python, objektna orijentacija i ORM |
| [Auth0](https://auth0.com/platform/authentication) | Pružatelj identiteta | Sigurna autentifikacija i središnje upravljanje izvorima identiteta (prve ili treće strane) |
| [Render](https://render.com) | Infrastruktura | Okruženje za postavljanje integrirano s automatizacijom repozitorija (CI/CD) i prema principu infrastruktura-kao-kod. |

<!-- <details>
<summary><strong>Primjer: objašnjenje ključnih tehnoloških odluka</strong></summary>

**Primjer — CrisisMap:**

| Tehnologija ili alat | Uloga u ovom projektu | Razlog uporabe ili važno ograničenje |
| --- | --- | --- |
| React | Prikazuje obrazac za prijavu i kartu kriznih događaja u pregledniku. | Karta i poslane prijave mogu se ažurirati bez ponovnog učitavanja cijele stranice. |
| PostgreSQL | Pohranjuje prijave, lokacije i njihove odnose. | Zapisi o prijavama moraju ostati povezani s autorima i lokacijama; promjene sheme zahtijevaju migracije baze podataka (engl. database migrations). |
| Usluga kartografskih pločica (engl. map tile service) | Omogućuje prikaz karte u pregledniku. | Karta ovisi o vanjskoj usluzi; aplikacija mora imati definirano ponašanje i kada kartografske pločice nisu dostupne. |

**Analiza primjera:** Svaki redak opisuje ulogu ili posljedicu konkretne tehnologije u ovoj aplikaciji. Verzije paketa pripadaju datotekama s ovisnostima projekta; verzije izvršnog okruženja i konfiguracija važna za postavljanje pripadaju vodiču za instalaciju. Važne kompromise u oblikovanju (engl. design trade-offs) objasnite na stranici arhitekture u direktoriju `docs/` umjesto da ovdje ponavljate cijeli zapis odluke. Navodite samo usluge koje vaš tim stvarno integrira.

</details> -->

<a id="team-members"></a>
## Članovi tima

| Član | GitHub profil | Glavna uloga ili doprinos |
| --- | --- | --- |
| Marko Nujić | @Marko1324354 | Voditelj, modeliranje, dokumentacija |
| Ivan Borbaš | @IBorbas | Frontend, dokumentacija |
| Tonko Bogdan | @TB-FER | Backend, modeliranje, dokumentacija |
| Jakov Schramadei | @jakovsch-fer | Backend, dokumentacija, postavljanje |

## Doprinos projektu

Pogledajte [projektnu dokumentaciju](docs/0-Home.md#organizacija-projekta-i-razvojni-proces).

<a id="license"></a>
## Licenca

**Status licence:** Nije odabrana.

Dokumentacijski predložak kolegija sadrži otvorene obrazovne sadržaje (engl. Open Educational Resources, OER) i licenciran je licencom Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.

Kod trećih strana, skupovi podataka, slike, ikone i drugi sadržaji zadržavaju vlastite licence i uvjete uporabe.

<a id="ai-usage"></a>
## Uporaba umjetne inteligencije [![AI Usage: Disclosed](https://img.shields.io/badge/AI%20Usage-Disclosed-blue.svg)](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf)

Ovaj projekt slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

**Izjava:** Korišteni su alati umjetne inteligencije. Za detaljan opseg pogledajte [projektnu dokumentaciju](docs/0-Home.md#izjava-o-uporabi-umjetne-inteligencije).

<a id="code-of-conduct-and-support"></a>
## Kodeks ponašanja i podrška [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Od članova tima očekuje se pridržavanje **Kodeksu ponašanja studenata** Fakulteta elektrotehnike i računarstva Sveučilišta u Zagrebu, pravilima timskog rada na kolegiju i [Etičkom kodeksu IEEE-a](https://www.ieee.org/about/corporate/governance/p7-8.html).

---

Struktura dokumentacije prilagođena je predlošku kolegija Programsko inženjerstvo FER-a autora [Vlade Sruka](https://www.fer.unizg.hr/vlado.sruk), licenciranom pod [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Aplikaciju i njen sadržaj izradio je navedeni studentski tim.
