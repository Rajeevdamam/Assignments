import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { bookDataById } from "../booksData";
import StarComponent from "./StarComponent";

interface MatchParams {
	id: string;
}

interface BookSchema {
	cover: string;
	title: string;
	author: string;
	description: string;
	price: string;
	rating: any;
	series: string;
}

interface Props {}

export const BookDetail = (props: Props) => {
	const { id } = useParams<MatchParams>();
	type books = BookSchema;
	const [bookdata, setbookdata] = useState<BookSchema>({
		cover: "",
		title: "",
		author: "",
		description: "",
		price: "",
		rating: "",
		series: "",
	});
	useEffect(() => {
		bookDataById(id).then((res) => {
			return setbookdata(res);
		});
	}, [id]);

	return (
		<div className="card" id="bookDetailsCard" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				width="200"
				src={bookdata.cover}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h4 className="card-title">Title: {bookdata.title}</h4>
				<h4 className="card-title">Author: {bookdata.author}</h4>
				<p className="card-text">Description: {bookdata.description}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Price: {bookdata.price}</li>
				<li
					title={bookdata.rating}
					style={{ cursor: "pointer" }}
					className="list-group-item"
				>
					Rating: <StarComponent min={parseFloat(bookdata.rating)} max={5} />
				</li>
				<li className="list-group-item">Series: {bookdata.series}</li>
			</ul>
			<Link className="btn btn-primary" to="/bookList">
				Back
			</Link>
		</div>
	);
};
