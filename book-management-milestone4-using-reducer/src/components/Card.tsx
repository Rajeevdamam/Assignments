import React, { ReactElement, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { searchBook } from "../booksData";
import ButtonWithFunc from "./ButtonWithFunc";
import StarComponent from "./StarComponent";
import { BookContext } from "../Context/BookContext";

interface Props {
	searchParams: any;
}

export default function Card(props: Props): ReactElement {
	const { state, dispatch } = useContext(BookContext);
	console.log(state.status);
	console.log(state);
	const [boolStatus, setstatus] = useState(false);

	useEffect(() => {
		if (state.status === true) {
			setstatus(true);
		} else {
			setstatus(false);
		}
	}, [state.status]);

	let data = searchBook(props.searchParams, state.books);
	console.log(data);

	return (
		<div className="cardComponent">
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

							{boolStatus && (
								<ButtonWithFunc
									onclick={() =>
										dispatch({
											type: "DELETE_BOOK",
											id: value._id,
											status: true,
										})
									}
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
