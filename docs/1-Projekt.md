# 1. Opseg projekta

**Cilj:** Objasniti odobreni projektni zadatak vlastitim riječima tima. Čitatelj treba razumjeti problem, ciljane korisnike, cilj projekta i njegove granice bez prethodnog čitanja detaljnih zahtjeva.

## 1.1 Problem i cilj projekta

**Cilj:** Jasno razgraničiti problem koji se rješava od predloženog rješenja i stvarne koristi za korisnika.

U slučaju kvara osobnog vozila građaninu trebaju bitne informacije o dostupnim autoservisima (npr. lokacija, recenzije, cijene i ovlaštenje).
Cilj platforme je objediniti ponudu autoservisa i prikazati sve bitne informacije na jednom mjestu kako bi građanin mogao donijeti informiranu odluku iz jednog izvora.
Građaninu (vlasniku vozila, klijentu autoservisa) treba jasan način za naručivanje svog vozila na odabrani servis te praćenje njegovog tijeka kao i komunikacijski kanal sa serviserom za naknadne dogovore, upite i dojave.
Cilj
Voditelju autoservisa treba
Cilj

<details>
<summary><strong>Očekivane koristi i potkrepljujući dokazi</strong></summary>

**Primjer — CrisisMap:** „Tijekom teških vremenskih prilika građaninu mogu trebati prijave kriznih događaja relevantne za njegovu lokaciju. CrisisMap ima za cilj prikazati lokacijski relevantne prijave kriznih događaja na karti kako bi ih građanin mogao pronaći na jednom mjestu.” Time su navedeni problem, ciljani korisnik, predložena mogućnost i očekivana korist. Ne tvrdi se da je izmjereno smanjenje vremena reagiranja niti da aplikacija ima integraciju sa službom za hitne intervencije. Tim i dalje mora opisati opseg odobren za vlastiti projekt.

„Aplikacija smanjuje vrijeme odgovora na krizni događaj za 30 % na temelju simulacija.” Broj očekivanu korist čini konkretnijom, ali odmah zahtijeva provjeru: **gdje je simulacija i kako je postotak izračunan?** Ako takav dokaz ne postoji, očekivanu korist navedite bez brojčanog rezultata.

</details>

## 1.2 Ciljani korisnici i dionici

**Cilj:** Utvrditi osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
|  |  |

<details>
<summary><strong>Korisnici, dionici i neobavezna persona</strong></summary>

**Primjer — CrisisMap:**

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Građanin | Pronaći informacije o obližnjim kriznim događajima i podnijeti prijavu kriznog događaja s lokacijom. |
| Koordinator pomoći | Pregledati prijave relevantne za područje i dostupne resurse, ako je koordinacija unutar odobrenog opsega. |
| Regulatorno tijelo / Agencija za zaštitu podataka (Dionik) | Zahtijeva osiguravanje anonimnosti prijavitelja i zaštitu osobnih podataka (npr. usklađenost s GDPR-om). Ovaj dionik ne koristi aplikaciju, ali definira ograničenja sustava. |

Riječ je o dvjema različitim potrebama, a ne o dvjema izmišljenim biografijama. Akter komunicira s aplikacijom; demonstrator na kolegiju kojem je rezultat zanimljiv ne mora biti akter aplikacije. Koristite uloge i ovlasti iz svojeg odobrenog zadatka. Persona je neobavezna i korisna je kada pomaže riješiti konkretno projektno pitanje.

**Neobavezni primjer persone:** Ana, koordinatorica pomoći, treba aktualne informacije o resursima kako bi mogla rasporediti pomoć. To može pomoći kada tim odlučuje koje informacije koordinator treba vidjeti prve. Personu opišite samo ako objašnjava projektnu odluku; popis izmišljenih biografija nije obavezni rezultat kolegija.

</details>

## 1.3 Granice projekta

**Cilj:** Jasno definirati granice sustava — što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

