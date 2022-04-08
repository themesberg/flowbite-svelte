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
import { getLines, extractProps, writeToFile } from './getProps.js';
// import myfile from './files.json'
let myfile = './files.json'
const file = fs.readFileSync(myfile, { encoding: 'utf-8' });
const items =JSON.parse(file).files
// console.log( items)
items.forEach(item => {
  console.log('filename: ', item[0])
  console.log('write to: ', item[1])
  let result = getLines(item[0], 'export let');
  let resultItem = extractProps(result);
  writeToFile(item[1], JSON.stringify(resultItem))
})
