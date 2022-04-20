/**
 * This script will create a json file for each component. First it will remove all files in the src/props directory. Then it will read each file in the lib directory and extract the props from the file and write in the `src/props` directory.
 * 
 * Run this script from the root of the project.
 * node createProps.js
 * 
 */

import * as fs from 'fs';
import path from 'path';
import { getLines, extractProps, writeToFile, createFilenames } from './getProps.js';

const exportLet = 'export let'

// remove all files in the folder
const directory = '../src/routes/props/';
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
    console.log('file deleted: ', file)
  }
});

const allFiles = await createFilenames()
// console.log( allFiles)
allFiles.forEach(myfile => {
  // create a file name
  let name = path.parse(myfile).name
  let outputfile = directory + name + '.json'
  // console.log('name: ', name)
  let result = getLines(myfile, exportLet);
  // console.log('result: ', result)
  if (result.length > 0) {
    // console.log('result: ', result)
    let resultItem = extractProps(result);
    // console.log('resultItem: ', resultItem)
    writeToFile(outputfile, JSON.stringify(resultItem))
  }
})
