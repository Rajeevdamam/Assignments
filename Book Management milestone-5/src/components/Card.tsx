import React, { ReactElement, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonWithFunc from "./ButtonWithFunc";
import StarComponent from "./StarComponent";
import ReactLoading from "react-loading";
import { displayAllBooks, deleteBooks, search } from "../booksService";
import { BookContext } from "../Context/BookContext";

interface Props {
	searchParams: any;
}

export default function Card(props: Props): ReactElement {
	const { state, dispatch } = useContext(BookContext);
	let result: any;
	let data: any;
	//for displaying all books

	if (!props.searchParams.type || !props.searchParams.value) {
		result = async () => {
			let data = await displayAllBooks();
			dispatch(data);
		};
		data = state.books;
	}
	//for searching books
	else {
		result = async () => {
			let data = await search(
				props.searchParams.type,
				props.searchParams.value
			);
			dispatch(data);
		};
		data = state.searchedBooks;
	}

	//for re-rendering details whenever there is a change encountered
	useEffect(() => {
		data = result();
	}, [props.searchParams]);

	//to delete a particular book by title
	const deleteFunc = async (e: any) => {
		let title =
			e.target.parentNode.childNodes[1].childNodes[0].childNodes[0].innerHTML;
		await deleteBooks(title);
		data = result();
	};

	return (
		<div className="cardComponent">
			{!data && <ReactLoading type="spin" color="black" />}
			{data.map((value: any, index: any) => {
				return (
					<div key={value._id} className="card-deck mb-0">
						<div className="card  mb-0">
							<Link
								style={{ textDecoration: "none" }}
								to={`/bookDetail/${value._id}`}
							>
								<img
									className="card-img-top"
									src={value.cover}
									height="200px"
									alt="Card image cap"
								/>
							</Link>
							<div className="card-body">
								<h5 className="card-title">
									<abbr title={value.title}>{value.title}</abbr>
								</h5>
								<p className="card-text">{value.author}</p>
								<p className="card-text">Price: {value.price}</p>
								<p
									style={{ cursor: "pointer" }}
									title={value.rating}
									className="card-text"
								>
									Rating: <StarComponent min={value.rating} max={5} />
								</p>
							</div>
							<Link className="btn btn-primary" to={`/bookDetail/${value._id}`}>
								View
							</Link>

							{state.status && (
								<ButtonWithFunc
									classname={"btn btn-danger"}
									onclick={deleteFunc}
									buttonText="Delete"
								/>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
