var http = require("http");

function handle_incoming_request(request, response) {
	console.log("INCOMING REQUEST: " + request.method + " " + request.url);
	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(JSON.stringify({error: null}) + "\n");
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);
