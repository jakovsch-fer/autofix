# A. Pregled aktivnosti grupe

**Cilj:** Prikazati kako je tim organizirao projekt, raspodijelio rad, reagirao na važne probleme i pridonio rezultatu. Zapisi trebaju opisivati ishode, a ne samo navoditi da je sastanak održan ili da se o nekoj temi raspravljalo.

## A.1 Evidencija sastanaka

**Cilj:** Voditi kratak zapis projektnih sastanaka i tjedne koordinacije: tko je sudjelovao, što je odlučeno i koja je radnja uslijedila. Raspravu koja nije dovela do odluke zabilježite samo ako je važno pitanje ostalo otvoreno.
<!--
>Definirati prije prve uporabe:
`[Inicijali/Kratica] = [Ime i prezime]` (npr. *AK = Ana Kovač; LM = Luka Marić; EP = Ema Petrović; NK = Nika Kralj*).																														

| Datum i sudionici | Glavna tema | Donesena odluka ili zadatak  | Poveznica na zadatak ili  rezultat, ako postoji |
| --- | --- | --- | --- |
|  |  |  |  |

Za svaki relevantan sastanak ili zapis tjedne koordinacije upišite jedan sažet redak. Dodijeljeni zadatak treba imati odgovornu osobu; za neriješeno pitanje treba navesti tko će ga dalje obraditi. Sam naslov sastanka ne pokazuje što se promijenilo. U ovu evidenciju nemojte kopirati cijeli popis issuea ni prijepis razgovora.
-->
<details>
<summary><strong>Evidencija sastanka Autofix</strong></summary>

**Autofix:**

**Kratice članova tima:** MN = Marko Nujić, JS = Jakov Schramadei, IB = Ivan Borbaš, TB = Tonko Bogdan

| Datum i sudionici | Glavna tema | Odluka, radnja ili otvoreno pitanje | Poveznica na zadatak ili nastali rezultat, ako postoji |
| --- | --- | --- | --- |
| 24. 10. 2026.; MN, JS, IB, TB | Podjela uloga u izradi projekta | Inicijalno: MN - baza podataka, JS - backend, IB - frontend, TB - backend | / |
| 8. 11. 2026.; MN, JS, IB, TB | Diskusija o načinu izrade projekta (izgled stranice, potrebne funkcionalnosti, baza podataka) | Koristi se Django za izradu stranice; dogovoreni su izgled stranice i potrebne tablice za bazu podataka  | / |

**Ishod i odgovornost:** Zapisi jasno definiraju tko je odgovoran za koji dio posla i koji je provjerljivi rezultat dogovoren. npr Rečenica „Raspravljali smo o obradi lokacije” prikrila bi je li se itko obvezao na promjenu. Ovi redci navode odluku ili otvorenu radnju, odgovornu osobu i rezultat koji se može pregledati.

</details>

## A.2 Plan rada

**Cilj:** Prikazati planirani redoslijed rada i odgovornosti u timu. Prikažite projektne tjedne ili druga kratka razdoblja koja tim koristi, uključujući pripremu za formalne provjere.

