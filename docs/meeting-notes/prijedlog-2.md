## 2.1 Funkcijski zahtjevi

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| 1 | Prijava i registracija putem OAuth 2.0 s odabirom uloge | Visok | Zadatak | Nakon prijave korisnik ima račun i ulogu |
| 2 | Vlasnik unosi i uređuje svoja vozila | Visok | Zadatak | Vozilo je na popisu vlasnika |
| 3 | Vlasnik zatražuje servis (vrsta, termin) | Visok | Zadatak | Zahtjev ima status „zatražen" |
| 4 | Vlasnik prati status i prima e-mail obavijesti | Visok | Zadatak | Promjena statusa vidljiva je i poslana e-poštom |
| 5 | Voditelj dodjeljuje zahtjeve serviserima i mijenja raspored | Visok | Zadatak | Serviser vidi dodijeljeni zahtjev |
| 6 | Serviser evidentira radove i dijelove te završava servis s troškom | Visok | Zadatak | Servis ima status „završen" i trošak |
| 7 | Serviser šalje ponudu za dodatne radove, vlasnik je prihvaća ili odbija | Visok | Zadatak | Odluka vlasnika vidljiva je serviseru |
| 8 | Vlasnik pregledava račun i povijest, preuzima potvrdu i ocjenjuje servis | Srednji | Zadatak | Završen servis ulazi u povijest vozila |
| 9 | Voditelj pregledava povijest i statistiku autoservisa | Srednji | Zadatak | Podaci odgovaraju završenim servisima |
| 10 | Autoservis plaća mjesečnu pretplatu karticom | Srednji | Zadatak | Uspješna naplata aktivira napredne funkcije |
| 11 | Administrator upravlja korisnicima i autoservisima, deaktivira račune, postavlja cijenu pretplate | Visok | Zadatak | Deaktivirani korisnik se ne može prijaviti |

## 2.2 Nefunkcijski zahtjevi

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| 1 | Prijava samo preko OAuth 2.0, lozinke se ne spremaju | Visok | Zadatak | Pregled koda i baze |
| 2 | Korisnik vidi samo podatke koje smije (vlasnik svoje, voditelj svoj autoservis) | Visok | Tim | Testovi neovlaštenog pristupa |
| 3 | Podaci kartice se ne spremaju u sustav | Visok | Tim | Pregled baze |
