import React, { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../booksData";
import ButtonWithFunc from "./ButtonWithFunc";
import InputTextComponent from "./inputTextComponent";
interface Props {}

const LoginPage = (props: Props) => {
	let [data, setData] = useState({
		email: "",
		password: "",
	});
	const [status, setstatus] = useState(false);
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

	const loginToken = async () => {
		console.log(history);
		if (data.email && data.password) {
			let isAuthorized: any = await login(data);
			console.log(isAuthorized);

			if (isAuthorized) {
				history.push("/");
				setstatus(false);
				return;
			} else {
				setstatus(true);
			}
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
			{status && <h1 style={{ color: "red" }}>*Invalid Email or Password*</h1>}
		</div>
	);
};

export default LoginPage;
