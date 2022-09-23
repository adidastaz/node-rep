/*const names = require('./1node');
console.log(names);

const sayHi = require('./2node');
sayHi(names.john);
sayHi(names.mario);

const data = require('./3node');
console.log(data);
console.log(data.singlePerson);

require('./4node');

const os = require('os'); // build in module

const user = os.userInfo();

console.log(user);

console.log('system runtime is ' + os.uptime() + ' seconds');

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
} // info about the system

console.log(currentOs);*/

const path = require('path'); // build in module

console.log(path.sep); // separator

const filePath = path.join('/NODEJS', '1node.js');
console.log(filePath); // file path

const base = path.basename(filePath);
console.log(base); // base file (the last one we want to reach)

const absolute = path.resolve(__dirname, '/NODEJS', '1node.js');
console.log(absolute); // absolute path

/*const fs = require('fs');
const read = fs.readFileSync('./content/first.txt', 'utf8');
console.log(read);*/ // read a file , now we have another way below!!

const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
/*const read = readFileSync('./content/first.txt', 'utf8');
console.log(read);*/ // reading file content

/*const num = 100;
writeFileSync('./content/createFileFromHere.txt', 'Hello this is the content in the file ' + num);*/ // create a file and its content

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});

// Very Important: async is better for use because it runs multiple tasks together , while sync finish every task before starting the next one which is slow.........

// Packages usage that we install

// npm i pacakage (This is how you install packages in terminal)

const lodash = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);
console.log("Hello");




