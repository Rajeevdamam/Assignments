"use strict";
exports.__esModule = true;
exports.searchByPrice = exports.searchByAuthor = exports.searchBytitle = exports.putRequestHandler = exports.deleteBook = exports.bookByIdHandler = exports.postBookDetailsHandler = exports.bookDetailsPageHandler = exports.homePageHandler = void 0;
var file = require("fs");
var isAlpha = function (ch) {
    return (typeof ch === "string" &&
        ch.length === 1 &&
        ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")));
};
var homePageHandler = function (request, response) {
    response.end("This is Home page");
};
exports.homePageHandler = homePageHandler;
var bookDetailsPageHandler = function (request, response, data) {
    response.end(data);
};
exports.bookDetailsPageHandler = bookDetailsPageHandler;
var postBookDetailsHandler = function (request, response, details) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk.toString();
    });
    request.on("end", function () {
        var result = JSON.parse(details);
        var id = result.length + 1;
        result["id"] = id;
        var data = JSON.parse(body);
        data.id = id;
        // const {
        // 	isbn,
        // 	title,
        // 	author,
        // 	pages,
        // 	price,
        // 	rating,
        // 	votes,
        // 	description,
        // 	tags,
        // 	series,
        // 	seriesIndex,
        // 	releaseDate,
        // 	cover,
        // } = JSON.parse(body);
        // const data = {
        // 	id: id,
        // 	isbn,
        // 	title,
        // 	author,
        // 	pages,
        // 	price,
        // 	rating,
        // 	votes,
        // 	description,
        // 	tags,
        // 	series,
        // 	seriesIndex,
        // 	releaseDate,
        // 	cover,
        // };
        response.writeHead(201, { "Content-Type": "application/json" });
        result.push(data);
        result = JSON.stringify(result);
        console.log(typeof result);
        file.writeFileSync("./db.json", result);
        response.end(result);
    });
};
exports.postBookDetailsHandler = postBookDetailsHandler;
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
exports.bookByIdHandler = bookByIdHandler;
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
        file.writeFileSync("../db.json", result);
        response.end(result);
    }
    else {
        return errorHandler(request, response);
    }
};
exports.deleteBook = deleteBook;
var putRequestHandler = function (request, response, data) {
    var parseUrl = request.url.split("/");
    var body = "";
    if (!isAlpha(parseUrl[parseUrl.length - 1])) {
        parseUrl = parseUrl[parseUrl.length - 1];
        request.on("data", function (chunk) {
            body += chunk.toString();
        });
        request.on("end", function () {
            var result = JSON.parse(data);
            var found = result.find(function (obj) {
                return obj.id === parseInt(parseUrl);
            });
            var _a = JSON.parse(body), isbn = _a.isbn, title = _a.title, author = _a.author, pages = _a.pages, price = _a.price, rating = _a.rating, votes = _a.votes, description = _a.description, tags = _a.tags, series = _a.series, seriesIndex = _a.seriesIndex, releaseDate = _a.releaseDate, cover = _a.cover;
            var updated = {
                id: found.id,
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
                cover: cover
            };
            for (var i = 0; i < result.length; i++) {
                if (result[i].id === updated.id) {
                    result[i] = updated;
                }
            }
            result = JSON.stringify(result);
            file.writeFileSync("../db.json", result);
            response.end(result);
        });
    }
    else {
        return errorHandler(request, response);
    }
};
exports.putRequestHandler = putRequestHandler;
var searchBytitle = function (request, response, data, title) {
    title = title.toLowerCase();
    var result = [];
    data = JSON.parse(data);
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var book = data_1[_i];
        if (book.title.toLowerCase().indexOf(title) !== -1) {
            result.push(book);
        }
    }
    response.end(JSON.stringify(result));
};
exports.searchBytitle = searchBytitle;
var searchByAuthor = function (request, response, data, author) {
    author = author.toLowerCase();
    var result = [];
    data = JSON.parse(data);
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var book = data_2[_i];
        if (book["author"].toLowerCase().indexOf(author) >= 0) {
            result.push(book);
        }
    }
    response.end(JSON.stringify(result));
};
exports.searchByAuthor = searchByAuthor;
var searchByPrice = function (request, response, data, price) {
    var result = [];
    data = JSON.parse(data);
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var book = data_3[_i];
        if (book.price >= price[0] && book.price <= price[1]) {
            result.push(book);
        }
    }
    response.end(JSON.stringify(result));
};
exports.searchByPrice = searchByPrice;
