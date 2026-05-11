document.addEventListener('DOMContentLoaded', async () => {
    // Încărcare componente (Header & Footer)
    await loadComponents();

    // Inițializare funcționalități
    initMobileMenu();
    setActiveLink();
    initContactForm();
});

async function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        try {
            const response = await fetch('/components/header.html');
            if (response.ok) {
                headerPlaceholder.innerHTML = await response.text();
            }
        } catch (error) {
            console.error('Eroare la încărcarea header-ului:', error);
        }
    }

    if (footerPlaceholder) {
        try {
            const response = await fetch('/components/footer.html');
            if (response.ok) {
                footerPlaceholder.innerHTML = await response.text();
            }
        } catch (error) {
            console.error('Eroare la încărcarea footer-ului:', error);
        }
    }
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }
}

function setActiveLink() {
    let currentPath = window.location.pathname;
    // Normalizare path pentru GitHub Pages / Live Server
    if (currentPath === '/' || currentPath.endsWith('/')) {
        currentPath += 'index.html';
    }
    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Dacă suntem într-un articol individual (ex: /articole/articol.html) menținem activ link-ul de Articole
        if (href === currentPath || (currentPath.includes('/articole/') && href.includes('/articole/'))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = "Se trimite...";
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = "Mesajul dumneavoastră a fost trimis cu succes! Vă vom contacta în scurt timp.";
                    formStatus.classList.add('success');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (data.hasOwnProperty('errors')) {
                        formStatus.textContent = data.errors.map(error => error.message).join(", ");
                    } else {
                        formStatus.textContent = "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou sau să ne contactați telefonic.";
                    }
                    formStatus.classList.add('error');
                }
            } catch (error) {
                formStatus.textContent = "Eroare de conexiune. Vă rugăm verificați conexiunea la internet.";
                formStatus.classList.add('error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = "Trimite Mesajul";
            }
        });
    }
}
