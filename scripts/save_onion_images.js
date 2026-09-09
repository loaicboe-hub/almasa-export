const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\251b4420-bf92-4c15-a660-b83b327c34d3';
const destDir = path.join(__dirname, '..', 'assets', 'images', 'products');

async function download(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  console.log('Saved:', destPath, buffer.length);
}

async function run() {
  const redUrl = 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=85&w=1200&auto=format&fit=crop';
  const whiteUrl = 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=85&w=1200&auto=format&fit=crop';

  const redBrain = path.join(brainDir, 'fresh_red_onion_preview.jpg');
  const whiteBrain = path.join(brainDir, 'fresh_white_onion_preview.jpg');

  await download(redUrl, redBrain);
  await download(whiteUrl, whiteBrain);

  // Also copy directly to assets/images/products/
  fs.copyFileSync(redBrain, path.join(destDir, 'fresh_red_onion.jpg'));
  fs.copyFileSync(whiteBrain, path.join(destDir, 'fresh_white_onion.jpg'));
  console.log('Copied to assets/images/products/fresh_red_onion.jpg & fresh_white_onion.jpg');
}

run();
