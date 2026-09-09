const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const downloads = [
  {
    name: 'white_pumpkin_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Seeds%2C_white_Pumpkin%2C_Linn%2C_curcubita_pepo_..jpg'
  },
  {
    name: 'super_melon_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Roasted_watermelon_seeds_1.jpg'
  },
  {
    name: 'sunflower_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Sunflower_seeds._img_001.jpg'
  },
  {
    name: 'white_navy_beans.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Phaseolus_vulgaris_white_beans%2C_witte_boon.jpg'
  },
  {
    name: 'black_eyed_peas.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Processus_de_pr%C3%A9paration_de_Gnonmlin%2C_s%C3%A9lection_et_triage_du_haricot_09.jpg'
  },
  {
    name: 'fava_beans.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Broad_beans.JPG'
  },
  {
    name: 'red_lentils.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Split_Red_Lentil.jpg'
  },
  {
    name: 'raw_peanuts.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/RECALLED_%E2%80%93_In-shell_and_Shelled_Peanuts_%288103577086%29.jpg'
  },
  {
    name: 'caraway_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Caraway_Seed.jpg'
  },
  {
    name: 'anise_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Anise_Seed.jpg'
  },
  {
    name: 'sesame_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Sesamum_orientale_%281225052080%29.jpg'
  },
  {
    name: 'hibiscus_flowers.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Dried_hibiscus_flowers.jpg'
  }
];

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = url.startsWith('https') ? https.get : http.get;
    
    function makeReq(curUrl) {
      get(curUrl, {
        headers: {
          'User-Agent': 'AlmasaExportApp/1.0 (https://almasa-export.com; dev@almasa-export.com)'
        }
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return makeReq(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to download ${curUrl}: status code ${res.statusCode}`));
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', err => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }
    
    makeReq(url);
  });
}

async function run() {
  const dir = path.join(__dirname, 'assets/images/products');
  for (const item of downloads) {
    const dest = path.join(dir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Saved ${item.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch(err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
    await sleep(2000);
  }
}

run();
