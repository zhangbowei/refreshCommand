const checkDate = require("./check");
const getScript = require("./list");
const executeCommand = require("./execute");
const markDate = require("./mark");

const stepArr = [checkDate, getScript, executeCommand, markDate];
const runStep = function(iterator) {
    if (iterator === stepArr.length) return;
    return (data) => stepArr[iterator](data).then(runStep(++iterator));
}

const updateAllConf = function() {
    return runStep(0)();
}

module.exports = updateAllConf;