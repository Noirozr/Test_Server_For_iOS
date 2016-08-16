var http = require("http");
var url = require("url");

function start(route, handle) {
	function OnRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log("Request for "+ pathName + " received.");
		
		route(handle, pathName, request, response);		
	}
	
	http.createServer(OnRequest).listen(8080);
	console.log("Server has started.");
}

exports.start = start;