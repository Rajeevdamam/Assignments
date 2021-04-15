import * as mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	isbn: {
		type: String,
	},
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	pages: {
		type: String,
	},
	price: {
		type: String,
	},
	rating: {
		type: String,
	},
	votes: {
		type: String,
	},
	description: {
		type: String,
	},
	tags: {
		type: Array,
	},
	series: {
		type: String,
	},
	seriesIndex: {
		type: String,
	},
	releaseDate: {
		type: String,
	},
	cover: {
		type: String,
	},
});

const books = mongoose.model("books", bookSchema);

export { books };
