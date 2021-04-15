import express from "express";
import { connectToDB } from "./connection_to_db";
import { books } from "./schema";

const app = express();

app.use(express.json());

const port = 6000;

app.get("/", (request: any, response: any) => {
	response.send("Home page");
});

app.get("/books", async (request: any, response: any) => {
	try {
		let result;
		const param = Object.keys(request.query);
		if (param[0] === "author") {
			return getByAuthor(request, response, request.query.author);
		} else if (param[0] === "title") {
			return getByTitle(request, response, request.query.title);
		} else if (param[0] === "price") {
			return searchByPrice(request, response, request.query.price);
		} else {
			result = await books.find();
			response.send(result);
		}
	} catch (err) {
		console.log(err);
	}
});

app.get("/books/:id", async (request: any, response: any) => {
	try {
		const result = await books.findById(request.params["id"]);
		response.send(result);
	} catch (err) {
		console.log(err);
	}
});

app.put("/books/:id", async (request: any, response: any) => {
	try {
		const result = await books.updateOne(
			{ _id: request.params["id"] },
			{ $set: request.body }
		);
		response.end(JSON.stringify(result));
	} catch (err) {
		console.log(err);
	}
});

app.delete("/books/:id", async (request: any, response: any) => {
	try {
		const allBooks = await books.deleteOne({ _id: request.params["id"] });
		response.send(allBooks);
	} catch (err) {
		console.log(err);
	}
});

async function getByAuthor(request: any, response: any, author: any) {
	try {
		author = eval(`/${author}/i`);
		const result = await books.find({ author: author });
		response.send(result);
	} catch (err) {
		console.log(err);
	}
}

async function getByTitle(request: any, response: any, title: any) {
	try {
		title = eval(`/${title}/i`);
		const result = await books.find({ title: title });
		response.send(result);
	} catch (err) {
		console.log(err);
	}
}

app.post("/books", async (request: any, response: any) => {
	try {
		const data = request.body;
		let result = await books.create(data);
		response.send(result);
	} catch (err) {
		console.log(err);
	}
});

const searchByPrice = async (request: any, response: any, price: string[]) => {
	try {
		const result = await books.find({
			price: { $gte: price[0], $lte: price[1] },
		});
		response.send(result);
	} catch (err) {
		console.log(err);
	}
};

const server = app.listen(port, async () => {
	console.log(`Server running on port ${port}`);
	await connectToDB();
});

server.on("error", (error: Error) => console.log("error", error.message));
