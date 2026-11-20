const KLJUC = "autofix_mock";
const KLJUC_KORISNIK = "autofix_mock_korisnik";

function pocetniPodaci() {
  return {
    sljedeci: 100,
    cijena: 29,
    pretplata: false,
    korisnici: [
      { id: 1, ime: "Ivan Vlasnik", email: "vlasnik@example.com", uloga: "vlasnik", aktivan: true },
      { id: 2, ime: "Marko Serviser", email: "serviser@example.com", uloga: "serviser", autoservis: "AutoPlus", specijalizacija: "Kočnice i podvozje", aktivan: true },
      { id: 3, ime: "Petra Serviser", email: "serviser2@example.com", uloga: "serviser", autoservis: "AutoPlus", specijalizacija: "Dijagnostika", aktivan: true },
      { id: 4, ime: "Ana Voditelj", email: "voditelj@example.com", uloga: "voditelj", autoservis: "AutoPlus", aktivan: true },
    ],
    vozila: [
      { id: 10, vlasnikId: 1, oznaka: "ZG1234AB", model: "VW Golf", godina: 2015, km: 182000 },
      { id: 11, vlasnikId: 1, oznaka: "ZG5678CD", model: "Škoda Octavia", godina: 2019, km: 94500 },
    ],
    zahtjevi: [
      {
        id: 20, voziloId: 10, vlasnikId: 1, serviserId: 2, vrsta: "Zamjena guma", termin: "2026-11-12T09:00", status: "u_tijeku",
        radovi: [{ opis: "Demontaža kotača", dio: "", minute: 20 }],
        ponuda: { opis: "Zamjena zaštitne gume", trosak: 85, odluka: null },
        trosak: null, ocjena: null,
        poruke: [
          { autor: "Ivan Vlasnik", vrijeme: "2026-11-12T09:10", tekst: "Može li se provjeriti i tlak u rezervnoj?" },
          { autor: "Marko Serviser", vrijeme: "2026-11-12T10:32", tekst: "Može. Oštećena je i zaštitna guma, poslao sam ponudu." },
        ],
      },
      {
        id: 21, voziloId: 11, vlasnikId: 1, serviserId: null, vrsta: "Redovni servis", termin: "2026-11-18T08:00", status: "zatrazeno",
        radovi: [], ponuda: null, trosak: null, ocjena: null, poruke: [],
      },
      {
        id: 22, voziloId: 10, vlasnikId: 1, serviserId: 2, vrsta: "Popravak kočnica", termin: "2026-10-02T10:00", status: "zavrseno",
        radovi: [
          { opis: "Zamjena prednjih pločica", dio: "Pločice (set)", minute: 60 },
          { opis: "Zamjena diskova", dio: "Diskovi (2 kom)", minute: 45 },
        ],
        ponuda: null, trosak: 246, ocjena: null, poruke: [],
      },
    ],
  };
}

function ucitajDb() {
  let db = null;
  try { db = JSON.parse(localStorage.getItem(KLJUC)); } catch (e) {}
  if (!db) {
    db = pocetniPodaci();
    spremiDb(db);
  }
  return db;
}

function spremiDb(db) {
  localStorage.setItem(KLJUC, JSON.stringify(db));
}

function prijaviMock(id, novi=false) {
  // if (novi) {
  //   const k = { id: db.sljedeci++, ime: "Novi Korisnik", email: "novi" + db.sljedeci + "@example.com", uloga: null, aktivan: true };
  //   db.korisnici.push(k);
  //   spremiDb(db);
  //   localStorage.setItem(KLJUC_KORISNIK, String(k.id));
  //   return mockOsoba(k);
  // }
  // const k = db.korisnici.find((x) => x.id === tijelo.id);
  // if (!k) throw greska(404, "Korisnik ne postoji");
  // if (!k.aktivan) throw greska(403, "Račun je deaktiviran");
  localStorage.setItem(KLJUC_KORISNIK, id);
}

function odjaviMock() {
  localStorage.removeItem(KLJUC_KORISNIK);
}

function mockId() {
  return localStorage.getItem(KLJUC_KORISNIK);
}

