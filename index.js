const fsPromises = require('fs').promises;
const path = require('path');

const FileOps = async() => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'dave','starter.txt'), 'utf8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'dave','starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'dave','promiswrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'dave','promiswrite.txt'), 'good')
        await fsPromises.rename(path.join(__dirname, 'dave','promiswrite.txt'), path.join(__dirname, 'dave','complete.txt'))
        const new_data = await fsPromises.readFile(path.join(__dirname, 'dave','complete.txt'), 'utf8')
        console.log(new_data);
    } catch(err){
        console.error(err);
    }

}
    
FileOps();


















