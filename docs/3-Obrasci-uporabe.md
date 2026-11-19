# 3. Obrasci uporabe

**Cilj:** Prikazati glavne interakcije između aktera aplikacije i sustava. Opišite kako akter ostvaruje cilj i što se događa kada važan korak ne uspije. Interakcije temeljite na odobrenim zahtjevima i ažurirajte ih kako se aplikacija razvija.

## 3.1 Dijagram obrazaca uporabe

**Cilj:** Prikazati granicu sustava, relevantne aktere i njihove glavne ciljeve u **preglednom UML dijagramu obrazaca uporabe**. Ako je za razumijevanje pojedinog dijela sustava potrebno prikazati više detalja, taj dio izdvojite u dodatni usmjereni dijagram. Dodatni dijagrami trebaju produbiti dio preglednog modela, a ne stvarati nepovezane ili duplicirane prikaze istog sustava.

![Dijagram obrazaca uporabe sustava CrisisMap](./assets/diagrams/3-1-crisismap-system-UC.svg)

**Slika 3.1. Dijagram obrazaca uporabe sustava CrisisMap**

**PlantUML izvor:** [izvor](./puml/3-1-crisismap-system-UC.puml)

**Provjera dijagrama:** Prikažite prepoznate uloge koje **komuniciraju s aplikacijom**, a ne dionike koji s njom nemaju interakciju. Svaki glavni korisnički cilj mora imati pridruženog aktera; uključeni obrazac uporabe može se dosegnuti preko drugog obrasca uporabe bez vlastite izravne veze s akterom. `<<include>>` i `<<extend>>` koristite samo kada odnos odgovara stvarnom ponašanju.

<details>
<summary><strong>Primjer aktera i granica sustava</strong></summary>

**Opis primjera — CrisisMap:**

Dijagram prikazuje **ogledni scenarij** s građaninom, posjetiteljem i koordinatorom pomoći te vanjskim pružateljem identiteta. Pružatelj identiteta sudjeluje u obrascu uporabe „Prijava u sustav” kao sekundarni akter: korisnik pokreće prijavu u aplikaciji, a vanjski sustav provodi autentikaciju. Budući da projekt koristi vanjskog pružatelja identiteta, ta se ovisnost prikazuje i u dijagramu obrazaca uporabe; tehnički detalji integracije pripadaju arhitekturnoj dokumentaciji.

**Odabir aktera i ciljeva:** Granica pokazuje što aplikacija nudi, akteri imaju različite ciljeve, a nijedan akter ni obrazac uporabe ne tvrdi da ova studentska aplikacija angažira hitne službe. Dijagram usporedite s odobrenim funkcijskim zahtjevima i akterima.


**Pet pitanja za odabir sadržaja dijagrama** (ne pet dijagrama za predaju):

| Fokus | Pitanje |
| --- | --- |
| Cijeli sustav | Koji korisnički ciljevi najbolje objašnjavaju čemu ova aplikacija služi? |
| Ključne funkcionalnosti | Koje ciljeve treba detaljnije opisati ili, ako je potrebno, prikazati zasebnim usmjerenim dijagramom? |
| Korisničke uloge | Koji akteri mogu sudjelovati u pojedinom cilju i kako se njihove ovlasti razlikuju? |
| Ključni procesi | Koji cilj ima važne alternative koje treba opisati u obrascu uporabe? |
| Vanjske integracije | Sudjeluje li drugi sustav u obrascu uporabe kao **sekundarni akter**, primjerice odobreni pružatelj identiteta pri prijavi? |

Vanjski sustav može biti sekundarni akter obrasca uporabe kada sudjeluje u ostvarenju korisničkog cilja; tehničke veze opisuju se u arhitekturi. Nemojte stvarati dodatni obavezni dijagram obrazaca uporabe samo radi popisa integracija. Prenatrpan dijagram podijelite prema povezanim akterima ili ciljevima samo kada time postaje čitljiviji.

</details>

## 3.2 Specifikacije obrazaca uporabe
<!--
**Cilj:** Za svaki obrazac uporabe iz dijagrama objasniti cilj aktera, uobičajenu interakciju s aplikacijom i važne alternative. Jednostavne obrasce uporabe opišite kratko; proširite one kod kojih alternative, vanjske ovisnosti ili posljedice zahtijevaju dodatno objašnjenje.

