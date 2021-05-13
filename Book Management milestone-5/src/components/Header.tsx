import React, { useContext, useEffect } from "react";
import NavButton from "./NavButton";
import { useState } from "react";
import { BookContext } from "../Context/BookContext";
import Button from "./Button";
import { AlertComponent } from "./alertComponent";

interface Props {
	onsearch: Function;
}

const Header = (props: Props) => {
	const { state, dispatch } = useContext(BookContext);

	const [type, setType] = useState();
	const [value, setValue] = useState();

	const [loggedOut, setloggedOut] = useState(false);

	const onSelectOption = (e: any) => {
		console.log(e.target.value);
		setType(e.target.value);
	};

	const onSearchInput = (e: any) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};

	const logout = () => {
		localStorage.removeItem("token");
		dispatch({
			type: "LOGOUT",
			payload: false,
		});
		setloggedOut(true);
	};

	const hideAlert = () => {
		setloggedOut(false);
	};

	const onSearchClick = () => {
		props.onsearch(type, value);
	};

	return (
		<div>
			<nav className="navbar navbar-custom navbar-dark bg-dark">
				<h2 style={{ color: "white" }}>Book Management</h2>

				<div className="nav navbar-right">
					{state.status && (
						<Button buttonText="Add Book" route="addbook"></Button>
					)}

					<Button buttonText="Book List" route="bookList" />
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
							style={{ border: "none" }}
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
					{!state.status && (
						<NavButton
							name="btn btn-outline-success"
							buttonText="Login"
							route="login"
						/>
					)}

					{state.status && (
						<NavButton
							name="btn btn-outline-danger"
							onClick={() => logout()}
							buttonText="Logout"
							route=""
						/>
					)}

					{!state.status && (
						<NavButton
							name="btn btn-outline-danger"
							buttonText="Sign Up"
							route="signup"
						/>
					)}
				</div>
			</nav>
			{loggedOut && (
				<AlertComponent
					strongText="Logged Out Successfully!"
					message=" Your Token is no Longer Valid"
					onClick={hideAlert}
				/>
			)}
		</div>
	);
};

export default Header;
