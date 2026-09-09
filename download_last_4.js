const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const downloads = [
  {
    name: 'fava_beans.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Fava_Beans_Dried.JPG'
  },
  {
    name: 'black_eyed_peas.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Fagioli_con_l%27occhio.jpg'
  },
  {
    name: 'sesame_seeds.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Sesame-Seeds.jpg'
  },
  {
    name: 'raw_peanuts.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/A_close_up_shot_of_peanut.JPG'
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
