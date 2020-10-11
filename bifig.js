const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r1.on('line', () => console.log(line) );
