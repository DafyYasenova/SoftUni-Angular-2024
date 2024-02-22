var HTTPRequest = /** @class */ (function () {
    function HTTPRequest(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return HTTPRequest;
}());
;
var httpData = new HTTPRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(httpData);
