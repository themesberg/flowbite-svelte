import * as fs from 'fs';
import {lstat, readdir} from 'node:fs/promises'
import {join} from 'node:path'

const srcLib = '../src/lib'

export const getLines=(fileName, keyword)=> { 
  let outputs =[];
  const file = fs.readFileSync(fileName, { encoding: 'utf-8' });
  let arr = file.split(/\r?\n/);
  arr.forEach((line) => {
    if(line.includes(keyword)){
      outputs.push(line);
    }
  });
  return outputs
}

export async function createFilenames () {
  const deepReadDir = async (dirPath) => await Promise.all(
    (await readdir(dirPath)).map(async (entity) => {
      const path = join(dirPath, entity)
      return (await lstat(path)).isDirectory() ? await deepReadDir(path) : path
    }),
  )
  const files = await deepReadDir(srcLib)
  const all = files.flat(Number.POSITIVE_INFINITY)
  return all
}

export function extractProps (arr) {
  let first, second, third;
  let obj ={}
  let result =[]
  arr.forEach(
    (line) => {
      // could be tab indentation
      let newl = line.replace('\texport let ', '').replace(';', '');
      // or space indentation
      let newline = newl.replace('export let ', '').replace(';', '');
        first = newline.slice(0, newline.indexOf(':'));
        second = newline.slice(newline.indexOf(':') + 1, newline.length);
      // console.log('second', second)
      if (second.includes('=')) {
        second = second.slice(0, second.indexOf('='));
        third = newline.slice(newline.indexOf('=') + 1, newline.length);
      } else {
          third = '-'
      }
      // console.log('third', third)
      let myarr = [first, second, third]
      result.push(myarr)
    }
    
  )
  obj.props=result
  return obj
}

export const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!', fileName);
  });
}