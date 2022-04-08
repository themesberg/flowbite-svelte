// import path from 'path';
// import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

// const directoryPath = path.join(__dirname, '../src/lib');



import {lstat, readdir} from 'node:fs/promises'
import {join} from 'node:path'

const deepReadDir = async (dirPath) => await Promise.all(
  (await readdir(dirPath)).map(async (entity) => {
    const path = join(dirPath, entity)
    return (await lstat(path)).isDirectory() ? await deepReadDir(path) : path
  }),
)

const files = await deepReadDir('../src/lib')
const all = files.flat(Number.POSITIVE_INFINITY)


// console.log(all)

all.forEach(item => {
  console.log(item)
})