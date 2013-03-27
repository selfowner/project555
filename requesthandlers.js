var exec = require("child_process").exec;

function startt() {
    console.log("Request handler 'startt' was called.");
    var content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
    });

    return content;
}

function start() {
    console.log("Request handler 'start' was called.");
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "start handler";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "upload handler";
}

exports.start = start;
exports.startt = startt;
exports.upload = upload;