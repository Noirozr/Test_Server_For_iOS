var server = require("./JSONServer");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {}
handle["/"] = requestHandlers.start;
handle["/deviceInfo"] = requestHandlers.deviceInfo;
handle["/nodeName"] = requestHandlers.nodeName;


server.start(router.route, handle);
