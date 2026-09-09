const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\251b4420-bf92-4c15-a660-b83b327c34d3';
const destDir = path.join(__dirname, '..', 'assets', 'images', 'products');

const brainFiles = fs.readdirSync(brainDir);

const mapping = {
  'frozen_artichoke_bottoms': 'frozen_artichoke_bottoms.jpg',
  'frozen_mixed_vegetables': 'frozen_mixed_vegetables.jpg',
  'frozen_green_peas': 'frozen_green_peas.jpg',
  'frozen_peas_carrots': 'frozen_peas_carrots.jpg',
  'frozen_green_beans': 'frozen_green_beans.jpg',
  'frozen_molokhia': 'frozen_molokhia.jpg',
  'frozen_okra_zero': 'frozen_okra_zero.jpg',
  'frozen_okra_extra': 'frozen_okra_extra.jpg',
  'frozen_okra_excellence': 'frozen_okra_excellence.jpg',
  'frozen_grape_leaves': 'frozen_grape_leaves.jpg',
  'frozen_broccoli': 'frozen_broccoli.jpg',
  'frozen_roasted_eggplant': 'frozen_roasted_eggplant.jpg',
  'frozen_sweet_corn': 'frozen_sweet_corn.jpg'
};

for (const [prefix, destName] of Object.entries(mapping)) {
  const matching = brainFiles.filter(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (matching.length > 0) {
    matching.sort();
    const chosen = matching[matching.length - 1];
    const sourceFile = path.join(brainDir, chosen);
    const targetFile = path.join(destDir, destName);
    fs.copyFileSync(sourceFile, targetFile);
    const size = fs.statSync(targetFile).size;
    console.log(`Copied ${chosen} -> ${destName} (${size} bytes)`);
  } else {
    console.error('NOT FOUND for prefix:', prefix);
  }
}
