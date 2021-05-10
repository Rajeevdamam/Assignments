import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";

import ButtonWithFunc from "./ButtonWithFunc";
import InputTextComponent from "./inputTextComponent";
interface Props {}

const SignupPage = (props: Props) => {
	let [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { state, dispatch } = useContext(BookContext);
	const history = useHistory();
	const setValue = (e: any) => {
		let name: any = e.target?.name;
		let value: any = e.target?.value;
		if (value.length > 0) {
			console.log(name, value, data);

			setData((prevUser) => ({ ...prevUser, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const signupSubmit = async () => {
		console.log(history);
		if (data.email && data.password) {
			dispatch({ type: "ADD_USERS", data: data });
			history.push("/login");
			return;
		} else {
			console.log("Enter all values");
		}
	};
	return (
		<div className="signup-form">
			<h1 style={{ textAlign: "center" }}>Sign Up</h1>
			<form>
				<InputTextComponent
					type="text"
					name="userName"
					onChange={setValue}
					placeholder="Enter Username"
				/>
				<InputTextComponent
					type="email"
					name="email"
					onChange={setValue}
					placeholder="Enter Email"
				/>
				<InputTextComponent
					type="password"
					name="password"
					onChange={setValue}
					placeholder="Enter Password"
				/>
				<InputTextComponent
					type="password"
					name="confirmPassword"
					onChange={setValue}
					placeholder="Enter Conifrm Password"
				/>

				<ButtonWithFunc onclick={signupSubmit} buttonText="Submit" />
			</form>
		</div>
	);
};

export default SignupPage;
