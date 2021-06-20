const yargs = require('yargs');
const clipboardy = require('clipboardy');
const qrcode = require('qrcode-terminal');


const { argv } = yargs
  .option('message', {
    alias: 'm',
  });

console.log('\n');
qrcode.generate(argv.message || clipboardy.readSync());
console.log('\n');
console.log(argv.message);
