import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const defaultSiteOrigin = 'https://netpro.africa';
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about-us', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/products', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact-us', changefreq: 'monthly', priority: '0.7' },
  { path: '/careers', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
];

function normalizeSiteOrigin(value) {
  return (value || defaultSiteOrigin).trim().replace(/\/+$/, '');
}

function normalizeBasePath(value) {
  const rawValue = (value || '/').trim();

  if (rawValue === '/') {
    return '/';
  }

  const trimmedValue = rawValue.replace(/^\/+|\/+$/g, '');

  return trimmedValue ? `/${trimmedValue}/` : '/';
}

function withBasePath(basePath, routePath) {
  const cleanPath =
    routePath === '/' ? '/' : `/${routePath.replace(/^\/+/, '')}`;

  if (basePath === '/') {
    return cleanPath;
  }

  const trimmedBasePath = basePath.replace(/\/$/, '');

  if (cleanPath === '/') {
    return trimmedBasePath;
  }

  return `${trimmedBasePath}${cleanPath}`;
}

function absoluteUrl(siteOrigin, basePath, routePath) {
  const resolvedPath = withBasePath(basePath, routePath);

  return `${siteOrigin}${resolvedPath === '/' ? '' : resolvedPath}`;
}

const siteOrigin = normalizeSiteOrigin(process.env.VITE_SITE_ORIGIN);
const basePath = normalizeBasePath(process.env.VITE_APP_BASE_PATH);
const buildDate = new Date().toISOString().slice(0, 10);

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl(siteOrigin, basePath, '/sitemap.xml')}
`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(siteOrigin, basePath, route.path)}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const htaccessContent = `DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d [OR]
  RewriteCond %{REQUEST_FILENAME} -l
  RewriteRule ^ - [L]
  RewriteRule . index.html [L]
</IfModule>
`;

const indexHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');

await Promise.all([
  writeFile(path.join(distDir, 'robots.txt'), robotsContent),
  writeFile(path.join(distDir, 'sitemap.xml'), sitemapContent),
  writeFile(path.join(distDir, '.htaccess'), htaccessContent),
  writeFile(path.join(distDir, '404.html'), indexHtml),
]);

console.log(
  `Prepared deploy artifacts for ${siteOrigin}${basePath === '/' ? '' : basePath}`,
);
