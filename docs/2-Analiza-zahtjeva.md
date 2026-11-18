# 2. Analiza zahtjeva

## 2.1 Funkcijski zahtjevi

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje prijavu i registraciju putem pružatelja identiteta | Visok | Zadatak | Uspostavlja se veza između vanjskog identiteta i korisnika platforme pri prvoj prijavi (registraciji) i potvrđuje svakom idućom. Samo uspješna prijava dozvoljava radnje aplikacije u ime korisnika. |
| F-002 | Korisnici biraju ulogu i unose bitne podatke prilikom registracije | Visok | Zadatak | Uspješno povezivanje identiteta vodi na dijalog za unos korisničkih podataka (uloga, osobni podatci). Voditelji i serviseri dodatno unose ime autoservisa, a serviseri i specijalizaciju. Nedovršena registracija se ponavlja i ne daje pristup aplikaciji. |
| F-003 | Sustav prikazuje ponudu autoservisa | Nizak | Dodatna funkcionalnost | Svim posjetiteljima prikazuje se javna ponuda autoservisa s prethodnim recenzijama |
| F-004 | Vlasnik unosi i uređuje podatke svojih vozila | Visok | Zadatak | Pohranjuje se i prikazuje popis vozila s markom, modelom, godinom proizvodnje, registracijskom oznakom i kilometražom |
| F-005 | Vlasnik naručuje servis | Visok | Zadatak | Pohranjuje se i prikazuje predana narudžba s odabranim terminom dolaska, vozilom i vrstom servisa, servis je u početnom stanju i vlasnik može odustati od narudžbe |
| F-006 | Sustav prikazuje popis servisa u tijeku | Visok | Zadatak | Prikaz ovisi o korisniku, vlasnik pregledava one koje je naručio, voditelj sve pristigle narudžbe autoservisa, a serviser one koji su mu dodijeljeni |
| F-007 | Sustav prikazuje povijest servisiranja | Srednji | Zadatak | Prikaz ovisi o korisniku, vlasnik pregledava servise za njegova vozila, a voditelj sve obavljene servise njegovog autoservisa |
| F-008 | Sustav prikazuje grafički pregled stanja narudžbe tj. servisa i detaljnu vremensku crtu tijeka rada | Srednji | Povratne informacije | Za pojedini servis na popisu stvara se detaljniji prikaz sa svim podatcima i radnjama definiranim u drugim zahtjevima, ovisno o korisniku |
| F-009 | Sustav šalje obavijesti o promjeni stanja narudžbe/servisa e-poštom | Srednji | Povratne informacije | Promjene bitnih podataka vezanih za pojedini servis šalju se u obliku sažete transakcijske obavijesti e-poštom, ovisno o korisniku |
| F-010 | Voditelj dodjeljuje narudžbe serviserima | Visok | Zadatak | Pohranjuje se dodijeljeni serviser, ažurira se stanje koje se prikazuje vlasniku i serviseru |
| F-011 | Voditelj mijenja raspored servisa, vlasnik prihvaća ili odbija novi termin | Visok | Zadatak | Pohranjuje se potvrđeni termin ili zahtjev za novim, ažurira se stanje koje se prikazuje vlasniku i serviseru |
| F-012 | Vlasnik i serviser komuniciraju porukama u stvarnom vremenu | Srednji | Dodatna funkcionalnost | Pohranjuju se i prikazuju poruke na vremenskoj crti servisa (samo tekstualnog sadržaja u prvoj inačici) |
| F-013 | Serviser šalje ponudu o promjeni opsega posla, vlasnik je prihvaća ili odbija | Visok | Zadatak | Pohranjuje se opis potrebnih radova s procijenjenim troškom, ažurira se stanje koje se prikazuje vlasniku i serviseru |
| F-014 | Serviser evidentira radove i zaključuje servis | Visok | Zadatak | Pohranjuju se podatci o obavljenom poslu (rezultat dijagnostike, ugrađeni dijelovi, utrošeno vrijeme, dodatne napomene i sl.), ishod i konačni trošak servisa, ažurira se stanje koje se prikazuje vlasniku i serviseru |
| F-015 | Vlasnik zaprima i preuzima račun i potvrdu o obavljenom servisu | Visok | Zadatak | Podatci servisa (početni i zaključeni) izvoze se u potvrdu (neformatirani tekstualni dokument u prvoj inačici) koju vlasnik može preuzeti bilo kada, kao i račun s točnim troškovima po obavljenom poslu i konačnim troškom |
| F-016 | Vlasnik plaća račun | Nizak | Dodatna funkcionalnost | Izdavanje računa povezano je ili preusmjereno na uslugu internetskog plaćanja |
| F-017 | Vlasnik ocjenjuje obavljeni servis i ostavlja komentar | Srednji | Zadatak | Pohranjuje se recenzija i prikazuje se voditelju |
| F-018 | Voditelj pregledava statistički sažetak obavljenih servisa | Nizak | Zadatak | Računaju se i prikazuju npr. broj obavljenih servisa po vrsti, prosječno trajanje i ukupna vrijednost usluga kroz vrijeme |
| F-019 | Voditelj obročno plaća pretplatu za korištenje platforme | Srednji | Zadatak | Mjesečno se izdaje račun koji se plaća putem usluge internetskog plaćanja |
| F-020 | Administrator upravlja autoservisima i korisnicima | Srednji | Zadatak | Prikazuju se popisi svih korisnika i svih autoservisa s podatcima i upravljačkim radnjama (deaktivacija korisnika, stvaranje autoservisa) |
| F-021 | Administrator postavlja cijenu pretplate | Srednji | Zadatak | Pohranjuje se nova cijena i ažurira se prikaz svim voditeljima, naplaćuje se idućim računima pretplate |
| F-022 | Administrator pregledava osnovne podatke o korištenju platforme | Nizak | Zadatak | Prate se i prikazuju npr. broj posjetitelja platforme i novih registracija |
| F-023 | Voditelj uređuje javne podatke autoservisa | Nizak | Dodatna funkcionalnost | Pohranjuju se ime, logo i ponuđene vrste autoservisa s okvirnim cijenama |

## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | [Konkretan zahtjev (npr. odziv, sigurnost, pristupačnost)] | Visok / Srednji / Nizak | [Sigurnost / Uputa / SLA] | [Mjerenje / Testni scenarij / Pregled] |
|  |  |  |  |  |

<details>
<summary><strong>Nefunkcijski zahtjevi za analizu</strong></summary>

Relevantna svojstva mogu se odnositi na uporabljivost, pristupačnost, sigurnost, performanse ili pouzdanost. Odaberite svojstva specifična za projekt i opišite kako ih je moguće provjeriti. Zahtjev navodi što se očekuje; stvarna opažanja i dokazi pripadaju rezultatima ispitivanja, a ne drugom stupcu s rezultatima u ovoj tablici.

**Primjer — nefunkcijski zahtjevi za aplikaciju CrisisMap:**

| ID | Opis | Prioritet | Izvor |
| --- | --- | --- | --- |
| NF-1.1 | Sustav mora podržati 1.000 istodobnih korisnika uz vrijeme odziva kraće od 1 s. | Visok | SLA | Opteretiti sustav zadanim brojem istodobnih korisnika i izmjeriti vrijeme odziva. |
| NF-1.2 | Svi osjetljivi podaci moraju biti šifrirani algoritmom AES-256. | Visok | Sigurnosna politika | Pregledati način pohrane i konfiguraciju šifriranja za podatke na koje se zahtjev odnosi. |
| NF-1.3 | Korisničko sučelje mora podržavati engleski i španjolski jezik. | Srednji | Povratna informacija dionika | Pregledati reprezentativne korisničke tijekove u oba jezika. |
| NF-1.4 | Dostupnost sustava mora iznositi najmanje 99,5 % mjesečno. | Visok | SLA | Izračunati mjesečnu dostupnost iz zapisa sustava za nadzor, ako takvi podaci postoje.|
| NF-3.1.7 | Sustav treba imati odgovarajuću dokumentaciju. | Visok | Pravila dokumentiranja | Pregledati zahtijevane dokumentaciju prema obavezama.|
| NF-3.1.7.1 | Kod sustava treba biti dokumentiran prema „Code Conventions for the Java Programming Language”. | Visok | Pravila dokumentiranja | Pregledati kod. |
| NF-3.1.7.2 | Sustav treba biti opisan projektnim dokumentom/SRS-om. | Visok | Pravila dokumentiranja | Pregledati strukturu dokumenta  |
| NF-3.1.7.3 | Sustav treba imati „Operativni priručnik” koji opisuje pravilnu uporabu. | Visok | Pravila dokumentiranja | Pregledati postoji li priručnik i mogu li se prema njemu izvršiti opisane radnje. |
| NF-3.1.7.4 | Sustav treba imati „Plan implementacije” za pravilno postavljanje. | Visok | Smjernice za postavljanje | Pregledati odgovara li opisani postupak stvarnom postupku postavljanja.|

