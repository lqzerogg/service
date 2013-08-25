var http = require("http"),
	url = require("url");
function start(route) {
	function onRequest(request, response) {		
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved");
		route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello node!!!");
		response.end();
		process.exit();
	};
	http.createServer(onRequest).listen(8888);
	console.log("started");
};
//start();
exports.start = start;