const CONFIG = {
  USE_MOCK: true,
  API_BASE: "http://localhost:8000/api",
};

async function api(metoda, putanja, tijelo) {
  if (CONFIG.USE_MOCK) {
    return mock(metoda, putanja, tijelo);
  }
  const odgovor = await fetch(CONFIG.API_BASE + putanja, {
    method: metoda,
    credentials: "include",
    headers: tijelo ? { "Content-Type": "application/json" } : {},
    body: tijelo ? JSON.stringify(tijelo) : undefined,
  });
  if (!odgovor.ok) {
    let poruka = "Greška " + odgovor.status;
    try {
      const podaci = await odgovor.json();
      if (podaci.detail) poruka = podaci.detail;
    } catch (e) {}
    const greska = new Error(poruka);
    greska.status = odgovor.status;
    throw greska;
  }
  if (odgovor.status === 204) return null;
  return odgovor.json();
}
