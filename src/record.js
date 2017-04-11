const argv = require('yargs').argv;
const fs = require('fs');

const rootLocation = argv.path ? argv.path : [__dirname, '/../data'].join('');
const dateLocation = [rootLocation].join('');
const scriptLocation = [rootLocation].join('');

const datePath = [dateLocation, '/date'].join('');
const scriptPath = [scriptLocation, '/list'].join('');

function readFile(path) {
    return fs.readFileSync(path, {flag: 'a+', encoding: 'utf8'});
}

function writeFile(path, date) {
    return fs.writeFileSync(path, date);
}


module.exports = {
    readFile,
    writeFile,
    scriptLocation,
    scriptPath,
    datePath
}
