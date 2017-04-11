const argv = require('yargs').argv;
const shell = require("shelljs");
const wrapper = require("./wrapper");
const record = require("./record");


function checkDate() {
    const args = arguments;
    const nowDate = Date.now();
    const delay = argv.delay ? argv.delay : 1000 * 60 * 60 * 24;
    const originDate = record.readFile(record.datePath);

    if ((nowDate - originDate) > delay) {
        wrapper.getRes(args)();
    } else {
        wrapper.getRej(args)('');
    }
}

module.exports = wrapper.setPromise(checkDate);