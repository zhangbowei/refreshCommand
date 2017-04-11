const shell = require("shelljs");
const record = require("./record");
const wrapper = require("./wrapper");

function executeCommand() {
    function process(item) {
        return item;
    }

    const args = arguments;
    const scriptArr = wrapper.getData(args);
    const commandArr = scriptArr.reduce(function(prev, item) {
        return item ? prev.concat([ process(item)]) : prev;
    }, []);

    if(commandArr.length === 0) wrapper.getRes(args)();

    commandArr.forEach(function(item, index) {
       shell.exec(item, function (err, stdout, stderr) {
        if (err) throw err;
        if (index === commandArr.length - 1) {
            wrapper.getRes(args)();
        }
        console.log([item.split(record.scriptLocation).join(''), "Finished"].join(' '));
       });
    });

}

module.exports = wrapper.setPromise(executeCommand);