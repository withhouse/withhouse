const crypto = require('crypto');

function hash256(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}


const argc = process.argv.length;
if (argc > 2) {
 const key=hash256(process.argv[2]);
  console.log(key);
}