function resetirajMock() {
  localStorage.removeItem(KLJUC);
  localStorage.removeItem(KLJUC_KORISNIK);
  location.href = "index.html";
}

function greska(status, poruka) {
  const g = new Error(poruka);
  g.status = status;
  return g;
}

function mockOsoba(k) {
  return { id: k.id, ime: k.ime, email: k.email, uloga: k.uloga || null, autoservis: k.autoservis || null };
}

function mockZahtjev(db, z) {
  const v = db.vozila.find((x) => x.id === z.voziloId);
  const s = db.korisnici.find((x) => x.id === z.serviserId);
  const o = db.korisnici.find((x) => x.id === z.vlasnikId);
  return {
    id: z.id,
    vozilo: { id: v.id, oznaka: v.oznaka, naziv: v.model },
    vrsta: z.vrsta,
    termin: z.termin,
    status: z.status,
    vlasnik: o.ime,
    serviser: s ? { id: s.id, ime: s.ime } : null,
    radovi: z.radovi,
    ponuda: z.ponuda,
    trosak: z.trosak,
    ocjena: z.ocjena,
    poruke: z.poruke,
  };
}

const MOCK_STATUSI = ["zatrazeno", "potvrdeno", "zaprimljeno", "u_tijeku", "zavrseno", "otkazano"];

