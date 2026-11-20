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
| F-008 | Sustav prikazuje grafički pregled stanja narudžbe tj. servisa i detaljnu vremensku crtu tijeka rada | Visok | Povratne informacije | Za pojedini servis na popisu stvara se detaljniji prikaz sa svim podatcima i radnjama definiranim u drugim zahtjevima, ovisno o korisniku |
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

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Osjetljivi podatci korisnika (za kontakt, plaćanje i registracijske oznake) zaštićeni su od curenja u pohrani i prijenosu ili nisu uopće dijeljeni s platformom, sustav na siguran način tolerira neovlašteni ili zlonamjerni pristup | Visok | Sigurnost, privatnost, dostupnost, AS-01, AS-04 | Provjera oblikovanja sustava (modela podataka, protokola, kriptografskih postupaka) i ispitni scenariji |
| NF-02 | Ovlasti korisnika za stvaranje, ažuriranje i brisanje domenskih podataka platforme ograničene su na opseg određen njihovom ulogom i uvjetovan je uspješnom autentifikacijom, sustav na konzistentan način tolerira ovlašteni, ali neispravni pristup | Visok | Sigurnost, integritet, C-01 | Provjera oblikovanja sustava (validacija podataka, kontrola pristupa) i ispitni scenariji |
| NF-03 | Korisničko sučelje je čitljivo i uporabljivo u različitim formatima prikaza (na mobilnim uređajima) | Srednji | Pristupačnost, C-02, AS-02 | Provjera ogledne inačice, simulacija drugih formata tijekom ispitivanja |
| NF-04 | Sustav na konzistentan način tolerira neočekivane greške ili ispade gradivnih komponenti te obavještava korisnika i administratora (u zapisniku) | Srednji | Dostupnost, integritet | Provjera oblikovanja sustava i okruženja isporuke (automatski oporavak nije planiran za prvu inačicu), izrada sigurnosnih kopija baze i ispitni scenariji (umetanje greški) |
| NF-05 | Povjerljivi kriptografski materijal platforme (lozinka administratora, privatni ključevi i ključevi vanjskih usluga) zaštićeni su od curenja | Visok | Sigurnost, AS-11 | Provjera ogledne inačice i povijesti kontrole verzije |
| NF-06 | Sustav održava visoku dostupnost kroz vrijeme i brz odziv na zahtjeve pod opterećenjem | Nizak | Dostupnost | Provjera okruženja isporuke sustava (SLA poslužitelja u oblaku, objava nove inačice bez prekida, balansiranje opterećenja), simuliranje opterećenja i mjerenje vremena odziva ogledne i javne inačice |

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
| AS-10 | Pretpostavka | Uloga se korisnicima dodjeljuje prilikom registracije, vlasnici i serviseri ne trebaju pristupati platformi kao vlasnici vozila | Procjena tima | Provjeriti s asistentom |
| AS-11 | Pretpostavka | Administrator kao korisnik je usko vezan uz platformu stoga se prijavljuje vlastitom (tajnom) lozinkom i potencijalno kroz odvojeno sučelje | Procjena tima | Provjeriti s asistentom |

## 2.5 Značajne promjene zahtjeva

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| 18.11.2026. | F-001, F-002 | Razdvojeni iz "Prijava i registracija putem OAuth 2.0 s odabirom uloge" | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-006, F-008, F-009 | Razdvojeni iz "Vlasnik prati status i prima e-mail obavijesti" | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-010, F-011 | Razdvojeni iz "Voditelj dodjeljuje zahtjeve serviserima i mijenja raspored" | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-007, F-015, F-017 | Razdvojeni iz "Vlasnik pregledava račun i povijest, preuzima potvrdu i ocjenjuje servis" | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-007, F-018 | Opseg sužen od "Voditelj pregledava povijest i statistiku autoservisa" i spojen u F-007 | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-020, F-021 | Razdvojeni iz "Administrator upravlja korisnicima i autoservisima, deaktivira račune, postavlja cijenu pretplate" | [prijedlog](meeting-notes/prijedlog-2.md) |
| 18.11.2026. | F-022 | Nedostatak | Projektni zadatak |
| 18.11.2026. | F-003, F-012, F-016, F-023 | Zabilježeni kao ideje/proširenja koja nisu nužna za ispunjenje zadatka niti planirane za prvu inačicu | Rasprava tima |

