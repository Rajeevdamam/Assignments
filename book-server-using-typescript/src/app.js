"use strict";
exports.__esModule = true;
var http = require("http");
var operations_1 = require("./operations");
var port = 5000;
var hostname = "127.0.0.1";
var file = require("fs");
var server = http.createServer(function (request, response) {
    var _a;
    var queryString = (_a = request.url) === null || _a === void 0 ? void 0 : _a.split("?")[1];
    var reqURL = new URLSearchParams(queryString);
    response.writeHead(200, { "content-type": "text/json" });
    file.readFile("../db.json", function (err, data) {
        var _a;
        var parseUrl = request.url.split("/");
        if (request.url === "/") {
            return operations_1.homePageHandler(request, response);
        }
        else if (request.url === "/books") {
            //call method to send all books
            if (request.method === "GET") {
                return operations_1.bookDetailsPageHandler(request, response, data);
            }
            else if (request.method === "POST") {
                return operations_1.postBookDetailsHandler(request, response, data);
            }
        }
        else if ((_a = request.url) === null || _a === void 0 ? void 0 : _a.match(/\/books\/[0-9]+/)) {
            if (request.method === "GET") {
                return operations_1.bookByIdHandler(request, response, data);
            }
            else if (request.method === "PUT") {
                return operations_1.putRequestHandler(request, response, data);
            }
            else if (request.method === "DELETE") {
                return operations_1.deleteBook(request, response, data);
            }
            else {
                return response.end("Id does not exist");
            }
        }
        else if (reqURL.has("title") && request.method === "GET") {
            var title = reqURL.get("title");
            return operations_1.searchBytitle(request, response, data, title);
        }
        else if (reqURL.has("author") && request.method === "GET") {
            var author = reqURL.get("author");
            return operations_1.searchByAuthor(request, response, data, author);
        }
        else if (reqURL.has("price") && request.method === "GET") {
            var priceRange = reqURL.getAll("price");
            console.log(priceRange);
            return operations_1.searchByPrice(request, response, data, priceRange);
        }
        else {
            response.end("This page doesn't exist");
        }
    });
});
server.on("error", function (err) {
    console.log(err.message);
});
server.listen(port, hostname, function () {
    console.log("Server running");
});
