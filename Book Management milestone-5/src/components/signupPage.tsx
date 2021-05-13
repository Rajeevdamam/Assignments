import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";
import axios from "axios";
import ButtonWithFunc from "./ButtonWithFunc";
import InputTextComponent from "./inputTextComponent";
import DialogBox from "./Modal";
interface Props {}

const SignupPage = (props: Props) => {
	let [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { state, dispatch } = useContext(BookContext);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

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
		if (data.email && data.password) {
			let res = await axios.post(
				"http://localhost:4000/signup",
				JSON.stringify(data),
				{ headers: { "Content-Type": "application/json" } }
			);
			dispatch({ type: "ADD_USER", payload: res.data });
			history.push("/login");
			return;
		} else {
			setShow(true);
			console.log("Enter all values");
		}
	};

	return (
		<div className="signup-form">
			<DialogBox
				title={"Sign Up Failed"}
				body={"Enter All Details"}
				show={show}
				handleClose={handleClose}
			/>
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
				<div className="row mb-4">
					<div className="col">
						<InputTextComponent
							type="password"
							name="password"
							onChange={setValue}
							placeholder="Enter Password"
						/>
					</div>
					<div className="col">
						<InputTextComponent
							type="password"
							name="confirmPassword"
							onChange={setValue}
							placeholder="Enter Conifrm Password"
						/>
					</div>
				</div>
				<ButtonWithFunc
					classname={"btn custom-button btn-danger"}
					onclick={signupSubmit}
					buttonText="Submit"
				/>
			</form>
		</div>
	);
};

export default SignupPage;
