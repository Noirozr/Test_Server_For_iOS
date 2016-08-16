
function deviceInfo(request, response) {
	console.log("deviceInfo was called");
	response.writeHead(200, {"Content-Type": "application/json"});
	var data = {
		systemVersion: '9',
		deviceModel: 'iPhone 6s Plus',
		batteryLife: '90'
	};
	response.end(JSON.stringify(data) + "\n");
}

function nodeName(request, response) {
	console.log("nodeName was called");
	var json_body = '';
	request.on(
		'readable',
		function () {
			var data = request.read();
			if (data) {
				if (typeof data == 'string') {
					json_body += data;
				} else if (typeof data == 'object' && data instanceof Buffer) {
					json_body += data.toString('utf8');
				}
			} else {
				console.log("NO DATA");
			}
		}
	);
	
	request.on(
		'end',
		function () {
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end(JSON.stringify(json_body) + "\n");
		}
	);
	
}

exports.deviceInfo = deviceInfo;
exports.nodeName = nodeName;