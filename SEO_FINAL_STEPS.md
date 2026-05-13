# Ghid Finalizare SEO și Optimizare Imagini

Acest document conține pașii necesari pentru a finaliza optimizarea SEO a site-ului **ciasdumitrancristina.ro** și instrucțiuni pentru pregătirea imaginilor.

---

## 1. Optimizarea Imaginilor (WebP) — CRITIC

Imaginile actuale (`hero.png` și `hero-mobile.PNG`) sunt prea mari (peste 11 MB total). Pentru un scor Google PageSpeed de 95+, acestea trebuie să fie sub **200 KB**.

### Cum convertești gratuit în WebP:

1.  **Squoosh.app (Recomandat - creat de Google):**
    - Mergi pe [squoosh.app](https://squoosh.app/).
    - Încarcă imaginea `hero.png`.
    - Selectează formatul **WebP** din meniul din dreapta.
    - Ajustează „Quality” (de obicei 75-80% este perfect).
    - Verifică dimensiunea estimată (trebuie să fie cât mai aproape de 200 KB).
    - Descarcă și înlocuiește fișierul original.
2.  **CloudConvert:**
    - Mergi pe [cloudconvert.com/png-to-webp](https://cloudconvert.com/png-to-webp).
    - Încarcă fișierele și descarcă varianta WebP.
3.  **TinyPNG:**
    - Deși este pentru PNG/JPG, serviciul lor de conversie [tinypng.com](https://tinypng.com/) reduce drastic dimensiunea păstrând calitatea.

**Notă:** După conversie, trebuie să actualizezi în `style.css` extensia fișierului (din `.png` în `.webp`).

---

## 2. Actualizarea Datelor Personale

Caută următoarele elemente în toate fișierele HTML și înlocuiește-le cu datele tale reale:

- **Adresa:** Înlocuiește `Full street address` și `Postal code`.
- **Email:** Verifică dacă `dumitranc@yahoo.com` este adresa finală pe care dorești să o afișezi.
- **Coordonate GPS:** Dacă ai un sediu fix, caută `"latitude": "44.4268"` și `"longitude": "26.1025"` în secțiunile de tip `application/ld+json` (Structured Data) și pune coordonatele tale exacte.

---

## 3. SEO Local (După lansare)

Acțiunile de mai jos se fac în afara site-ului, dar sunt esențiale pentru a apărea pe prima pagină în București:

1.  **Google Business Profile (Fostul Google My Business):**
    - Creează un profil pe [google.com/business](https://www.google.com/business/).
    - Nume: `Cristina Dumitran Cabinet Individual de Asistență Socială`.
    - Adaugă fotografii cu sediul, logo-ul și descrierea serviciilor în română.
2.  **Google Search Console:**
    - Autentifică-te pe [search.google.com](https://search.google.com/search-console/).
    - Adaugă proprietatea (site-ul tău).
    - Mergi la secțiunea **Sitemaps** și introdu: `https://ciasdumitrancristina.ro/sitemap.xml`.
3.  **Înscrierea în Directoare (NAP Consistency):**
    - Înscrie-te pe: `listafirme.ro`, `paginiaurii.ro`, `bizoo.ro`, `firme.info`, `cylex.ro`.
    - **Atenție:** Numele, Adresa și Telefonul (NAP) trebuie să fie IDENTICE peste tot (site, Google, directoare).

---

## 4. Verificare Finală

După ce ai urcat totul pe GitHub, verifică performanța aici:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results) (pentru a vedea dacă datele structurate sunt corecte).
