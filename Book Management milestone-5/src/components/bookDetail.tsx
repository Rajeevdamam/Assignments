import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StarComponent from "./StarComponent";
import { BookContext } from "../Context/BookContext";
import { bookById } from "../booksService";

interface MatchParams {
	id: string;
}

interface Props {}

export const BookDetail = (props: Props) => {
	const { id } = useParams<MatchParams>();
	const { state, dispatch } = useContext(BookContext);

	const result = async () => {
		let data = await bookById(id);
		dispatch(data);
	};

	useEffect(() => {
		bookdata = result();
	}, []);

	let bookdata = state.singleBook;

	return (
		<div className="card" id="bookDetailsCard" style={{ width: "18rem" }}>
			<div className="media">
				<img
					className="align-self-start mr-3"
					width="300"
					src={bookdata.cover}
					alt="Card image cap"
				/>
				<div className="media-body">
					<h4 className="card-title">Title: {bookdata.title}</h4>
					<h4 className="card-title">Author: {bookdata.author}</h4>

					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<p className="card-text" style={{ textAlign: "justify" }}>
								Description: {bookdata.description}
							</p>
						</li>
						<li className="list-group-item">Price: {bookdata.price}</li>
						<li
							title={bookdata.rating}
							style={{ cursor: "pointer" }}
							className="list-group-item"
						>
							Rating:{" "}
							<StarComponent min={parseFloat(bookdata.rating)} max={5} />
						</li>
						<li className="list-group-item">Series: {bookdata.series}</li>
					</ul>
					<Link className="btn btn-primary" to="/bookList">
						Back
					</Link>
				</div>
			</div>
		</div>
		// <div className="card" id="bookDetailsCard" style={{ width: "18rem" }}>
		// 	<img
		// 		className="card-img-top"
		// 		width="200"
		// 		src={bookdata.cover}
		// 		alt="Card image cap"
		// 	/>
		// 	<div className="card-body">
		// 		<h4 className="card-title">Title: {bookdata.title}</h4>
		// 		<h4 className="card-title">Author: {bookdata.author}</h4>
		// 		<p className="card-text">Description: {bookdata.description}</p>
		// 	</div>
		// 	<ul className="list-group list-group-flush">
		// 		<li className="list-group-item">Price: {bookdata.price}</li>
		// 		<li
		// 			title={bookdata.rating}
		// 			style={{ cursor: "pointer" }}
		// 			className="list-group-item"
		// 		>
		// 			Rating: <StarComponent min={parseFloat(bookdata.rating)} max={5} />
		// 		</li>
		// 		<li className="list-group-item">Series: {bookdata.series}</li>
		// 	</ul>
		// 	<Link className="btn btn-primary" to="/bookList">
		// 		Back
		// 	</Link>
		// </div>
	);
};
