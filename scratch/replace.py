import os, re

files = ['index.html', 'despre-noi.html', 'servicii.html', 'contact.html', 'politica-confidentialitate.html']

for f in files:
    if not os.path.exists(f):
        continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Inlocuieste blocul <header>...</header>
    content = re.sub(r'<header>.*?</header>', '<div id="header-placeholder"></div>', content, flags=re.DOTALL)
    
    # Inlocuieste blocul <footer>...</footer>
    content = re.sub(r'<footer[^>]*>.*?</footer>', '<div id="footer-placeholder"></div>', content, flags=re.DOTALL)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f'Updated {f}')
