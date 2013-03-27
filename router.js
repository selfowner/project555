function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function')
    {
        handle[pathname]();
        console.log("Request handler for " + pathname + " found :)");
        return handle[pathname]();
        console.log("Request handler for " + pathname + "returned");
    }
    else
    {
        console.log("No request handler found for " + pathname);
        return "404 :("
    }
}

exports.route = route;