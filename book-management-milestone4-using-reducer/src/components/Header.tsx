import React, { useContext, useEffect } from "react";
import NavButton from "./NavButton";
import { useState } from "react";
import { BookContext } from "../Context/BookContext";

interface Props {
	onsearch: Function;
}

const Header = (props: Props) => {
	const { state, dispatch } = useContext(BookContext);

	const [type, setType] = useState();
	const [value, setValue] = useState();
	const onSelectOption = (e: any) => {
		console.log(e.target.value);
		setType(e.target.value);
	};

	const onSearchInput = (e: any) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};

	const [boolStatus, setstatus] = useState(false);
	useEffect(() => {
		if (state.status === true) {
			console.log("Header re-rendered");

			setstatus(true);
		} else {
			setstatus(false);
		}
	}, [state.status]);

	const onSearchClick = () => {
		props.onsearch(type, value);
	};

	return (
		<nav className="navbar fixed-top navbar-dark bg-primary">
			<h1 style={{ color: "white" }}>Book Management</h1>
			<div className="nav navbar-right">
				<select onChange={onSelectOption} className="dropbtn" id="dropdown">
					<option value="">select any one</option>
					<option value="title">Title</option>
					<option value="author">Author</option>
					<option value="price">Price</option>
				</select>
				<form className="form-inline" style={{ marginRight: "20px" }}>
					<input
						onChange={onSearchInput}
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						onClick={onSearchClick}
						className="btn btn-light my-2 my-sm-0"
						type="button"
					>
						Search
					</button>
				</form>
				{!boolStatus && (
					<NavButton name="btn btn-success" buttonText="Login" route="login" />
				)}

				{boolStatus && (
					<NavButton
						name="btn btn-danger"
						onClick={() =>
							dispatch({
								type: "LOGOUT",
							})
						}
						buttonText="Logout"
						route=""
					/>
				)}

				{!boolStatus ? (
					<NavButton
						name="btn btn-danger"
						buttonText="Sign Up"
						route="signup"
					/>
				) : null}
			</div>
		</nav>
	);
};

export default Header;