**Za svaki obrazac uporabe koristite jednu okomitu tablicu.** Navedite samo onoliko pojedinosti koliko interakcija zahtijeva; neprimjenjivu alternativu izostavite umjesto da je popunjavate samo radi forme.
-->
### UC-[ID]: [Naziv usmjeren na cilj]

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | [Uloga definirana u analizi zahtjeva] |
| **Povezani zahtjevi** | [Identifikatori funkcijskih zahtjeva, npr. F-001, F-004] |
| **Preduvjeti** | [Stanje sustava koje mora biti zadovoljeno prije početka izvođenja] |
| **Glavni uspješni tok** | 1. Akter pokreće akciju.<br>2. Program obrađuje unos i vraća povratnu informaciju.<br>3. [Koračni prikaz interakcije do ostvarenja cilja] |
| **Alternativni tokovi / Iznimke** | **[Korak]a — [Naziv iznimke]:** [Uvjet nastanka, reakcija programa i nastavak toka] |
| **Posljedice (ishod)** | [Promjena stanja podataka ili potvrda nakon uspješnog završetka] |

<details>
<summary><strong>Primjeri specifikacija: Registracija i prijava kriznog događaja</strong></summary>

<!-- **Primjer — CrisisMap:**

**UC-001: Registracija računa.** Ovaj kratki primjer odnosi se na projekt čiji odobreni zadatak uključuje račune s adresom e-pošte i lozinkom.

| Polje | Opis |
| --- | --- |
| Primarni akter | Građanin (A-02 u primjeru) |
| ID zahtjeva | F-001 |
| Preduvjeti, ako postoje | Nema. |
| Glavni tijek | Građanin unosi adresu e-pošte; aplikacija šalje poveznicu za potvrdu; građanin potvrđuje račun. |
| Alternativni ili neuspješni tijekovi, ako postoje | Adresa e-pošte već postoji → aplikacija objašnjava zašto se registracija ne može nastaviti. |
| Rezultat | Račun je aktivan nakon potvrde. |

Ako odobreni zadatak umjesto toga koristi isključivo OAuth prijavu, zamijenite ovaj primjer odgovarajućim ponašanjem prijave; nemojte dodavati registraciju lokalnom lozinkom samo radi podudaranja s primjerom.

**UC-002: Podnošenje prijave kriznog događaja.** Ista polja mogu opisati dulji tijek u kojem odabir lokacije, provjera valjanosti i pohrana mogu ne uspjeti.

| Polje | Opis |
| --- | --- |
| Primarni akter | Građanin |
| ID zahtjeva | F-004 |
| Preduvjeti, ako postoje | Obrazac za prijavu dostupan je. Ako odobreni zadatak zahtijeva prijavu u sustav, građanin je prijavljen. |
| Glavni tijek | 1. Građanin otvara obrazac za prijavu; aplikacija prikazuje polja za vrstu kriznog događaja, razinu ozbiljnosti, opis i lokaciju.<br>2. Građanin unosi podatke i odabire lokaciju na karti ili drugim podržanim načinom.<br>3. Građanin podnosi obrazac; aplikacija provjerava obavezna polja i lokaciju.<br>4. Aplikacija pohranjuje prijavu i prikazuje potvrdu s referencom na nju. |
| Alternativni ili neuspješni tijekovi, ako postoje | **1a — Prijava u sustav nije uspjela:** Ako je prijava obavezna, a pružatelj identiteta je ne dovrši, prijava kriznog događaja ostaje nepodnesena i aplikacija objašnjava kako pokušati ponovno.<br>**2a — Odbijen pristup lokaciji:** Ako aplikacija nudi geolokaciju, ali je korisnik odbije, građanin ručno odabire lokaciju ako ta mogućnost postoji; tijek se nastavlja u koraku 3.<br>**3a — Nevaljana ili nedostajuća lokacija:** Aplikacija objašnjava problem, po mogućnosti zadržava unesene podatke i ne pohranjuje prijavu; građanin ispravlja lokaciju i ponavlja korak 3.<br>**3b — Pohrana nije uspjela:** Aplikacija prijavljuje neuspjeh i ne prikazuje lažnu potvrdu o podnošenju. |
| Rezultat | Aplikacija pohranjuje prijavu kriznog događaja i potvrđuje njezino podnošenje. |

**Odabir razine detalja:** Oba primjera koriste ista polja. UC-001 je kratak jer je glavna iznimka jasna; UC-002 zahtijeva numerirane korake i alternative jer oni mijenjaju ishod i mogu usmjeravati ispitivanje.Pri prilagodbi primjera koristite ID-ove zahtjeva i ponašanje vlastite aplikacije.

**UC-005: Moderiranje prijave kriznog događaja.** Ovaj primjer vrijedi samo za projekt u kojem odobreni opseg uključuje moderatorski pregled prijava.

