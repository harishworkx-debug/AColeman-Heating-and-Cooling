const fs = require('fs');

const content = fs.readFileSync('src/data/business.ts', 'utf-8');

const servicesMatch = content.match(/export const SERVICES: ServiceItem\[\] = \[([\s\S]*?)\];/);
const locationsMatch = content.match(/export const LOCATIONS: LocationItem\[\] = \[([\s\S]*?)\];/);

let sSlugs = [];
if(servicesMatch) {
    const sBlock = servicesMatch[1];
    const matches = sBlock.matchAll(/slug:\s*'([^']+)'/g);
    for(const m of matches) sSlugs.push(m[1]);
}

let lSlugs = [];
if(locationsMatch) {
    const lBlock = locationsMatch[1];
    const matches = lBlock.matchAll(/slug:\s*'([^']+)'/g);
    for(const m of matches) lSlugs.push(m[1]);
}

const DOMAIN = 'https://www.acolemanhvac.com';

const urls = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/service-areas',
    '/faqs'
];

for (const s of sSlugs) urls.push('/' + s);
for (const l of lSlugs) urls.push('/' + l);

for (const s of sSlugs) {
    for (const l of lSlugs) {
        urls.push('/' + s + '-' + l);
    }
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for (const url of urls) {
    xml += `
  <url>
    <loc>${DOMAIN}${url}</loc>
  </url>`;
}
xml += '\n</urlset>';

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Generated public/sitemap.xml with ' + urls.length + ' urls.');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync('public/robots.txt', robotsTxt);
console.log('Generated public/robots.txt');
