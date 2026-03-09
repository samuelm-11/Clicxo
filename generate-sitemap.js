// generate-sitemap.js
// Lancé automatiquement par Cloudflare Pages à chaque déploiement

const fs   = require('fs');
const path = require('path');

const BASE_URL  = 'https://clicxo.netlify.app';
const JSON_PATH = path.join(__dirname, 'data', 'articles.json');
const OUT_PATH  = path.join(__dirname, 'sitemap.xml');

const articles = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));

const staticPages = [
  { url: '/',                    priority: '1.0', freq: 'daily'   },
  { url: '/apropos.html',        priority: '0.3', freq: 'yearly'  },
  { url: '/contact.html',        priority: '0.2', freq: 'yearly'  },
  { url: '/mentions-legales.html', priority: '0.2', freq: 'yearly'},
  { url: '/politique-confidentialite.html', priority: '0.2', freq: 'yearly' },
  { url: '/categorie-iphone.html',  priority: '0.6', freq: 'weekly' },
  { url: '/categorie-android.html', priority: '0.6', freq: 'weekly' },
  { url: '/categorie-windows.html', priority: '0.6', freq: 'weekly' },
  { url: '/categorie-wifi.html',    priority: '0.6', freq: 'weekly' },
];

const articleEntries = articles.map(a => `  <url>
    <loc>${BASE_URL}${a.url}</loc>
    <lastmod>${a.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

const staticEntries = staticPages.map(p => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${articleEntries}
</urlset>`;

fs.writeFileSync(OUT_PATH, sitemap, 'utf8');
console.log(`✅ Sitemap généré avec ${articles.length} articles.`);