| Polje | Opis |
| --- | --- |
| Primarni akter | Moderator (A-05 u primjeru) |
| ID zahtjeva | F-008 |
| Preduvjeti, ako postoje | Moderator je prijavljen i ima moderatorske ovlasti; postoji prijava koja čeka pregled. |
| Glavni tijek | 1. Moderator otvara prijavu koja čeka pregled.<br>2. Aplikacija prikazuje podatke prijave i dostupne moderatorske radnje.<br>3. Moderator odabire odobravanje ili odbijanje.<br>4. Aplikacija provjerava ovlasti, mijenja status prijave i prikazuje novi status. |
| Alternativni ili neuspješni tijekovi, ako postoje | **3a — Radnja nije potvrđena:** Moderator odustaje od promjene i prijava ostaje nepromijenjena.<br>**4a — Ovlasti nisu valjane:** Aplikacija odbija promjenu i status prijave ostaje nepromijenjen. |
| Rezultat | Prijava ima novi status ako je moderatorska radnja uspješno provedena; inače ostaje nepromijenjena. |
</details> -->

---

UC-001: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-001 |
| Preduvjeti, ako postoje | / |
| Glavni tijek | Građanin preko OAuth se registrira/ulogira kako bi mogao koristiti stranicu. |
| Alternativni ili neuspješni tijekovi, ako postoje | Uneseni su krivi ili nepostojeći podaci te se javlja odgovarajuća poruka. |
| Rezultat | Prijava je uspješna i korisnik može pristupiti stranici. |
<br>

UC-002: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-008 |
| Preduvjeti, ako postoje | Klijent je prijavljen na račun s klijentskim ovlastima. |
| Glavni tijek | Klijentu se prikazuje trenutna faza u kojoj se servis za pojedino vozilo nalazi. |
| Alternativni ili neuspješni tijekovi, ako postoje | / |
| Rezultat | Klijent dobije informaciju o statusu servisa vozila. |
<br>

UC-003: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-005 |
| Preduvjeti, ako postoje | Klijent je prijavljen na račun s klijentskim ovlastima. |
| Glavni tijek | Klijent šalje zahtjev za servisiranje vozila, koju voditelj može prihvatiti i pridjelit joj servisera ili odbiti. |
| Alternativni ili neuspješni tijekovi, ako postoje | 1. Klijent krivo pošalje zahtjev - u slučaju da krivo pošalje zahtjev (npr. nepotpune informacije o vozilu), voditelj mora informirati klijenta da nedostaju informacije i da ponovno pošalje zahtjev.<br> 2. Voditelj ne potvrdi/odbije narudžbu - u slučaju da voditelj ne daje informaciju o narudžbi, klijent dobije e-poštu da zahtjev nije uspješno primljen. |
| Rezultat | Narudžba klijenta je obrađena te se klijentu javi je li prihvaćena ili odbijena. |
<br>

UC-004: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-012 |
| Preduvjeti, ako postoje | Klijent/radnik su se uspješno prijavili na svoj račun. |
| Glavni tijek | Građanin i klijent komuniciraju pomoću poruka o servisu vozila. |
| Alternativni ili neuspješni tijekovi, ako postoje | Poruka nije uspješno poslana - u slučaju da poruka nije uspješno poslana, pošiljatelj dobije informaciju da nije uspješno poslana poruka i da pokuša ponovno. |
| Rezultat | Uspješna komunikacija klijenta i servisera preko poruka. |
<br>

UC-005: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Voditelj |
| ID zahtjeva | F-010 |
| Preduvjeti, ako postoje | Voditelj je uspješno prijavljen na račun s odgovarajućim ovlastima. |
| Glavni tijek | Serviser dodjeljuje zahtjeve za servisiranje serviserima. |
| Alternativni ili neuspješni tijekovi, ako postoje | Nema servisera kojemu može dodijeliti narudžbu - u slučaju nemogućnosti dodjele, voditelj javi klijentu da se termin mora odgoditi. |
| Rezultat | Uspješna dodjela narudžbe serviseru. |
<br>

UC-006: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Serviser |
| ID zahtjeva | ? (provjeriti) |
| Preduvjeti, ako postoje | Serviser je ulogiran s odgovarajućim ovlastima. |
| Glavni tijek | Serviser aktivno ažurira stanje servisa. |
| Alternativni ili neuspješni tijekovi, ako postoje | / |
| Rezultat | Serviser promijeni status servisa i klijent može vidjeti promijenjen status. |
<br>

UC-007: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Administrator platforme |
| ID zahtjeva | ? (provjeriti) |
| Preduvjeti, ako postoje | Administrator je prijavljen na račun s odgovarajućim ovlastima. |
| Glavni tijek | Administrator postavlja/mijenja cijenu koju servisi moraju platiti za prikaz na stranici Autofix. |
| Alternativni ili neuspješni tijekovi, ako postoje | Neuspješno postavljanje cijene - u slučaju da se nije uspješno postavila/promijenila cijena, administrator dobije poruku koja javlja grešku. |
| Rezultat | Cijena pretplate je promijenjena. |
<br>

