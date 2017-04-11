const shell = require("shelljs");
const record = require("./record");
const wrapper = require("./wrapper");

function getScript() {
    const args = arguments;
    const writeList = [
        'find',
        record.scriptLocation,
        '-type l',
        '>',
        record.scriptPath
    ].join(' ');

    shell.exec(writeList, function (err, stdout, stderr) {
        if (err) throw err;

        const rawData = record.readFile(record.scriptPath).split('\n');
        wrapper.getRes(args)(rawData);
    });
}

module.exports = wrapper.setPromise(getScript);