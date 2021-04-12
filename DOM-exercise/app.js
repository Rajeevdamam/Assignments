const http = require("http");
const port = 8000;
const file = require("fs");

function requestAndResponse(req, res) {
	console.log(req.url);
	res.writeHead(200, { "content-type": "text/html", charset: "utf-8" });
	file.readFile("first.html", function (err, data) {
		if (err) {
			console.log(err);
			return res.end("<h1 style='color:red;'>Error!</h1>");
		}
		return res.end(data);
	});
}

const server = http.createServer(requestAndResponse);

server.listen(port, function (err) {
	if (err) {
		console.log("error", err);
		return;
	} else {
		console.log("server is running on port", port);
	}
});
