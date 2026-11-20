# 1. Opseg projekta

## 1.1 Problem i cilj projekta

U slučaju kvara osobnog vozila vlasniku trebaju bitne informacije o dostupnim autoservisima (npr. lokacija, recenzije, cijene i ovlaštenje), jasan način za naručivanje svog vozila na odabrani servis te praćenje njegovog napretka kao i komunikacijski kanal sa serviserom za naknadne dogovore, upite i dojave tijekom rada, s jasnim ishodom (računom). Uz to, zaposlenici autoservisa (voditelji i serviseri) trebaju organizirano raspoređivati zadatke (naručene servise), obavještavati klijente (vlasnike) o napretku ili promjenama opsega posla te voditi evidenciju o konačnim troškovima servisa, obavljenim popravcima (ugrađenim dijelovima, utrošenom vremenu) i ukupnoj povijesti svih servisiranih vozila.

Cilj platforme je objediniti ponudu autoservisa i prikazati sve bitne informacije na jednom mjestu kako bi vlasnik mogao donijeti informiranu odluku iz jednog izvora i nakon toga omogućiti mu naručivanje servisa, praćenje rada (grafičkim pregledom i putem obavijesti e-poštom) i komunikaciju sa serviserom (putem poruka u stvarnom vremenu) na istom mjestu, u obliku web-aplikacije. Također, pružiti serviserima uvid u dodijeljeni posao u obliku ploče sa zadatcima uz način za evidentiranje popravaka i troškova, a voditeljima alate za upravljanje njima (raspoređivanje termina i dodjela servisera) kao i statistički pregled detalja prethodno obavljenih servisa.

## 1.2 Ciljani korisnici i dionici

| Skupina korisnika ili dionika | Potreba ili interes relevantan za projekt | Vrsta interesa |
| --- | --- | --- |
| Vlasnik vozila | Odabrati autoservis, naručiti svoje vozilo, pratiti i biti obaviješten o napretku ili promjenama opsega posla, dobiti račun, ostaviti povratne informacije i imati uvid u povijest servisa na vozilu | Akter |
| Voditelj autoservisa | Rasporediti narudžbe servisa, zadati termine serviserima, pregledati povijest i statistiku obavljenih servisa, plaćati pretplatu za korištenje platforme | Akter |
| Serviser | Preuzeti dodijeljeni posao, voditi evidenciju popravaka, komunicirati s vlasnikom o napretku ili promjenama opsega posla i zaključiti ga konačnim troškom | Akter |
| Administrator platforme | Upravljati korisnicima, postaviti cijene pretplate, pregledati statistiku korištenja platforme | Akter |
| Državni inspektorat | Dodatni izvor podataka za tržišne inspekcije (žalbe, zaštita potrošača), inspekcije rada (evidencija radnih sati) i inspekcije zaštite okoliša (evidencija zamijenjenih dijelova) | Pravni/regulatorni |
| Porezna uprava | Uvid u povijest transakcija (cijene, računi) radi nadzora | Pravni/regulatorni |
| Agencija za zaštitu osobnih podataka | Osiguravanje usklađenosti s GDPR-om (privole) | Pravni/regulatorni |
| Osiguravajuća društva | Uvid u evidenciju popravaka i povijest servisa radi procjene štete | Komercijalni |
| Distributeri autodijelova | Uvid u podatke o vozilima (model, godina) i dijelovima radi procjene potražnje | Komercijalni |
| Usluge za provjeru povijesti vozila | Uvid u zaštićene podatke o vozilima (broj šasije, kilometri) i evidenciju popravaka | Komercijalni |

## 1.3 Granice projekta

**Uključeno:** Registracija i prijava korisnika, naručivanje i praćenje tijeka servisa, ponude o promjeni termina i opsega posla, komunikacija vlasnika i servisera, izdavanje konačnog računa i potvrde o obavljenom servisu, slanje obavijesti e-poštom, ostavljanje povratnih informacija, raspoređivanje i evidencija posla servisa, pregled povijesti i statistike servisa, administracija svih korisnika i plaćanje pretplate za korištenje platforme

**Izvan opsega ili odgođeno:** Objedinjeni pregled ponude autoservisa za vlasnike vozila (odgođeno), s preporukama prilagođenim podatcima vlasnika (izvan opsega), implementacije drugih korisničkih sučelja osim web-aplikacije (izvan opsega), programska podrška prilagođena dionicima s regulatornim ili komercijalnim interesom (izvan opsega), npr. automatski i periodički izvoz traženih podataka iz baze u ljudski ili strojno čitljivom obliku

**Vanjske ovisnosti:** Usluga slanja e-pošte (npr. Mailgun), pružatelj identiteta protokolom OAuth 2.0 (npr. Auth0), usluga internetskog plaćanja (npr. Stripe)

## 1.4 Postojeći pristupi i opravdanost projekta

U slučaju kvara osobnog vozila, vlasnik će vjerojatno sam prikupljati bitne informacije o autoservisima (npr. lokacija, recenzije, cijene i ovlaštenje) kako bi ih mogli usporediti i donijeti konačnu odluku, i to iz više odvojenih izvora (npr. preporuke po lokaciji s Google Maps, javne recenzije s društvenih mreža, cijene s vlastitih oglasa ili web-mjesta pojedinih poduzeća). Također, stupanje u komunikaciju radi početnog dogovora kao i naknadnih upita vlasnika ili dojava servisera odvijat će se telefonskim pozivima ili izravnim odlascima u sam servis. Voditelji poduzeća s ograničenim brojem servisera koji istovremeno rade na više vozila trebaju upravljati njihovim zadatcima te voditi računa o novim narudžbama koje pristižu i evidenciji obavljenih servisa, za što možda koriste različite alate (digitalne ili ne). Autofix pruža objedinjenu platformu koja omogućuje izravnu komunikaciju servisera s klijentom putem poruka u stvarnom vremenu i obavijesti e-poštom, kao i sve potrebne alate za upravljanje narudžbama servisa, praćenje njihovog napretka i raspoređivanje zadataka u tijeku. Dio platforme koji vlasnicima objedinjuje prikaz i time olakšava pronalazak autoservisa koji im najbolje odgovara nije planirani zahtjev za prvu inačicu stoga ne zamjenjuje sustave preporučivanja postojećih platformi.