## 2.6 Sljedivost zahtjeva

<!--| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | UC-001 | Komponenta, modul ili drugo mjesto realizacije | ST-01, CT-01 ili druga provjera |
| F-002 |  |  |  |
<details>
<summary><strong>Sljedivost zahtjeva do obrazaca uporabe i ispitivanja</strong></summary>
-->

| ID zahtjeva | Obrazac uporabe / ponašanje | Arhitekturna realizacija | Ispitivanje / provjera |
| --- | --- | --- | --- |
| F-001, F-002 | UC-001 Prijava u sustav | Web-klijent; API za prijave; usluga za prijave (OAuth) | ST-01 Valjano podnošenje prijave |
| F-005 | UC-003  Zahtjev za servisiranje | Web-klijent; API za zahtjev servisiranja | ST-02 Provjera jesu li svi potrebni podaci ispunjeni |
| F-007 | UC-002 Pregled statusa servisa; | Web-klijent | ST-03 Provjera pokazuje li točne podatke o statusu servisa |
| F-009 | UC-009 Dobivanje e-pošte o statusu servisa i potvrdi plaćanja | usluga za e-pošte (Mailgun) | CT-01 Provjera ispravnosti slanja e-pošte putem Mailguna; CT-02 Provjera ispravnosti podataka u predlošku e-pošte; ST-04 Provjera dobiva li korisnik e-poštu nakon promjene statusa servisa ili potvrde plaćanja |
| F-010 | UC-005 Dodjela klijenta serviseru | Web-klijent; API za obavljanje dodjele narudžbi | ST-05 Provjera uspješne dodjele klijenta serviseru |
| F-012 | UC-004 Razgovor preko poruka | Web-klijent; API za slanje poruke | CT-03 provjera uspješnosti slanja i dobivanja poruke |
| F-016 | UC-010 Plaćanje servisa | Web-klijent; API za plaćanje; usluga za internetsko plaćanje | CT-04 Provjera uspješnog preusmjerenja na uslugu |
| F-020 | UC-008 Upravljanje korisnicima i njihovim ulogama | Web-klijent; API za upravljanje korisnicima | ST-06 Provjera ažuriranja podataka korisnika nakon promjene |
|F-003, F-004, F-006, F-008, F-011, F-013 do F-015, F-017 do F-019, F-020 do F-023| Na čekanju, razlog : funkcionalnosti neće nužno biti uključene u rad. ||||

<!--
**Pokrivenost i dokazi:** CT-06 provjerava odabir primatelja za F-005, ali sam po sebi ne dokazuje da je obavijest stvarno dostavljena; ako projekt zahtijeva potpunu dostavu od početka do kraja, za taj dio treba postojati zasebna provjera. Svaki redak pokazuje gdje je zahtjev opisan kao ponašanje, gdje je ostvaren u sustavu i gdje se nalazi dokaz njegove provjere. Zahtjev ne mora imati zaseban obrazac uporabe ako ne opisuje korisničku interakciju; tada navedite relevantno ponašanje, arhitekturni element ili drugi prikladan način realizacije. U svojem projektu koristite stvarne nazive komponenata, modula i provjera iz dokumentacije i implementacije. Nedostajuću poveznicu ostavite praznom ili označite kao *na čekanju* uz kratak razlog. Stvarni rezultati ispitivanja bilježe se uz ispitne slučajeve; ova tablica pokazuje gdje ih pronaći.
-->
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
