// Serves the site/ folder at http://127.0.0.1:4173 (or the PORT variable).
import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../site/', import.meta.url));
const port = Number(process.env.PORT) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

function resolveFile(urlPath) {
  let file = path.join(root, decodeURIComponent(urlPath));
  if (!file.startsWith(root)) return null;
  if (statSync(file, { throwIfNoEntry: false })?.isDirectory()) file = path.join(file, 'index.html');
  return statSync(file, { throwIfNoEntry: false })?.isFile() ? file : null;
}

createServer((req, res) => {
  let file = null;
  try {
    file = resolveFile(new URL(req.url ?? '/', 'http://localhost').pathname);
  } catch {
    // Malformed URL: answered as not found.
  }
  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found');
    return;
  }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving site/ at http://127.0.0.1:${port}`);
});
