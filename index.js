var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");
var handle = {
	"/": requestHandler.start,
	"/start": requestHandler.start,
	"/preload": requestHandler.preload
}
server.start(router.route, handle);