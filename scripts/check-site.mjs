import { readFile, readdir, access, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';

const root = resolve('dist');
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await walk(root);
let checked = 0;
const errors = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|data:|tel:)/.test(value)) continue;
    const [path, fragment] = value.split('#');
    const cleanPath = path.split('?')[0];
    const target = cleanPath ? (cleanPath.startsWith('/') ? join(root, cleanPath) : resolve(dirname(file), cleanPath)) : file;
    const candidates = [target, `${target}.html`, join(target, 'index.html')];
    let found;
    for (const candidate of candidates) {
      try { if ((await stat(candidate)).isFile()) { found = candidate; break; } } catch {}
    }
    if (!found) { errors.push(`${file}: missing target ${value}`); continue; }
    if (fragment && found.endsWith('.html')) {
      const targetHtml = await readFile(found, 'utf8');
      if (!targetHtml.includes(`id="${decodeURIComponent(fragment)}"`)) errors.push(`${file}: missing anchor ${value}`);
    }
    checked++;
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (!html.includes('<title>') || !html.includes('name="description"') || !html.includes('rel="canonical"')) errors.push(`${file}: missing page metadata`);
}
for (const file of ['robots.txt','sitemap.xml','404.html','_headers']) await access(join(root,file));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${files.length} pages and ${checked} local asset, route, and anchor references.`);
