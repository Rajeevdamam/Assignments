import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";

import ButtonWithFunc from "./ButtonWithFunc";
import InputTextComponent from "./inputTextComponent";
interface Props {}

const LoginPage = (props: Props) => {
	let [data, setData] = useState({
		email: "",
		password: "",
	});
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

	const { state, dispatch } = useContext(BookContext);
	const [login, setlogin] = useState(false);
	const loginToken = async () => {
		console.log(history);
		if (data.email && data.password) {
			for (let i = 0; i < state.users.length; i++) {
				if (
					data.password === state.users[i].password &&
					data.email === state.users[i].email
				) {
					dispatch({ type: "LOGIN_STATUS" });
					history.push("/");
					return;
				}
			}
			setlogin(true);
		} else {
			console.log("Enter all values");
		}
	};
	return (
		<div className="login-form">
			<h1 style={{ textAlign: "center" }}>Login</h1>
			<form>
				<InputTextComponent
					type="text"
					name="email"
					placeholder="Enter Username"
					onChange={setValue}
				/>
				<InputTextComponent
					type="password"
					name="password"
					placeholder="Enter Password"
					onChange={setValue}
				/>

				<ButtonWithFunc buttonText="Login" onclick={loginToken} />
			</form>
			{login && <h1 style={{ color: "red" }}>*Invalid Email or Password*</h1>}
		</div>
	);
};

export default LoginPage;
