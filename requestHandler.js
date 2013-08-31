function start() {
	console.log("request for start handler");
}

function preload() {
	console.log("request for preload handler");
}

export.start = start;
export.upload = upload;