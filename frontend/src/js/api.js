const CONFIG = {
  USE_MOCK: true,
  API_BASE: "http://localhost:8000/api",
  OIDC_AUTHORITY: "https://accounts.google.com",
  OIDC_CLIENT_ID: "UPISI_CLIENT_ID",
};

function dohvatiToken() {
  return sessionStorage.getItem("token");
}

function spremiToken(token) {
  sessionStorage.setItem("token", token);
}

function claimovi() {
  const token = dohvatiToken();
  if (!token) return {};
  try {
    const dio = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(decodeURIComponent(escape(atob(dio))));
  } catch (e) {
    return {};
  }
}

async function api(metoda, putanja, tijelo) {
  if (CONFIG.USE_MOCK) {
    return mock(metoda, putanja, tijelo);
  }
  const zaglavlja = {};
  if (tijelo) zaglavlja["Content-Type"] = "application/json";
  if (dohvatiToken()) zaglavlja["Authorization"] = "Bearer " + dohvatiToken();
  const odgovor = await fetch(CONFIG.API_BASE + putanja, {
    method: metoda,
    headers: zaglavlja,
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

function prijavaOidc() {
  const um = new oidc.UserManager({
    authority: CONFIG.OIDC_AUTHORITY,
    client_id: CONFIG.OIDC_CLIENT_ID,
    redirect_uri: location.origin + location.pathname.replace(/[^/]*$/, "") + "callback.html",
    response_type: "code",
    scope: "openid profile email",
  });
  return um.signinRedirect();
}