**Uključeno:** [Glavne mogućnosti.]  
**Izvan opsega ili odgođeno:** [Navedite funkcionalnosti koje su namjerno izostavljene ili prebačene u buduće verzije, uz kratko inženjersko ili vremensko obrazloženje.] 
**Vanjske ovisnosti:** [Navedite nužne vanjske usluge, API-je, baze podataka ili izvore informacija bez kojih sustav ne može funkcionirati (npr. Google Maps, platni pristupnici, vanjski pružatelj identiteta (OAuth)).]

<details>
<summary><strong>Primjer početne granice projekta</strong></summary>

**Primjer — CrisisMap:**  
**Uključeno:** Podnošenje prijave kriznog događaja s lokacijom i pregled prijava na karti.  
**Isključeno:** Automatsko angažiranje hitnih službi; prikaz prijave ne odobrava niti pokreće službenu intervenciju.  
**Vanjska ovisnost:** Pružatelj kartografskih usluga omogućuje prikaz karte; aplikacija ostaje odgovorna za vlastite podatke o prijavama.

Ovo je konkretna granica jer razdvaja prikaz informacija od službenog odgovora hitnih službi i određuje koji sustav osigurava kartu. Izuzeće i ovisnost dio su **nastavnog scenarija**, a ne tvrdnja o tome što objavljena aplikacija stvarno implementira; te činjenice određuju odobreni opseg i stvarna aplikacija tima.

**Drugi primjer korisne granice:** U prvoj implementaciji usredotočite se na koordinaciju odgovora na poplavu. Navedite vrste događaja ili korisnika koje pokriva odobreni projekt umjesto obećavanja svih mogućih kriznih procesa. Predviđanje pomoću umjetne inteligencije ili obuku u virtualnoj stvarnosti navedite kao budući rad samo ako predstavljaju smislen sljedeći korak, a ne kao pretpostavljene funkcionalnosti prve inačice.

Tvrdnja poput „modularna arhitektura omogućuje brzo postavljanje u novim regijama” zahtijeva stvarno projektno uporište. Ovdje nemojte obećavati prilagodljivost samo zato što zvuči kao poželjna korist projekta.

Ovaj pregled zadržite na razini opsega: navedite glavnu mogućnost i njezinu granicu bez popisivanja svakog zahtjeva ili projektne pojedinosti. Ono što je stvarno dovršeno i ono što je ostalo nedovršeno navedite u završnim rezultatima, a ne u ovom početnom opisu.

</details>

## 1.4 Postojeći pristupi i opravdanost projekta

U slučaju kvara osobnog vozila, građanin će vjerojatno sam prikupljati bitne informacije o autoservisima (npr. lokacija, recenzije, cijene i ovlaštenje) kako bi ih mogli usporediti i donijeti konačnu odluku, i to iz više odvojenih izvora (npr. preporuke po lokaciji s Google Maps, javne recenzije s društvenih mreža, cijene s vlastitih oglasa ili web-mjesta pojedinih poduzeća). Također, stupanje u komunikaciju radi početnog dogovora kao i naknadnih upita klijenta ili dojava servisera odvijat će se telefonskim pozivima ili izravnim odlascima u sam servis. Voditelji poduzeća s ograničenim brojem servisera koji istovremeno rade na više vozila trebaju upravljati njihovim zadatcima te voditi računa o novim narudžbama koje pristižu i evidenciji obavljenih popravaka, za što možda koriste različite alate (digitalne ili ne). Autofix pruža objedinjenu platformu koja omogućuje izravnu komunikaciju servisera s klijentom putem poruka u stvarnom vremenu i obavijesti e-poštom, kao i sve potrebne alate za upravljanje narudžbama servisa, praćenje njihovog napretka i raspoređivanje zadataka u tijeku. Dio platforme koji građanima objedinjuje prikaz i time olakšava pronalazak autoservisa koji im najbolje odgovara nije planirani zahtjev za prvu inačicu stoga ne zamjenjuje sustave preporučivanja postojećih platformi.