**Provjerljivost i opseg:** Primjer uvodi performanse, sigurnost, lokalizaciju, dostupnost i dokumentaciju, uključujući hijerarhijski ID zahtjeva. Navedeni izvori primjeri su podrijetla zahtjeva, a ne dokaz da za studentski projekt stvarno postoji SLA ili sigurnosna politika. Vrijednosti poput 1.000 korisnika, 99,5 % mjesečne dostupnosti i AES-256 moraju imati odobren izvor i izvediv način provjere prije nego što postanu zahtjevi tima. Skup zahtjeva o dokumentaciji ilustrira razlaganje zahtjeva, ali zahtjevi za izradu *ove dokumentacije kolegija* u pravilu pripadaju uputama zadatka, a ne zahtjevima kvalitete web-aplikacije.

**Primjer prilagodbe:** Ako je pristupačnost zahtjevana za  projekt, projektno specifičan zahtjev može glasiti: „NF-01: Sve obavezne radnje u obrascu za podnošenje prijave moguće je izvršiti samo tipkovnicom, uz vidljiv fokus na aktivnoj kontroli.” Provjera: navigirati kroz obrazac bez pokazivačkog uređaja, odabrati ili unijeti lokaciju, poslati prijavu i provjeriti može li se pročitati rezultat. To je provjerljivo svojstvo kvalitete, a ne dodatna funkcionalnost koju svaki projekt mora implementirati.

</details>

## 2.3 Dionici i akteri

| ID | Akter | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 | Vlasnik vozila | F-001, F-002, F-003, F-004, F-005, F-006, F-007, F-008, F-009, F-010, F-011, F-012, F-013, F-014, F-015, F-016, F-017 |
| A-02 | Voditelj autoservisa | F-001, F-002, F-005, F-006, F-007, F-008, F-009, F-010, F-011, F-017, F-018, F-019, F-023 |
| A-03 | Serviser | F-001, F-002, F-006, F-008, F-009, F-010, F-011, F-012, F-013, F-014 |
| A-04 | Administrator platforme | F-020, F-021, F-022 |

