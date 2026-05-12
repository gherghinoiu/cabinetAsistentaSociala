# PROCEDURĂ: MIGRARE CĂTRE DOMENIU .RO

Acest fișier este un jurnal al modificărilor temporare pe care le-am făcut pentru a forța site-ul să funcționeze corect pe linkul provizoriu de la GitHub (care folosește un sub-folder: `https://gherghinoiu.github.io/cabinetAsistentaSociala/`).

**Regulă Generală:** 
În momentul în care vei cumpăra și vei atașa un domeniu personalizat (ex: `www.cabinet-asistenta.ro`), acel sub-folder `cabinetAsistentaSociala/` va dispărea din structura URL a site-ului tău.
La acel moment, va trebui să treci prin fișierele de mai jos și să înlocuiești `/cabinetAsistentaSociala/` cu o simplă bară oblică `/`. 

*(Dacă folosești opțiunea de "Find and Replace" în VS Code, înlocuiești textul `="/cabinetAsistentaSociala/` cu `="/` la nivelul întregului folder).*

---

### LISTA MODIFICĂRILOR TEMPORARE (De reparat la adăugarea domeniului):

**1. Fișiere HTML Principale**
- `index.html` (Meniul, CSS, JS, butoanele către alte pagini)
- `servicii.html`
- `despre-noi.html`
- `contact.html`
- `politica-confidentialitate.html`
- *Ce trebuie făcut:* `<a href="/cabinetAsistentaSociala/contact.html">` trebuie să redevină `<a href="/contact.html">`

**2. Componente (Meniu și Footer)**
- `components/header.html`
- `components/footer.html`
- *Ce trebuie făcut:* Toate linkurile de navigare au primit prefixul `/cabinetAsistentaSociala/`. Trebuie scos acest prefix.

**3. Secțiunea de Articole**
- `articole/index.html`
- `articole/articol.html`
- `articole/lista-articole.json`
- *Ce trebuie făcut:* Toate linkurile de design și script trebuie să redevină `/css/style.css`, iar în `lista-articole.json` calea `"file": "/cabinetAsistentaSociala/articole/..."` trebuie să redevină `"file": "/articole/..."`.

**4. Logica JavaScript (`js/main.js`)**
- Funcția `loadComponents()` are acum `fetch('/cabinetAsistentaSociala/components/header.html')`. Trebuie să redevină `fetch('/components/header.html')`.
- Logica pentru linkuri active `if (currentPath === '/cabinetAsistentaSociala/'...)` trebuie să redevină `if (currentPath === '/'...)`.

**5. Panoul de CMS (`admin/config.yml`)**
- Regula `public_folder: "/cabinetAsistentaSociala/articole"` trebuie să redevină `public_folder: "/articole"`.

*(Acest fișier va fi actualizat de către asistent dacă adăugăm alte componente temporare pe parcurs).*
