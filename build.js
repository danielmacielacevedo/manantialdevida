const fs = require('fs');
const path = require('path');
const recursive = require('recursive-readdir');

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

// Recorre de manera recursiva la carpeta "assets" y genera una lista de URLs a partir de los archivos encontrados.
recursive(ASSETS_DIR, (error, files) => {
  if (error) {
    console.error(error);
    return;
  }

  const urlsToCache = files.map(file => path.join('/', path.relative(ASSETS_DIR, file)));

  // Crea el archivo "urlsToCache.js" con la lista de URLs a cachear dentro de la carpeta "public".
  const content = `export default ${JSON.stringify(urlsToCache, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, 'public', 'urlsToCache.js'), content);
});