UC-008: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Administrator platforme |
| ID zahtjeva | F-020 |
| Preduvjeti, ako postoje | Administrator je prijavljen na račun s odgovarajućim ovlastima. |
| Glavni tijek | Administrator dodjeljuje/potvrđuje odgovarajuće ovlasti korisnicima. |
| Alternativni ili neuspješni tijekovi, ako postoje | / |
| Rezultat | Dodane su odgovarajuće ovlasti pojedinim serviserima/voditeljima. |
<br>

UC-009: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-009 |
| Preduvjeti, ako postoje | / |
| Glavni tijek | Klijent preko e-pošte dobije informacije o bitnim promjenama vezane za pojedine servise. |
| Alternativni ili neuspješni tijekovi, ako postoje | / |
| Rezultat | Klijent dobije sve bitne informacije vezane za promjene pojedinih servisa. |
<br>

UC-010: ...

| Polje | Opis |
| --- | --- |
|Primarni akter | Klijent |
| ID zahtjeva | F-016 |
| Preduvjeti, ako postoje | / |
| Glavni tijek | Klijent je preusmjeren na uslugu za internetsko plaćanje i dobije e-poštu o potvrdi uplate. |
| Alternativni ili neuspješni tijekovi, ako postoje | Nemogućnost internetskog plaćanja - u slučaju da klijent nije u mogućnosti platiti preko usluge, može dobiti račun na e-poštu. |
| Rezultat | Klijent je uspješno platio servis. |

## 3.3 Provjera dosljednosti obrazaca uporabe

**Cilj:** Provjeriti međusobnu usklađenost obrazaca uporabe, aktera, zahtjeva i ispitnih slučajeva. Cjelovito mapiranje održava se isključivo u **[matrici sljedivosti zahtjeva](2-Analiza-zahtjeva.md#26-sljedivost-zahtjeva)**.

| Provjera | Pitanje za tim |
| --- | --- |
| Zahtjev | Je li svaki važan obrazac uporabe povezan s postojećim zahtjevom? |
| Akter | Odgovara li akter naveden ovdje prethodno utvrđenoj ulozi i dopuštenoj interakciji? |
| Aplikacija | Može li tim demonstrirati opisani glavni rezultat i važnu alternativu ili je opis jasno označen kao trenutačno oblikovanje? |

---

Povezivanje zahtjev → obrazac uporabe → ispitivanje održavajte **samo jednom, u [tablici sljedivosti zahtjeva](./2-Analiza-zahtjeva.md)**. Ovdje nemojte održavati drugu projektnu tablicu mapiranja ni stupac sa statusom implementacije. Ako važan zahtjev nema interakciju s ljudskim akterom, objasnite gdje se obrađuje umjesto izmišljanja aktera.

<details>
<summary><strong>Provjera pokrivenosti zahtjeva</strong></summary>

**Primjer — CrisisMap:** Tablica pokrivenosti obrazaca uporabe koju treba analizirati:

| Broj obrasca uporabe | Naziv obrasca uporabe | Obuhvaćeni funkcijski zahtjevi |
| --- | --- | --- |
| UC-001 | Registracija računa | F-001: Registracija računa putem e-pošte |
| UC-002 | Prijava kriznog događaja | F-022: Prijava i provjera kriznog događaja |
| UC-003 | Sustav upozorenja | F-045: Slanje upozorenja korisnicima i timovima |
| UC-004 | Koordinacija spašavanja | F-067: Koordinacija s hitnim službama |

---

**Problemi pokrivenosti koje treba riješiti:**

- **Pogrešan ID zahtjeva:** ova tablica povezuje UC-002 s F-022, dok se opis UC-002 u odjeljku 3.2 poziva na F-004, zahtjev za podnošenje prijave iz odjeljka 2.1.
- **Zahtjevi koji ne postoje:** F-022, F-045 i F-067 nisu definirani u oglednim zahtjevima u 2.1.
- **Obrasci uporabe bez opisa:** UC-003 i UC-004 nemaju opis u 3.2. UC-004 (koordinacija s hitnim službama) ujedno je mogućnost s vanjskim posljedicama koju opseg dopušta samo ako je uključena u odobreni zadatak.
- **Nesklad aktera:** primjer aktera u odjeljku 2.3 navodi da koordinator pomoći podnosi prijave (F-004), dok UC-002 kao primarnog aktera navodi građanina.

</details>

**Završna provjera:** Dijagram, specifikacije obrazaca uporabe i matrica sljedivosti međusobno su usklađeni. Svaki važan obrazac uporabe povezan je s postojećim zahtjevom, akteri odgovaraju stvarnim ulogama u aplikaciji, a opisani glavni i alternativni tijekovi odgovaraju ponašanju koje sustav stvarno podržava.
