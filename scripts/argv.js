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

// let item;
// let file = '../src/lib/accordions/AccordionDefault.svelte';
// let result = getLines(file, 'export let');
// item = extractProps(result);

// console.log(item)

// let writeTo = 'AccordionDefault.json'
// writeToFile(writeTo, JSON.stringify(item))
