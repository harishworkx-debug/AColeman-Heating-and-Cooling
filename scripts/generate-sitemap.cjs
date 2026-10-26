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

for (const l of lSlugs) urls.push('/' + l);

for (const s of sSlugs) {
    for (const l of lSlugs) {
        urls.push('/' + s + '-' + l);
    }
}

const problemGuides = [
    '/why-is-my-furnace-blowing-cold-air',
    '/why-is-my-ac-running-but-not-cooling',
    '/when-should-you-replace-your-furnace',
    '/how-often-should-hvac-systems-be-serviced',
    '/common-thermostat-problems',
    '/why-does-my-hvac-system-make-strange-noises',
    '/furnace-repair-vs-replacement',
    '/what-affects-the-cost-of-ac-installation',
    '/signs-your-air-ducts-need-inspection',
    '/how-to-prepare-your-hvac-system-for-winter-in-illinois'
];

for (const p of problemGuides) urls.push(p);

const today = new Date().toISOString().split('T')[0];

function getPriority(url) {
  if (url === '/') return { priority: '1.0', changefreq: 'daily' };
  if (url === '/services' || url === '/contact' || url === '/service-areas') return { priority: '0.9', changefreq: 'weekly' };
  if (url.endsWith('-waukegan-il')) return { priority: '0.9', changefreq: 'weekly' };
  if (url.includes('-')) return { priority: '0.8', changefreq: 'weekly' };
  if (url === '/about' || url === '/faqs') return { priority: '0.7', changefreq: 'monthly' };
  return { priority: '0.7', changefreq: 'monthly' };
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for (const url of urls) {
    const meta = getPriority(url);
    xml += `
  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
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
