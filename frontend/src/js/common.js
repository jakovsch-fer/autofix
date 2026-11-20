const $ = (id) => document.getElementById(id);

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const STATUSI = {
  zatrazeno: "Zatraženo",
  potvrdeno: "Potvrđeno",
  zaprimljeno: "Vozilo zaprimljeno",
  u_tijeku: "Servis u tijeku",
  zavrseno: "Završeno",
  otkazano: "Otkazano",
};
const ODLUKE = { prihvacena: "prihvaćena", odbijena: "odbijena" };
const KORACI = ["zatrazeno", "potvrdeno", "zaprimljeno", "u_tijeku", "zavrseno"];

const POCETNE = {
  vlasnik: "zahtjevi.html",
  serviser: "serviser-zahtjevi.html",
  voditelj: "voditelj-zahtjevi.html",
};

const IZBORNIK = {
  vlasnik: [["Vozila", "vozila.html"], ["Zahtjevi i povijest", "zahtjevi.html"], ["Novi zahtjev", "zahtjev-novi.html"]],
  serviser: [["Moji zahtjevi", "serviser-zahtjevi.html"]],
  voditelj: [["Raspored", "voditelj-zahtjevi.html"], ["Serviseri", "voditelj-serviseri.html"], ["Povijest i statistika", "voditelj-statistika.html"], ["Pretplata", "voditelj-pretplata.html"]],
};

function termin(t) {
  if (!t) return "-";
  return new Date(t).toLocaleString("hr-HR", { dateStyle: "short", timeStyle: "short" });
}

function eur(n) {
  return Number(n).toFixed(2).replace(".", ",") + " €";
}

function traka(status, napomena) {
  if (status === "otkazano") return "<p><b>Otkazano</b></p>";
  const trenutni = status === "zavrseno" ? 6 : KORACI.indexOf(status) + 1;
  let h = '<ol class="koraci">';
  KORACI.forEach((k, i) => {
    const broj = i + 1;
    const klasa = broj < trenutni ? "gotovo" : broj === trenutni ? "sad" : "";
    const mali = broj === trenutni && napomena ? "<br><small>" + esc(napomena) + "</small>" : "";
    h += '<li class="' + klasa + '">' + STATUSI[k] + mali + "</li>";
  });
  return h + "</ol>";
}

function radoviHtml(z) {
  if (!z.radovi.length) return "";
  let h = "<p><b>Radovi:</b></p><ul>";
  z.radovi.forEach((r) => {
    h += "<li>" + esc(r.opis) + (r.dio ? " (" + esc(r.dio) + ")" : "") + ", " + r.minute + " min</li>";
  });
  return h + "</ul>";
}

function porukeHtml(z) {
  let h = '<p><b>Poruke</b></p><div class="poruke">';
  if (!z.poruke.length) h += "<p>Još nema poruka.</p>";
  z.poruke.forEach((p) => {
    h += "<p><b>" + esc(p.autor) + "</b> (" + termin(p.vrijeme) + "): " + esc(p.tekst) + "</p>";
  });
  h += '</div><form onsubmit="return poruka(event, ' + z.id + ')"><textarea name="tekst" rows="2" required></textarea><br><input type="submit" value="Pošalji poruku"></form>';
  return h;
}

async function izvedi(radnja) {
  try {
    await radnja();
    await ucitaj();
  } catch (e) {
    alert(e.message);
  }
}

function poruka(e, id) {
  e.preventDefault();
  const tekst = e.target.elements.tekst.value;
  izvedi(() => api("POST", "/zahtjevi/" + id + "/poruke", { tekst: tekst }));
  return false;
}

async function pokreni(uloga) {
  let ja;
  try {
    ja = await api("GET", "/users/me");
  } catch (e) {
    if (e.status === 404) {
      location.href = "registracija.html";
    } else if (e.status === 401) {
      location.href = location.origin;
    } else {
      alert(e.message);
    }
    return null;
  }
  // if (!ja.uloga) {
  //   location.href = "registracija.html";
  //   return null;
  // }
  if (uloga && ja.uloga !== uloga) {
    location.href = POCETNE[ja.uloga];
    return null;
  }
  const veze = IZBORNIK[ja.uloga].map((s) => '<a href="' + s[1] + '">' + s[0] + "</a>");
  veze.push('<a href="#" onclick="odjava(); return false;">Odjava</a>');
  $("nav").innerHTML = veze.join(" | ") + " <small>(" + esc(ja.ime) + ")</small>";
  return ja;
}

async function odjava() {
  location.href = "odjava.html";
}

function pocni(uloga) {
  pokreni(uloga).then((ja) => {
    if (ja) ucitaj().catch((e) => alert(e.message));
  });
}
