function route(handle, pathName, request, response) {
	console.log("About to route a request for " + pathName);
	if (typeof handle[pathName] == 'function') {
		handle[pathName](request, response);
	} else {
		console.log("No request handler found for " + pathName);
	}
}


exports.route = route;