**Trenutačni plan:** [Github Project ploča](https://github.com/users/jakovsch-fer/projects/4/views/2)

| Razdoblje/Tjedan | Glavni planirani rad | Odgovorni članovi | Poveznica na zadatke |
| --- | --- | --- | --- |
|  |  |  |  |

Ako koristite tablicu, plan vodite na korisnoj tjednoj razini i ažurirajte ga kada se prioriteti promijene. Kratice članova tima definirajte  u A.1 i ovdje ih primjenjujte dosljedno; ako dva člana imaju iste inicijale, proširite kraticu. Plan nije dokaz da je planirani rad dovršen (to dokazuje kod i dokumentacija).

<details>
<summary><strong>Primjer plana rada</strong></summary>

**Primjer — CrisisMap:** Plan rada obuhvaća razvoj prijava, karte i postavljanja aplikacije. Za svako razdoblje navedeni su glavni zadaci i odgovorni članovi.

| Razdoblje | Glavni planirani rad | Odgovorni članovi | Poveznica na zadatke/opis |
| --- | --- | --- | --- |
| Projektni tjedan 6 | Obrazac za prijavu i provjera valjanosti lokacije | AK, LM | Zadataka #21 i #23. |
| Projektni tjedan 7 | Povezivanje obrasca s API-jem za prijave | EP | Zadatak #25. |

**Čitanje plana:** Kratice štede prostor u sažetom planu; njihove definicije s početka A.1 vrijede u cijelom ovom primjeru. Kada rad kasni, ažurirajte stvarni zadatak i očekivanje u planu; nemojte tvrditi da je nedovršena funkcionalnost završena samo zato što je predviđeni tjedan prošao.

</details>

## A.3 Aktivnosti i doprinosi članova

**Cilj:** Prikazati koji su članovi radili na važnim projektnim aktivnostima i približan trud koji prijavljuju. Uz implementaciju uključite oblikovanje, dokumentaciju, integraciju, ispitivanje i postavljanje.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Modeliranje baze podataka | MN, TB | 2, 4 | grana - BP-dodaneTablice |
| Ispunjavanje dokumentacije | MN | 7 | grana - 3.2---verzija-1; UML-update-1; grana - docs-zahtjevi (poglavlje 2.6 Sljedivost zahtjeva) |
| Ispunjavanje dokumentacije | JS | 9 | grana `docs-projekt` (PR #3), grana `docs-zahtjevi` (PR #9) |
| Implementacija frontend-a | IB | 5 | Izrada korisničkog sučelja pomoću HTML-a, CSS-a i JavaScripta (PR #12) |
| OAuth prijava i registracija | JS, IB | 5, 3 | Auth0 autentifikacija, preusmjeravanje, odjava i registracija korisnika (PR #12) |

<!--
<details>
<summary><strong>Primjer aktivnosti i rezultata rada</strong></summary>

**Primjer — CrisisMap:** Tablica razlikuje implementaciju, integraciju i dokumentaciju te svaku aktivnost povezuje s rezultatom.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Ručni unos položaja na karti | AK | 8 | Zadatak #21; promjena klijentskog dijela. |
| Provjera valjanosti i trajna pohrana prijave | LM | 10 | Zadatak #23; promjena pozadinskog sustava i ispitivanje. |
| Integracija klijenta i API-ja te javno postavljanje | EP | 7 | Zadatak #25; konfiguracija u `render.yaml` i `dist/` |
| Obrazac uporabe za podnošenje prijave i provjera odbijenog dopuštenja | NK | 5 | Završene izmjene UC-002 i ispitivanje ST-03. |

**Trud i rezultat:** Završni stupac omogućuje raspravu o doprinosu bez tretiranja velikog broja sati kao dokaza isporuke. Tim može prijaviti stvarno dugotrajan, još neriješen problem integracije kao obavljen rad i iskreno opisati njegov ishod.

</details>
-->
## A.4 Pregled promjena u repozitoriju

**Cilj:** Prikazati kada su promjene napravljene u repozitoriju i tko ih je napravio, uz napomenu da sam broj zapisa promjena ne mjeri kvalitetu doprinosa.

**Prikaz aktivnosti repozitorija:** [Contributors link](https://github.com/jakovsch-fer/autofix/graphs/contributors?selectedMetric=commits); prikaz - last 3 months

Graf može pokazati kada su zapisi promjena napravljeni i tko ih je napravio, ali ne prikazuje sav rad na oblikovanju, ispitivanju, integraciji, pregledu ili dokumentaciji. Ako postoji uočljiv nesklad s tablicom aktivnosti, kratko ga objasnite; nemojte iz grafa izvoditi broj sati. Generirani prikaz neka bude vezan uz stvarni repozitorij umjesto da se ručno crta drugi graf.

## A.5 Ključni inženjerski izazovi i rješenja

**Cilj:** Dokumentirati stvarne tehničke i organizacijske prepreke s kojima se tim suočio, poduzete korektivne inženjerske korake te konačni ishod. Odaberite konkretne izazove umjesto općenite pohvale timskog rada.

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| Mali broj članova tima | Fleksibilnije si dodijelili uloge - nije jednoznačno određeno, već imamo neke primarne uloge, a ako negdje treba pomoći, prilagodimo se. | Ograničenje - u slučaju da svi imaju puno posla, a nekome treba pomoći, nemamo opciju prebaciti nekoga |

<!--
<details>
<summary><strong>Rješavanje nesklada formata lokacije</strong></summary>

**Autofix izazovi i riješenja:**

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| Mali broj članova tima | Fleksibilnije si dodijelili uloge - nije jednoznačno određeno, već imamo neke primarne uloge, a ako negdje treba pomoći, prilagodimo se privremenim ulogama | Ograničenje - u slučaju da svi imaju puno posla, a nekome treba pomoći, nemamo opciju privremeno dodijeliti nekome drugu ulogu |

**Problem, odgovor i ishod:** Svaki se dio može provjeriti u projektu. Rečenica poput „imali smo poteškoće s integracijom i riješili ih timskim radom” ne bi čitatelju rekla što nije radilo ni kako je rješenje promijenjeno.
-->
</details>

---
<!--
>**Završna provjera:** Sastanci navode smislene ishode i odgovorne osobe; plan odražava namjeravani rad; tablica uloženog rada i generirani prikaz repozitorija odnose na ovaj vidljivi projekt; konkretni izazovi povezani su s radnjama i njihovim rezultatima.
-->
