import React, { Component, useState, useContext } from "react";
import Button from "./Button";
import InputTextComponent from "./inputTextComponent";
import ButtonWithFunc from "./ButtonWithFunc";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";
import axios from "axios";

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
			setData((prevUser) => ({ ...prevUser, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const addBooks = async () => {
		console.log(data);

		if (data.title && data.author && data.cover && data.price && data.rating) {
			let res = await axios.post(
				"http://localhost:4000/books",
				JSON.stringify(data),
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token"),
					},
				}
			);
			console.log(res);

			dispatch({ type: "ADD_BOOK" });

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
					type="number"
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
				<ButtonWithFunc
					classname={"btn custom-button btn-danger"}
					onclick={addBooks}
					buttonText="Submit"
				/>
			</form>
		</div>
	);
};

export default AddBook;
