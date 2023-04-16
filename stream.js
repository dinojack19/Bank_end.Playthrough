const fs = require('fs');

const rs = fs.createReadStream('./Dave/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./Dave/new-lorem.txt')

rs.pipe(ws);