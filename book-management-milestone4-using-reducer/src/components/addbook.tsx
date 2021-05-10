import React, { Component, useState, useContext } from "react";
import Button from "./Button";
import InputTextComponent from "./inputTextComponent";
import ButtonWithFunc from "./ButtonWithFunc";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const AddBook = (props: Props) => {
	let [data, setData] = useState({
		title: "",
		author: "",
		price: "",
		cover: "",
		rating: "",
	});
	const { dispatch } = useContext(BookContext);
	const history = useHistory();
	const setValue = (e: any) => {
		let name: any = e.target?.name;
		let value: any = e.target?.value;
		if (value.length > 0) {
			console.log(name, value, data);

			setData((prevUser) => ({ _id: uuidv4(), ...prevUser, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const addBooks = async () => {
		console.log(history);

		if (data.title && data.author && data.cover && data.price && data.rating) {
			console.log(data);
			dispatch({ type: "ADD_BOOK", data: data, status: true });
			history.push("/");
			return;
		} else {
			console.log("Enter all values");
		}
	};

	return (
		<div className="addBookForm">
			<h2 style={{ textAlign: "center" }}>Add Book Details</h2>
			<form method="POST">
				<InputTextComponent
					type="text"
					name="title"
					placeholder="Enter Book Title"
					onChange={setValue}
				/>
				<InputTextComponent
					type="text"
					name="author"
					placeholder="Enter Book Author Name"
					onChange={setValue}
				/>
				<InputTextComponent
					type="text"
					name="cover"
					placeholder="Enter Image"
					onChange={setValue}
				/>
				<InputTextComponent
					type="text"
					name="rating"
					placeholder="Enter Book Rating"
					onChange={setValue}
				/>
				<InputTextComponent
					type="number"
					name="price"
					placeholder="Enter Book Price"
					onChange={setValue}
				/>
				<ButtonWithFunc onclick={addBooks} buttonText="Submit" />
			</form>
		</div>
	);
};

export default AddBook;
