'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function makeInputVerifier(minimum, maximum) {
  // write your code here
  var min=minimum;
  var max=maximum;

  return function verify(values){
    if(values < min)return "Input is less than minimum value";
    if(values >= min && values <= max)return "Input is in range";
    return "Input is more than maximum value";
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const min = parseInt(readLine().trim());
  const max = parseInt(readLine().trim());
  const verify = makeInputVerifier(min, max);
    
  const input = parseInt(readLine().trim());
  const result = verify(input);

  ws.write(`${result}\n`);
  ws.end();
}
