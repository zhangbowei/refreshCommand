const checkCommand = require("./check");
const executeCommand = require("./execute");

const stepArr = [checkCommand, executeCommand];
const runStep = function(iterator) {
    if (iterator === stepArr.length) iterator = 1;
    return (data) => stepArr[iterator](data).then(runStep(++iterator));
}

const updateAllConf = function() {
    return runStep(0)().catch( (err) => console.log(err));
}

module.exports = updateAllConf;