**Napomena:** Vanjski dionici koji nisu izravni akteri i odnosi svih dionika prema sustavu zabilježeni su u [tablici 1.2](1-Projekt.md#12-ciljani-korisnici-i-dionici).

## 2.4 Ograničenja i pretpostavke

| ID | Tip | Opis | Izvor | Posljedica ili način provjere |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | Korištenje pružatelja identiteta protokolom OAuth 2.0 za autentifikaciju | Zadatak | Oblikovati prijavu, registraciju i provjeru autorizacije za API zahtjeve prema protokolu, po mogućnosti za više različitih pružatelja identiteta, odlučiti koji su |
| AS-01 | Pretpostavka | Adresa e-pošte i lozinka ne moraju biti zadani za stvaranje korisnika niti platforma treba sigurno spremati lozinke u bazi | Procjena tima | Provjeriti specifikaciju i tok podataka protokola OAuth 2.0 |
| C-02 | Ograničenje | Korisničko sučelje je web-aplikacija | Zadatak | Ne razvijati za druge platforme (Android, iOS, Windows) te koristiti web tehnologije i razvojne okvire |
| AS-02 | Pretpostavka | Nije nužno da prikaz web-aplikacije bude čitljiv i ispravno raspoređen samo na vodoravnom (desktop) formatu | Procjena tima | Provjeriti s asistentom, razviti prilagodljivo korisničko sučelje |
| C-03 | Ograničenje | Korištenje usluge slanja e-pošte | Zadatak | Razviti integraciju s uslugom, provjeriti uspješnu dostavu tijekom ispitivanja sustava, odabrati pružatelja |
| AS-03 | Pretpostavka | Nije nužno da samo vlasnik vozila prima obavijesti e-poštom | Procjena tima | Provjeriti s asistentom, odrediti koji događaji se šalju kome |
| C-04 | Ograničenje | Korištenje usluge internetskog plaćanja | Zadatak | Razviti integraciju s uslugom, provjeriti plaćanje (npr. simuliranom kreditnom karticom) tijekom ispitivanja sustava, odabrati pružatelja |
| AS-04 | Pretpostavka | Platforma ne treba sigurno spremati podatke za plaćanje u bazi | Procjena tima | Provjeriti obrasce korištenja i tok podataka odabrane usluge plaćanja |
| AS-05 | Pretpostavka | Voditelji autoservisa su oni koji plaćaju pretplatu tj. unose podatke za plaćanje | Procjena tima | Provjeriti s asistentom |
| AS-06 | Pretpostavka | Spomenute "napredne funkcionalnosti" za koje se plaća pretplata su upravo one koje platforma pruža autoservisima, stoga oni uvijek plaćaju pretplatu i nema ograničenja na osnovne i dodatne funkcionalnosti | Procjena tima | Provjeriti s asistentom |
| AS-07 | Pretpostavka | Administrator stvara dostupne autoservise unesene tijekom registracije voditelja i servisera, nisu proizvoljni | Procjena tima | Provjeriti s asistentom |
| AS-08 | Pretpostavka | Voditelji i serviseri unose točne podatke o autoservisu, nema potrebe za odvojeno upravljanje pozivnicama i potvrdama izvan zajedničkog toka registracije | Procjena tima | Provjeriti s asistentom |
| AS-09 | Pretpostavka | Mogućnost voditelja da mijenja članstvo servisera ("daje otkaz") i zatvaranje cijelog autoservisa su izvan opsega | Procjena tima | Provjeriti s asistentom |

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
|  |  |  |  |

<details>
<summary><strong>Primjer značajne promjene</strong></summary>

**Primjer scenarija — odluka tijekom pregleda CrisisMapa:**

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| [Datum pregleda] | F-004, NF-01 | Dodati ručni odabir lokacije kada korisnik odbije geolokaciju preglednika; bez toga građanin ne može podnijeti prijavu kriznog događaja s lokacijom. | [Poveznica na stvarnu bilješku pregleda ili zadatak tima] |

**Razlog promjene:** Zapis navodi zahvaćene stavke i objašnjava razlog iz perspektive korisnika, a zatim upućuje na dokaz odluke.  Nakon stvarne odluke ažurirajte trenutačne zahtjeve; stilska izmjena teksta ne zahtijeva zapis u dnevniku promjena. Trenutačni red zadataka držite u alatu za praćenje zadataka.

</details>

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | [UC-001] | [Komponenta, modul ili drugo mjesto realizacije] | [ST-01, CT-01 ili druga provjera] |
|  |  |  |  |

<details>
<summary><strong>Sljedivost zahtjeva do obrazaca uporabe i ispitivanja</strong></summary>

**Primjer — poveznice zahtjeva CrisisMapa:**

| ID zahtjeva | Obrazac uporabe / ponašanje | Arhitekturna realizacija | Ispitivanje / provjera |
| --- | --- | --- | --- |
| F-004 | UC-002 Podnošenje prijave kriznog događaja | Web-klijent; API za prijave; usluga za prijave | ST-01 Valjano podnošenje prijave; ST-02 Nedostaje obavezna lokacija; ST-03 Dopuštenje geolokacije odbijeno |
| F-005 | Odabir primatelja obavijesti | Proces za obavijesti | CT-06 Primatelji obavijesti; potpuna dostava obavijesti nije pokrivena ovom provjerom |

**Pokrivenost i dokazi:** CT-06 provjerava odabir primatelja za F-005, ali sam po sebi ne dokazuje da je obavijest stvarno dostavljena; ako projekt zahtijeva potpunu dostavu od početka do kraja, za taj dio treba postojati zasebna provjera. Svaki redak pokazuje gdje je zahtjev opisan kao ponašanje, gdje je ostvaren u sustavu i gdje se nalazi dokaz njegove provjere. Zahtjev ne mora imati zaseban obrazac uporabe ako ne opisuje korisničku interakciju; tada navedite relevantno ponašanje, arhitekturni element ili drugi prikladan način realizacije. U svojem projektu koristite stvarne nazive komponenata, modula i provjera iz dokumentacije i implementacije. Nedostajuću poveznicu ostavite praznom ili označite kao *na čekanju* uz kratak razlog. Stvarni rezultati ispitivanja bilježe se uz ispitne slučajeve; ova tablica pokazuje gdje ih pronaći.

</details>

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Demo 2  | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Završni pregled | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

<details>
<summary><strong>Odluke o zahtjevima nakon pregleda</strong></summary>

**Primjer scenarija — pregled zahtjeva CrisisMapa:**

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | Demonstracija pokazuje da odbijanje pristupa lokaciji preglednika onemogućuje podnošenje prijave. | Dogovoriti ručni odabir lokacije; ažurirati F-004 i primjer NF-01 te razlog zabilježiti u odjeljku 2.5. |

**Odluka povezana s povratnom informacijom:** Zapis povezuje opaženo ponašanje s konkretnom promjenom zahtjeva i izbjegava zapisnik cijelog sastanka. Zapišite samo stvarne povratne informacije i odluke za kontrolne točke. Konzultacije u nekom drugom tjednu ne stvaraju dodatnu obaveznu predaju.

</details>
