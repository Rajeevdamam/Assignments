import React, { ReactElement, useState, useEffect } from "react";
import { deleteBooks, searchFunc } from "../booksData";
import { Link } from "react-router-dom";
import ButtonWithFunc from "./ButtonWithFunc";
import StarComponent from "./StarComponent";

interface Props {
	searchParams: any;
}

export default function Card(props: Props): ReactElement {
	const [data, setBooks] = useState([{}]);
	const [status, setstatus] = useState(false);
	// console.log("data", data);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setstatus(true);
		}
	}, [localStorage.getItem("token")]);

	useEffect(() => {
		searchFunc(
			props.searchParams.type,
			props.searchParams.value
		).then((result) => setBooks(result));
	}, [props.searchParams]);

	const deleteFunc = (e: any) => {
		let title =
			e.target.parentNode.childNodes[1].childNodes[0].childNodes[0].innerHTML;
		console.log(title);

		deleteBooks(title).then((result) => {
			searchFunc("", "").then((result) => setBooks(result));
		});
	};

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
							{status && (
								<ButtonWithFunc onclick={deleteFunc} buttonText="Delete" />
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
