const wrapper = require("./wrapper");

function executeCommand() {
    const shell = require("shelljs");
    const args = arguments;
    const command = wrapper.getData(args);

    console.log("Runnging");
    shell.exec(command, function (err, stdout, stderr) {
        if (err) throw err;
        wrapper.getRes(args)(command);
        console.log("Finished");
    });

}

module.exports = wrapper.setPromise(executeCommand);