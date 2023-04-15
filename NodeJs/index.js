const fs = require('fs');

fs.readFile('./dave/starter.txt','utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
}) 

fs.writeFile(path.join(__dirname, 'Files','reply.txt'),'nice',(err) => {
    if(err) throw err;
    console.log('write complete');
}) 

console.log('hello')

process.on('uncaughtException', err => {
    console.error('there was an uncaught error');
    process.exit(1);

})