const argv = require('yargs').argv;
const shell = require("shelljs");
const wrapper = require("./wrapper");


function checkCommand() {
    const args = arguments;
    const command = argv.command ? argv.command : null;

    if (command !== null) {
        console.log("command pass");
        wrapper.getRes(args)(command);
    } else {
        console.log("command no pass");
        wrapper.getRej(args)('');
    }
}

module.exports = wrapper.setPromise(checkCommand);