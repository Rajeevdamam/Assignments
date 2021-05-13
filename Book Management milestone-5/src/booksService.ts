import axios from "axios";

const displayAllBooks = async () => {
	const res = await axios.get("http://localhost:4000/api/books");
	return {
		type: "DISPLAY_BOOKS",
		payload: res.data,
		status: localStorage.length > 0,
	};
};

const deleteBooks = async (title: any) => {
	await axios.delete("http://localhost:4000/books/delete/" + title, {
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});
	return { type: "DELETE_BOOK" };
};

const search = async (key: any, value: any) => {
	let res;
	if (key === "author") {
		res = await axios.get(`http://localhost:4000/api/books/by?${key}=${value}`);
		return {
			type: "SEARCH_BY_AUTHOR",
			payload: res.data,
		};
	} else if (key === "title") {
		res = await axios.get(
			`http://localhost:4000/api/books/title?${key}=${value}`
		);
		console.log(res.data);

		return {
			type: "SEARCH_BY_TITLE",
			payload: res.data,
		};
	} else if (key === "price") {
		let splitted = value.split("-");
		res = await axios.get(
			`http://localhost:4000/api/books/priced?${key}=${parseInt(
				splitted[0]
			)}&${key}=${parseInt(splitted[1])}`
		);
		return {
			type: "SEARCH_BY_PRICE",
			payload: res.data,
		};
	}
};

const bookById = async (id: any) => {
	const res = await axios.get("http://localhost:4000/books/" + id);
	return { type: "VIEW_BY_ID", payload: res.data };
};

export { displayAllBooks, deleteBooks, bookById, search };
