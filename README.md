# Clicxo — Guide d'ajout d'article

## Structure du projet

```
clicxo/
├── css/
│   └── style.css                    ← CSS partagé (ne pas toucher)
├── data/
│   └── articles.json                ← Registre central des articles
├── articles/
│   └── mon-article.html
├── index.html
├── apropos.html
├── contact.html
├── mentions-legales.html
├── politique-confidentialite.html
├── categorie-iphone.html
├── categorie-android.html
├── categorie-windows.html
├── categorie-wifi.html
├── generate-sitemap.js              ← Lancé auto par Cloudflare
├── package.json
└── robots.txt
```

## Ajouter un article en 3 étapes

### 1. Créer le fichier HTML dans /articles
Copier un article existant et modifier :
- `<title>`, `<meta description>`, `<link canonical>`
- Le contenu H1, intro, sections

### 2. Ajouter l'entrée dans data/articles.json
```json
{
  "title": "Titre de l'article",
  "slug": "nom-fichier-sans-extension",
  "url": "/articles/nom-fichier.html",
  "category": "iphone",
  "categoryLabel": "iPhone",
  "description": "Résumé court.",
  "date": "2026-03-10",
  "readingTime": "5 min",
  "theme": "electric"
}
```
category : iphone | android | windows | wifi
theme    : electric | coral | lime

### 3. Pusher sur GitHub
Le sitemap est régénéré automatiquement par Cloudflare Pages.

## Config Cloudflare Pages
- Build command : `npm run build`
- Output directory : `/` (racine)
