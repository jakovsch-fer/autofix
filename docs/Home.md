# Autofix - Projektna dokumentacija

**Kolegij:** [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz), Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu

**Akademska godina:** 2026./2027.

**Tim:** G04.3 (Autofix)

**Nastavnik:** Vlado Sruk

**Asistent / demonstrator:** Eda Jovičić, Karla Sikavica

## Pregled projekta

[Opis projekta.]

**Osnovno postavljanje:** [README repozitorija](../README.md#quick-start)

**Javno dostupna aplikacija:** [README repozitorija](../README.md#deployment)

## Članovi tima i uloge

Ažurirani popis članova, njihovih GitHub profila i glavnih uloga ili doprinosa nalazi se u [README-u repozitorija](../README.md#team-members).

## Kazalo dokumentacije

| Stranica | Svrha |
| --- | --- |
| [1. Opseg projekta](1-Projekt.md) | Problem, cilj i granice projekta |
| [2. Analiza zahtjeva](2-Analiza-zahtjeva.md) | Zahtjevi, ograničenja i sljedivost |
| [3. Obrasci uporabe](3-Obrasci-uporabe.md) | Akteri i reprezentativne interakcije korisnika |
| [4. Arhitektura i oblikovanje](4-Arhitektura-i-oblikovanje.md) | Glavne odluke oblikovanja, struktura, podatci i ponašanje |
| [5. Ispitivanje](5-Ispitivanje.md) | Pristup ispitivanju, stvarni rezultati i poznati nedostatci |
| [6. Postavljanje, instalacija i konfiguracija](6-Postavljanje-instalacija-i-konfiguracija.md) | Lokalna instalacija, konfiguracija, javno postavljanje i administracija |
| [7. Zaključak i budući rad](7-Zakljucak-i-buduci-rad.md) | Zaključak i moguća daljnja poboljšanja |
| [A. Pregled aktivnosti grupe](A-Pregled-aktivnosti-grupe.md) | Aktivnosti tima, doprinosi i izazovi |

## Ključne točke projekta

| Kontrolna točka | Demonstracija | Video |
| --- | --- | --- |
| Iteracija 1 | [Poveznica na demonstraciju ili inačicu projekta] | [Poveznica na video Demo 1, ako je snimljen] |
| Završni pregled | [Poveznica na završnu inačicu projekta] | [Poveznica na video završne demonstracije, ako je snimljen] |

## Organizacija projekta i razvojni proces

### Praćenje zadataka i nedostataka

Odvija se na [ploči](https://github.com/jakovsch-fer/autofix/projects), radne stavke su:

- Sprintovi, po jedan za svaki ciklus i unaprijed su označeni [milestoneovima](https://github.com/jakovsch-fer/autofix/milestones) zajedno s rokovima
- Korisničke priče, samostalne funkcionalnosti koje ostvaruju neki zahtjev, koriste se kao jedinica planiranja posla za sprint i označeni su issueovima
- Zadatci/nedostatci, koriste se za dodatnu podjelu paralelnog posla u priči ako je potrebno (npr. frontend i backend dio) ili nepredviđeni posao (npr. dojava naknadno otkrivene greške), označeni su [pod-issueovima](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues) ili su odvojeni od priča (nije fiksno), npr. dokumentacija

Radne stavke se:

- Treba ručno micati po ploči ovisno o stanju (To Do, In Progress, Done), pod-issueovi automatski prate stanje roditelja
- Može [označiti](https://github.com/jakovsch-fer/autofix/labels) po vrsti zadatka, ali nije nužno
- Treba opisati ako naslov i oznake nisu dovoljni
- Može dodijeliti (assign) sebi i/ili kolegi dok je na čekanju, ali nije nužno
- Treba dodijeliti sebi dok je posao u tijeku tj. kad ste preuzeli posao

### Planiranje sprintova

Unaprijed se otvaraju priče i svaku se dodaje u sprint tako da se dodijeli ploči i odg. milestoneu.
Sve što nije vezano za sprint također treba biti dodano na ploču, ali ne mora biti dodijeljeno milestoneu.
Zadatci se mogu otvarati tek kad se otkrije potreba ili mogućnost, ali bolje unaprijed ako je poznato (i značajno).
Zadatci koji su vezani za priču otvaraju se kao pod-issue.

### Razvojni proces (strategija grananja, rad u repozitoriju)

Rad na zadatcima (pojedine priče ili samostalnim) prati se u zasebnoj kratkotrajnoj grani (grana značajke, feature branch), to uključuje novu funkcionalnost, preinake ili ispravke greški i dokumentaciju.
Ona u pravilu ima jednog autora (nositelja zadatka, assignee) koji u nju dodaje commitove.
Opseg i cilj promjena grane treba biti jasan kako bi se što brže mogla integrirati u glavnu granu (`main`) što smanjuje potencijal za nastanak međuovisnosti grana i konflikata (merge conflict) i time olakšava istovremeni rad na više zadataka. Isto vrijedi i za lokalno stanje kod autora, promjene (commitove) treba prenositi (push) rano i često umjesto sve odjednom kako bi posao bio vidljiv svima.
Nositelj zato treba unaprijed procijeniti kojih se sve zadataka tiče nova grana i uz nju otvoriti zahtjev za uključivanje (pull request) u čijem opisu mogu biti poveznice na obuhvaćene zadatke zajedno s ključnom riječi radi automatizacije, npr. `closes #123`.
Kad nositelj smatra da je posao dovršen treba zatražiti pregled (code review) barem jednog člana ostatka tima, manjim dijelom zbog provjere kvalitete koda a više radi komuniciranja promjena bitnih za druge dijelove sustava i za otvaranje rasprave.
Odobrenjem pregleda i zatvaranjem pull requesta grana se spaja i ne bi se trebala dalje koristiti u novim ili ponovno otvorenim pull requestovima.

Glavna grana `main` prati zajedničko (dogovoreno, kanonsko) stanje projekta, u nju se ne commita izravno, nego prima promjene svakim zatvorenim pull requestom tj. spajanjem kratkotrajnih grana, osim za iznimke kao početno postavljanje repozitorija, metapodataka, konfiguracije alata, Actions cjevovoda i sl.
Nastoji se da sadržaj grane bude spreman za pokretanje (demonstrabilan), ali ne nužno (to postaje tek na kraju sprinta tj. za predaju), prvenstveno je temelj za (istovremeni) rad na novim zadatcima tijekom razvoja.
U tome pomažu i cjevovodi za kontinuiranu integraciju (CI, izgradnja i pokretanje testova) i kontinuiranu isporuku (CD, postavljanje ogledne inačice) koji se automatski pokreću u životnom ciklusu pull requestova.
Automatsko postavljanje konačne javne inačice također koristi glavnu granu, ali se okida na drugi način, npr. ručno ili stvaranjem oznake verzije (Git tag).

**Ne koristi se:** dugotrajna razvojna grana (`develop`), zasebna grana za dokumentaciju (`devdoc`)
**Resursi:** [Projekt/Git](https://www.fer.unizg.hr/predmet/proinz/projekt/git), [Git u timskom razvoju](https://moodle.fer.hr/pluginfile.php/141989/mod_resource/content/10/PROINZ_26_Git.pdf)

## Pravila dokumentacije

Dokumentacija se sastoji od međusobno povezanih Markdown stranica. Obavezni UML dijagrami izrađuju se u PlantUML-u, uz PlantUML izvor u dokumentaciji sačuvajte i čitljivu sliku.

## Akademski integritet, ponašanje i licenciranje

README repozitorija sadrži [izjavu o uporabi umjetne inteligencije](../README.md#ai-usage), [informacije o kodeksu ponašanja i podršci](../README.md#code-of-conduct-and-support) te [informacije o licenci](../README.md#license). Pristupni podatci i druge tajne nikada se ne objavljuju u dokumentaciji niti dijele u običnim porukama.

## Izjava o uporabi umjetne inteligencije

Ovaj odjeljak bilježi koji su alati korišteni, za koju dokumentaciju ili kod te kako je tim provjerio rezultat. Slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

### Korišteni alati

| Alat | Inačica ili model | Koristio/la | Glavna svrha |
| --- | --- | --- | --- |
| [Naziv alata] | [Inačica ili model, ako je poznat] | [Član/članovi tima] | [npr. izrada nacrta dokumentacije, generiranje izvora dijagrama] |

### Opseg doprinosa umjetne inteligencije

| Stranica, datoteka ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| [npr. 3. Obrasci uporabe, UC-002] | [Izrada nacrta / preoblikovanje / prijevod / izvor dijagrama / sažimanje] | [Kratak opis] | [Ulaz zadan alatu; dodane, ispravljene ili uklonjene činjenice] | [Stranica dokumentacije, `.puml` datoteka, PR] |

Stranice i artefakti koji nisu navedeni iznad izrađeni su bez pomoći generativne umjetne inteligencije. [Po želji: kao dodatne retke navedite kod ili ispitivanja izrađena uz pomoć umjetne inteligencije.]

### Provjera generiranog sadržaja

| Provjera | Kako je provedena | Dokaz |
| --- | --- | --- |
| Činjenična točnost | [Svaka tvrdnja o funkcionalnostima, ponašanju ili arhitekturi uspoređena je s pokrenutom aplikacijom i kodom] | [Imena pregledavatelja; poveznice na zahtjev za uključivanje promjena (PR) ili zadatak] |
| Nema tvrdnji o neostvarenim funkcionalnostima | [Provjereno je da opisane funkcionalnosti, ispitivanja i rezultati stvarno postoje; planirani rad označen je kao planiran] | [Usporedba s odjeljkom 5.4 (Ispitivanje) i odjeljkom 7.1 (Zaključak)] |
| Dosljednost s drugim stranicama | [Nazivi, ID-ovi i dijagrami provjereni su prema Analizi zahtjeva, Obrascima uporabe, Arhitekturi i oblikovanju te Ispitivanju] | [Kontrolni popis ili bilješka pregleda] |
| Izvori dijagrama | [Generirani PlantUML je iscrtan, ispravljen i odgovara implementiranom sustavu] | [`.puml` datoteka i izrađena slika] |
| Povjerljivi sadržaj | [Kako je tim osigurao da u upite ili dokumentaciju nisu unesene tajne, pristupni podaci ni osobni podaci] | [Primijenjeni postupak] |

### Pogreške pronađene u izlazu umjetne inteligencije

| Problem | Kako je pronađen | Rješenje |
| --- | --- | --- |
| [Netočna, izmišljena ili iz predloška preuzeta tvrdnja] | [Pregled, ispitivanje ili usporedba s aplikacijom] | [Ispravak s poveznicom] |

<details>
<summary><strong>Primjer zapisa uporabe umjetne inteligencije</strong></summary>

**Primjer — CrisisMap:**

| Stranica ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| 3. Obrasci uporabe, UC-002 | Izrada nacrta | Prvu inačicu glavnog i alternativnih tijekova | Tim je zadao stvarna polja obrasca i uklonio granu prijave u sustav koja u aplikaciji ne postoji | Primjer PR #31 |
| Sekvencijski dijagram, podnošenje prijave | Izvor dijagrama | Nacrt PlantUML-a | Tim je uskladio nazive sudionika s komponentama i uklonio korak slanja obavijesti koji nije implementiran | `diagrams/report-submission.puml` (primjer) |

| Problem | Kako je pronađen | Rješenje |
| --- | --- | --- |
| U tekstu je stajalo da se obavijesti dostavljaju unutar jedne minute | Usporedba s Ispitivanjem (5.4): dostava nikada nije ispitana | Tvrdnja je uklonjena; obavijesti su navedene pod Budućim radom |
| Nacrt je kopirao primjer zahtjeva F-005 iz predloška kao projektni zahtjev | Usporedba s vlastitim popisom zahtjeva tima | Zamijenjeno stvarnim zahtjevom tima |

**Analiza primjera:** Svaki redak navodi stranicu ili datoteku, ono što je alat generirao i ono što je tim promijenio. Pogreške su tipične za generiranu dokumentaciju: funkcionalnost koja ne postoji i tekst predloška prikazan kao činjenica o projektu. Tvrdnje poput „AI je korišten svugdje” ili „sav tekst je pregledan” nije moguće provjeriti. Ovo je nastavni scenarij, a ne opis objavljenog projekta.

</details>
