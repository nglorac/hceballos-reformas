const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, '../dist/hceballos-reformas/browser');

// Copy index.html to 404.html so Angular routing handles all paths on GitHub Pages
const indexPath = path.join(browserDir, 'index.html');
const notFoundPath = path.join(browserDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error(`index.html not found at ${indexPath}. Make sure the build was successful.`);
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log('Created 404.html from index.html for GitHub Pages SPA routing.');
console.log('Post-build processing completed successfully!');
