import * as http from "http";
import {
	homePageHandler,
	bookDetailsPageHandler,
	postBookDetailsHandler,
	bookByIdHandler,
	deleteBook,
	putRequestHandler,
	searchBytitle,
	searchByAuthor,
	searchByPrice,
} from "./operations";

const port = 5000;
const hostname = "127.0.0.1";

import * as file from "fs";

const server: any = http.createServer((request: any, response) => {
	const queryString = request.url?.split("?")[1];
	const reqURL = new URLSearchParams(queryString);
	response.writeHead(200, { "content-type": "text/json" });
	file.readFile("../db.json", function (err, data) {
		let parseUrl = request.url.split("/");

		if (request.url === "/") {
			return homePageHandler(request, response);
		} else if (request.url === "/books") {
			//call method to send all books
			if (request.method === "GET") {
				return bookDetailsPageHandler(request, response, data);
			} else if (request.method === "POST") {
				return postBookDetailsHandler(request, response, data);
			}
		} else if (request.url?.match(/\/books\/[0-9]+/)) {
			if (request.method === "GET") {
				return bookByIdHandler(request, response, data);
			} else if (request.method === "PUT") {
				return putRequestHandler(request, response, data);
			} else if (request.method === "DELETE") {
				return deleteBook(request, response, data);
			} else {
				return response.end("Id does not exist");
			}
		} else if (reqURL.has("title") && request.method === "GET") {
			let title = reqURL.get("title");
			return searchBytitle(request, response, data, title);
		} else if (reqURL.has("author") && request.method === "GET") {
			let author = reqURL.get("author");
			return searchByAuthor(request, response, data, author);
		} else if (reqURL.has("price") && request.method === "GET") {
			let priceRange = reqURL.getAll("price");
			console.log(priceRange);
			return searchByPrice(request, response, data, priceRange);
		} else {
			response.end("This page doesn't exist");
		}
	});
});

server.on("error", (err: any) => {
	console.log(err.message);
});

server.listen(port, hostname, () => {
	console.log(`Server running`);
});
