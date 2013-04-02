var querystring = require('querystring'),
    fs = require("fs");

//get postform from file
fs.readFile('C:\\Users\\W8\\Dropbox\\nodejs\\project555\\requestweb.js',  function (error, data) {
       if (error) {
           console.log(error);
        } else {
            buf = new Buffer(256);
            len = buf.write(data.toString(), 0);
        }
    });

function start(response, postData) {
        console.log("Request handler 'start' was called.");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body>');
        response.write(buf.toString('utf8', 0, len));
        console.log(len + " bytes: " + buf.toString('utf8', 0, len));
        response.write('</body></html>');
        response.end();
    }

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " +querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;
