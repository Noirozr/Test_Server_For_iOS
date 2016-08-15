var http = require("http");

function start() {
	function OnRequest(request, response) {
		console.log("Request received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("This is A json server to test POST and GET methods.");
		response.end();
	}
	
	http.createServer(OnRequest).listen(8080);
	console.log("Server has started.");
}

exports.start = start;