async function mock(metoda, putanja, tijelo) {
  await new Promise((r) => setTimeout(r, 40));
  const db = ucitajDb();
  const idKorisnika = mockId();
  const ja = db.korisnici.find((k) => k.email === idKorisnika);
  tijelo = tijelo || {};
  let m = null;
  const ruta = (met, re) => {
    if (metoda !== met) return false;
    m = putanja.match(re);
    return !!m;
  };
  const treba = (uloga) => {
    if (ja.uloga !== uloga) throw greska(403, "Nemate pravo na ovu radnju");
  };
  const nadiZahtjev = (id) => {
    const z = db.zahtjevi.find((x) => x.id === Number(id));
    if (!z) throw greska(404, "Zahtjev ne postoji");
    return z;
  };

  if (ruta("POST", /^\/auth\/register$/)) {
    if (!tijelo.ime || !tijelo.uloga || !tijelo.email) throw greska(400, "Nedostaju obavezna polja");
    const x = db.korisnici.find((x) => x.email === tijelo.email);
    if (x) throw greska(403, "Korisnik već postoji");
    const k = {
      id: db.sljedeci++,
      ime: tijelo.ime, email: tijelo.email, uloga: tijelo.uloga, aktivan: true,
      autoservis: tijelo.autoservis || null, specijalizacija: tijelo.specijalizacija || null,
    };
    db.korisnici.push(k);
    spremiDb(db);
    return k;
  }
  if (!idKorisnika) throw greska(401, "Mock korisnik nije prijavljen");
  if (ruta("GET", /^\/users\/me$/)) {
    if (!ja) throw greska(404, "Korisnik nije pronađen");
    if (!ja.aktivan) throw greska(403, "Korisnik je deaktiviran");
    return ja
  }
  if (!ja || !ja.aktivan) throw greska(403, "Nemate pravo na ovu radnju");

  if (ruta("GET", /^\/vozila$/)) {
    treba("vlasnik");
    return db.vozila.filter((v) => v.vlasnikId === ja.id).map((v) => ({ id: v.id, oznaka: v.oznaka, model: v.model, godina: v.godina, km: v.km }));
  }
  if (ruta("POST", /^\/vozila$/)) {
    treba("vlasnik");
    if (!tijelo.oznaka || !tijelo.model || !tijelo.godina || tijelo.km === "" || tijelo.km == null) throw greska(400, "Sva polja su obavezna");
    if (db.vozila.some((v) => v.oznaka.toLowerCase() === String(tijelo.oznaka).toLowerCase())) throw greska(400, "Vozilo s tom oznakom već postoji");
    const v = { id: db.sljedeci++, vlasnikId: ja.id, oznaka: tijelo.oznaka, model: tijelo.model, godina: Number(tijelo.godina), km: Number(tijelo.km) };
    db.vozila.push(v);
    spremiDb(db);
    return { id: v.id, oznaka: v.oznaka, model: v.model, godina: v.godina, km: v.km };
  }

  if (ruta("GET", /^\/zahtjevi$/)) {
    let lista = db.zahtjevi;
    if (ja.uloga === "vlasnik") lista = lista.filter((z) => z.vlasnikId === ja.id);
    if (ja.uloga === "serviser") lista = lista.filter((z) => z.serviserId === ja.id);
    return lista.map((z) => mockZahtjev(db, z));
  }
  if (ruta("POST", /^\/zahtjevi$/)) {
    treba("vlasnik");
    const v = db.vozila.find((x) => x.id === Number(tijelo.vozilo_id) && x.vlasnikId === ja.id);
    if (!v) throw greska(400, "Vozilo ne postoji");
    if (!tijelo.vrsta || !tijelo.termin) throw greska(400, "Vrsta i termin su obavezni");
    const z = { id: db.sljedeci++, voziloId: v.id, vlasnikId: ja.id, serviserId: null, vrsta: tijelo.vrsta, termin: tijelo.termin, status: "zatrazeno", radovi: [], ponuda: null, trosak: null, ocjena: null, poruke: [] };
    db.zahtjevi.push(z);
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/ponuda\/odluka$/)) {
    treba("vlasnik");
    const z = nadiZahtjev(m[1]);
    if (!z.ponuda || z.ponuda.odluka !== null) throw greska(400, "Nema ponude koja čeka odluku");
    z.ponuda.odluka = tijelo.prihvaceno ? "prihvacena" : "odbijena";
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/ocjena$/)) {
    treba("vlasnik");
    const z = nadiZahtjev(m[1]);
    if (z.status !== "zavrseno") throw greska(400, "Ocjena je moguća tek nakon završenog servisa");
    const ocjena = Number(tijelo.ocjena);
    if (!(ocjena >= 1 && ocjena <= 5)) throw greska(400, "Ocjena mora biti od 1 do 5");
    z.ocjena = ocjena;
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("GET", /^\/zahtjevi\/(\d+)\/potvrda$/)) {
    const z = nadiZahtjev(m[1]);
    if (z.status !== "zavrseno") throw greska(400, "Potvrda je dostupna tek za završen servis");
    const p = mockZahtjev(db, z);
    const tekst = "POTVRDA O OBAVLJENOM SERVISU\n\nVozilo: " + p.vozilo.naziv + " (" + p.vozilo.oznaka + ")\nVrsta servisa: " + p.vrsta + "\nTermin: " + p.termin + "\n\nRadovi:\n" +
      p.radovi.map((r) => " - " + r.opis + (r.dio ? " (" + r.dio + ")" : "") + ", " + r.minute + " min").join("\n") + "\n\nUkupni trošak: " + p.trosak + " EUR\n";
    return { tekst: tekst };
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/poruke$/)) {
    if (ja.uloga !== "vlasnik" && ja.uloga !== "serviser") throw greska(403, "Nemate pravo na ovu radnju");
    const z = nadiZahtjev(m[1]);
    if (!tijelo.tekst || !String(tijelo.tekst).trim()) throw greska(400, "Poruka je prazna");
    z.poruke.push({ autor: ja.ime, vrijeme: new Date().toISOString().slice(0, 16), tekst: String(tijelo.tekst).trim() });
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/status$/)) {
    treba("serviser");
    const z = nadiZahtjev(m[1]);
    if (MOCK_STATUSI.indexOf(tijelo.status) < 0) throw greska(400, "Nepoznat status");
    z.status = tijelo.status;
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/radovi$/)) {
    treba("serviser");
    const z = nadiZahtjev(m[1]);
    if (!tijelo.opis || tijelo.minute === "" || tijelo.minute == null) throw greska(400, "Opis i vrijeme su obavezni");
    z.radovi.push({ opis: tijelo.opis, dio: tijelo.dio || "", minute: Number(tijelo.minute) });
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/ponuda$/)) {
    treba("serviser");
    const z = nadiZahtjev(m[1]);
    if (!tijelo.opis || tijelo.trosak === "" || tijelo.trosak == null) throw greska(400, "Opis i trošak su obavezni");
    z.ponuda = { opis: tijelo.opis, trosak: Number(tijelo.trosak), odluka: null };
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("POST", /^\/zahtjevi\/(\d+)\/zavrsi$/)) {
    treba("serviser");
    const z = nadiZahtjev(m[1]);
    if (tijelo.trosak === "" || tijelo.trosak == null) throw greska(400, "Konačni trošak je obavezan");
    z.trosak = Number(tijelo.trosak);
    z.status = "zavrseno";
    spremiDb(db);
    return mockZahtjev(db, z);
  }
  if (ruta("PATCH", /^\/zahtjevi\/(\d+)$/)) {
    treba("voditelj");
    const z = nadiZahtjev(m[1]);
    if (tijelo.termin) z.termin = tijelo.termin;
    if (tijelo.status) {
      if (MOCK_STATUSI.indexOf(tijelo.status) < 0) throw greska(400, "Nepoznat status");
      z.status = tijelo.status;
    }
    if ("serviser_id" in tijelo) z.serviserId = tijelo.serviser_id;
    spremiDb(db);
    return mockZahtjev(db, z);
  }

  if (ruta("GET", /^\/serviseri$/)) {
    treba("voditelj");
    return db.korisnici.filter((k) => k.uloga === "serviser" && k.aktivan).map((k) => ({
      id: k.id,
      ime: k.ime,
      specijalizacija: k.specijalizacija || "",
      aktivnih_zahtjeva: db.zahtjevi.filter((z) => z.serviserId === k.id && z.status !== "zavrseno" && z.status !== "otkazano").length,
    }));
  }
  if (ruta("POST", /^\/serviseri$/)) {
    treba("voditelj");
    if (!tijelo.email) throw greska(400, "E-mail je obavezan");
    if (db.korisnici.some((k) => k.email === tijelo.email)) throw greska(400, "Korisnik s tim e-mailom već postoji");
    const k = { id: db.sljedeci++, ime: tijelo.email.split("@")[0], email: tijelo.email, uloga: "serviser", autoservis: ja.autoservis, specijalizacija: "", aktivan: true };
    db.korisnici.push(k);
    spremiDb(db);
    return { id: k.id, ime: k.ime, specijalizacija: "", aktivnih_zahtjeva: 0 };
  }
  if (ruta("POST", /^\/serviseri\/(\d+)\/deaktiviraj$/)) {
    treba("voditelj");
    const k = db.korisnici.find((x) => x.id === Number(m[1]) && x.uloga === "serviser");
    if (!k) throw greska(404, "Serviser ne postoji");
    k.aktivan = false;
    db.zahtjevi.forEach((z) => {
      if (z.serviserId === k.id && z.status !== "zavrseno") z.serviserId = null;
    });
    spremiDb(db);
    return null;
  }
  if (ruta("GET", /^\/statistika$/)) {
    treba("voditelj");
    if (!db.pretplata) throw greska(403, "Statistika je dostupna uz aktivnu pretplatu");
    const gotovi = db.zahtjevi.filter((z) => z.status === "zavrseno");
    const poVrsti = {};
    let minute = 0;
    let ukupno = 0;
    gotovi.forEach((z) => {
      poVrsti[z.vrsta] = (poVrsti[z.vrsta] || 0) + 1;
      minute += z.radovi.reduce((s, r) => s + r.minute, 0);
      ukupno += z.trosak || 0;
    });
    return {
      broj_servisa: gotovi.length,
      prosjecno_trajanje_min: gotovi.length ? Math.round(minute / gotovi.length) : 0,
      ukupna_vrijednost: ukupno,
      po_vrsti: poVrsti,
      povijest: gotovi.map((z) => {
        const p = mockZahtjev(db, z);
        return { datum: z.termin.slice(0, 10), vozilo: p.vozilo.naziv, vrsta: z.vrsta, trosak: z.trosak };
      }),
    };
  }
  if (ruta("GET", /^\/pretplata$/)) {
    treba("voditelj");
    return { aktivna: db.pretplata, cijena: db.cijena };
  }
  if (ruta("POST", /^\/pretplata$/)) {
    treba("voditelj");
    db.pretplata = true;
    spremiDb(db);
    return { url: null };
  }

  throw greska(404, "Nepoznat endpoint: " + metoda + " " + putanja);
}
