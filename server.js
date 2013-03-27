var http = require("http");
    url = require("url");


function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request received. Path - " + pathname + ".");
        var content = route(handle, pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("Server has started!");
}
exports.start = start;