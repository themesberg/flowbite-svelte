import * as fs from 'fs';

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

export function extractProps (arr) {
  let first, second, third;
  let obj ={}
  let result =[]
  arr.forEach(
    (line) => {
      let newline = line.replace('\texport let ', '').replace(';', '')
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
  // [["duration"," number "," 0.2"],["easing"," string "," 'ease'"],["id"," number "," undefined"]]
  // {"props": [
  //   [ "tip", " string", "-" ],
  //   [ "top", " boolean ", " false" ],
  //   [ "right", " boolean ", " false" ],
  //   [ "bottom", " boolean ", " false" ],
  //   [ "left", " boolean ", " false" ],
  //   [ "active", " boolean ", " false" ]
  // ]
  // }
  return obj
}

export const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}