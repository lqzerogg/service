function route(handle, pathname) {
	console.log("something wrong");
	if(typeof handle === "funtion") {
		handle[pathname]();
	}else {
		console.log("there is no route for: " + pathname);
	}
	
}
exports.route = route;

