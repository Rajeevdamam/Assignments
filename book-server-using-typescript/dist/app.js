"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var port = 5000;
var hostname = "127.0.0.1";
var file = __importStar(require("fs"));
var isAlpha = function (ch) {
    return (typeof ch === "string" &&
        ch.length === 1 &&
        ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")));
};
var homePageHandler = function (request, response) {
    response.end("This is Home page");
};
var bookDetailsPageHandler = function (request, response, data) {
    response.end(data);
};
var postBookDetailsHandler = function (request, response, details) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk.toString();
    });
    request.on("end", function () {
        var result = JSON.parse(details);
        var id = result.length + 1;
        var _a = JSON.parse(body), isbn = _a.isbn, title = _a.title, author = _a.author, pages = _a.pages, price = _a.price, rating = _a.rating, votes = _a.votes, description = _a.description, tags = _a.tags, series = _a.series, seriesIndex = _a.seriesIndex, releaseDate = _a.releaseDate, cover = _a.cover;
        var data = {
            id: id,
            isbn: isbn,
            title: title,
            author: author,
            pages: pages,
            price: price,
            rating: rating,
            votes: votes,
            description: description,
            tags: tags,
            series: series,
            seriesIndex: seriesIndex,
            releaseDate: releaseDate,
            cover: cover,
        };
        response.writeHead(201, { "Content-Type": "application/json" });
        result.push(data);
        result = JSON.stringify(result);
        console.log(typeof result);
        file.writeFileSync("./db.json", result);
        response.end(result);
    });
};
var bookByIdHandler = function (request, response, data) {
    var parseUrl = request.url.split("/");
    if (!isAlpha(parseUrl[parseUrl.length - 1])) {
        parseUrl = parseUrl[parseUrl.length - 1];
        var result = JSON.parse(data);
        result = result.find(function (obj) {
            return obj.id === parseInt(parseUrl);
        });
        result = JSON.stringify(result);
        response.end(result);
    }
    else {
        return errorHandler(request, response);
    }
};
var errorHandler = function (request, response) {
    response.end("This page doesn't exist");
};
var deleteBook = function (request, response, data) {
    var parseUrl = request.url.split("/");
    if (!isAlpha(parseUrl[parseUrl.length - 1])) {
        parseUrl = parseUrl[parseUrl.length - 1];
        var result = JSON.parse(data);
        // result = JSON.stringify(result.books[parseInt(parseUrl) - 1]);
        console.log("reslut", result);
        result = result.filter(function (obj) {
            return obj.id !== parseInt(parseUrl);
        });
        result = JSON.stringify(result);
        file.writeFileSync("./db.json", result);
        response.end(result);
    }
    else {
        return errorHandler(request, response);
    }
};
var putRequestHandler = function (request, response, data) {
    var parseUrl = request.url.split("/");
    var body;
    if (!isAlpha(parseUrl[parseUrl.length - 1])) {
        parseUrl = parseUrl[parseUrl.length - 1];
        request.on("data", function (chunk) {
            body += chunk.toString();
        });
        request.on("end", function () {
            var result = JSON.parse(data);
            result = result.find(function (obj) {
                return obj.id === parseInt(parseUrl);
            });
            result = body;
            console.log(result);
        });
        // result = JSON.stringify(result);
        // response.end(result);
    }
    // else {
    // 	return errorHandler(request, response);
    // }
};
var server = http.createServer(function (request, response) {
    var _a;
    var queryString = (_a = request.url) === null || _a === void 0 ? void 0 : _a.split("?")[1];
    var reqURL = new URLSearchParams(queryString);
    response.writeHead(200, { "content-type": "text/json" });
    file.readFile("../db.json", function (err, data) {
        var _a;
        if (request.url === "/") {
            return homePageHandler(request, response);
        }
        else if (request.url === "/books") {
            //call method to send all books
            if (request.method == "GET") {
                return bookDetailsPageHandler(request, response, data);
            }
            else if (request.method == "POST") {
                return postBookDetailsHandler(request, response, data);
            }
            else if (request.method == "DELETE") {
                return deleteBook(request, response, data);
            }
        }
        else if (request.url &&
            request.url.length > 1 &&
            request.url.indexOf("/books") === 0 &&
            request.method == "GET") {
            return bookByIdHandler(request, response, data);
            // Search the book by particular Id
        }
        else if (reqURL.has("q") && request.method == "GET") {
            var simpleText = reqURL.get("q");
        }
        else if (reqURL.has("author") && request.method == "GET") {
            var author = reqURL.get("author");
        }
        else if (reqURL.has("price") && request.method == "GET") {
            var priceRange = reqURL.getAll("price");
        }
        else if (request.url === "/books" && request.method == "POST") {
        }
        else if (((_a = request.url) === null || _a === void 0 ? void 0 : _a.match(/\/books\/[0-9]+/)) &&
            request.method == "PUT") {
        }
        else {
            response.end("Url not found");
        }
    });
});
server.on("error", function (err) {
    console.log(err.message);
});
server.listen(port, hostname, function () {
    console.log("Server running");
});
