const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const downloads = [
  {
    name: 'white_pumpkin_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pumpkin_Seeds_macro_1.jpg'
  },
  {
    name: 'super_melon_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/%28%C3%81G%29_C._lanatus-seeds-1.jpg'
  },
  {
    name: 'black_eyed_peas.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Processus_de_pr%C3%A9paration_de_Gnonmlin%2C_s%C3%A9lection_et_triage_du_haricot_09.jpg/1280px-Processus_de_pr%C3%A9paration_de_Gnonmlin%2C_s%C3%A9lection_et_triage_du_haricot_09.jpg'
  },
  {
    name: 'fava_beans.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Vicia_faba_seeds_20101107.jpg'
  },
  {
    name: 'raw_peanuts.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Arachis_hypogaea_-_Peanuts_in_shell.jpg'
  },
  {
    name: 'caraway_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Km%C3%ADn_cel%C3%BD.jpg'
  },
  {
    name: 'anise_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Aniseeds.jpg'
  },
  {
    name: 'hibiscus_flowers.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hibiscus_sabdariffa_dried.jpg'
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
