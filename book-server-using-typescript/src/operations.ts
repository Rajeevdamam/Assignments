import * as file from "fs";

let isAlpha = function (ch: any) {
	return (
		typeof ch === "string" &&
		ch.length === 1 &&
		((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
	);
};

const homePageHandler = (request: any, response: any) => {
	response.end("This is Home page");
};

const bookDetailsPageHandler = (request: any, response: any, data: any) => {
	response.end(data);
};

const postBookDetailsHandler = (request: any, response: any, details: any) => {
	let body = "";
	request.on("data", (chunk: any) => {
		body += chunk.toString();
	});

	request.on("end", () => {
		let result = JSON.parse(details);
		let id = result.length + 1;

		let data: any = JSON.parse(body);
		data["id"] = id;

		response.writeHead(201, { "Content-Type": "application/json" });
		result.push(data);

		result = JSON.stringify(result);
		console.log(typeof result);
		file.writeFileSync("./db.json", result);
		response.end(result);
	});
};

const bookByIdHandler = (request: any, response: any, data: any) => {
	let parseUrl = request.url.split("/");
	if (!isAlpha(parseUrl[parseUrl.length - 1])) {
		parseUrl = parseUrl[parseUrl.length - 1];
		let result = JSON.parse(data);
		result = result.find(function (obj: any) {
			return obj.id === parseInt(parseUrl);
		});
		result = JSON.stringify(result);
		response.end(result);
	} else {
		return errorHandler(request, response);
	}
};

const errorHandler = (request: any, response: any) => {
	response.end("This page doesn't exist");
};

const deleteBook = (request: any, response: any, data: any) => {
	let parseUrl = request.url.split("/");
	if (!isAlpha(parseUrl[parseUrl.length - 1])) {
		parseUrl = parseUrl[parseUrl.length - 1];
		let result = JSON.parse(data);
		// result = JSON.stringify(result.books[parseInt(parseUrl) - 1]);
		console.log("reslut", result);
		result = result.filter(function (obj: any) {
			return obj.id !== parseInt(parseUrl);
		});
		result = JSON.stringify(result);
		file.writeFileSync("../db.json", result);
		response.end(result);
	} else {
		return errorHandler(request, response);
	}
};

const putRequestHandler = (request: any, response: any, data: any) => {
	let parseUrl = request.url.split("/");
	let body: string = "";
	if (!isAlpha(parseUrl[parseUrl.length - 1])) {
		parseUrl = parseUrl[parseUrl.length - 1];
		request.on("data", (chunk: any) => {
			body += chunk.toString();
		});
		request.on("end", () => {
			let result = JSON.parse(data);
			const found = result.find(function (obj: any) {
				return obj.id === parseInt(parseUrl);
			});
			const {
				isbn,
				title,
				author,
				pages,
				price,
				rating,
				votes,
				description,
				tags,
				series,
				seriesIndex,
				releaseDate,
				cover,
			} = JSON.parse(body);

			let updated: any = {
				id: found.id,
				isbn,
				title,
				author,
				pages,
				price,
				rating,
				votes,
				description,
				tags,
				series,
				seriesIndex,
				releaseDate,
				cover,
			};

			for (let i = 0; i < result.length; i++) {
				if (result[i].id === updated.id) {
					result[i] = updated;
				}
			}
			result = JSON.stringify(result);
			file.writeFileSync("../db.json", result);
			response.end(result);
		});
	} else {
		return errorHandler(request, response);
	}
};

const searchBytitle = (request: any, response: any, data: any, title: any) => {
	title = title.toLowerCase();
	let result = [];
	data = JSON.parse(data);
	for (let book of data) {
		if (book.title.toLowerCase().indexOf(title) !== -1) {
			result.push(book);
		}
	}
	response.end(JSON.stringify(result));
};

const searchByAuthor = (
	request: any,
	response: any,
	data: any,
	author: any
) => {
	author = author.toLowerCase();
	let result = [];
	data = JSON.parse(data);
	for (let book of data) {
		if (book["author"].toLowerCase().indexOf(author) >= 0) {
			result.push(book);
		}
	}
	response.end(JSON.stringify(result));
};

const searchByPrice = (
	request: any,
	response: any,
	data: any,
	price: string[]
) => {
	let result = [];
	data = JSON.parse(data);
	for (let book of data) {
		if (book.price >= price[0] && book.price <= price[1]) {
			result.push(book);
		}
	}
	response.end(JSON.stringify(result));
};

export {
	homePageHandler,
	bookDetailsPageHandler,
	postBookDetailsHandler,
	bookByIdHandler,
	deleteBook,
	putRequestHandler,
	searchBytitle,
	searchByAuthor,
	searchByPrice,
};
