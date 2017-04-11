const wrapper = require("./wrapper");
const record = require("./record");


function markDate() {
    const args = arguments;
    const nowDate = Date.now();

    record.writeFile(record.datePath, nowDate);
    wrapper.getRes(args)('mark now Date Finished');
}

module.exports = wrapper.setPromise(markDate);