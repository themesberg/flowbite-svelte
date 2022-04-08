/**
 * This create a json file with all the props of the components.
 * Run this script in the root of the project.
 * 
 * The script will read the files.json file and get the files to be processed. Then it will get the lines of the file that contains the keyword 'export let'.
 * Then it will extract the props from the lines.
 * Finally it will write the json file to the destination folder of the file.
 * example:
 * node createProps.js
 * 
 */

import * as fs from 'fs';
import path from 'path';
import { getLines, extractProps, writeToFile, createFilenames } from './getProps.js';


// remove all files in the folder
const directory = '../src/routes/props';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
    console.log('file deleted: ', file)
  }
});

// create file names
let allFiles = await createFilenames()
// console.log( allFiles)
allFiles.forEach(myfile => {
  let name = path.parse(myfile).name
  let outputfile = '../src/routes/props/' + name + '.json'
  // console.log('name: ', name)
  let result = getLines(myfile, 'export let');
  // console.log('result: ', result)
  if (result.length > 0) {
    // console.log('result: ', result)
    let resultItem = extractProps(result);
    // console.log('resultItem: ', resultItem)
    writeToFile(outputfile, JSON.stringify(resultItem))
  }
})
