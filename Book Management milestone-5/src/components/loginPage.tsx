import React, { useState, useContext } from "react";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import { useHistory } from "react-router";
import { BookContext } from "../Context/BookContext";
import axios from "axios";
import ButtonWithFunc from "./ButtonWithFunc";
import InputTextComponent from "./inputTextComponent";
import DialogBox from "./Modal";
import ModalWithInput from "./ModalWithInput";
interface Props {}

const LoginPage = (props: Props) => {
	const [show, setShow] = useState(false);

	const [otpModal, setOtpModal] = useState(false);

	const handleClose = () => setShow(false);

	const closeOtpModal = () => setOtpModal(false);

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
	const loginToken = async () => {
		if (data.email || data.password) {
			let res = await axios.post(
				"http://localhost:4000/login",
				JSON.stringify(data),
				{ headers: { "Content-Type": "application/json" } }
			);
			localStorage.setItem("token", res.data.token);
			if (localStorage.length) {
				setOtpModal(true);
				dispatch({ type: "VERIFY", payload: res.data.OTP });
			}
		} else {
			setShow(true);
			console.log("Enter all values");
		}
	};

	const loginVerify = (value: any) => {
		console.log(value);
		if (parseInt(value) === state.verify) {
			dispatch({ type: "LOGIN", payload: true });
			history.push("/");
		}
	};

	return (
		<div className="login-form">
			<ModalWithInput
				title={"Enter The OTP Sent To Your Email"}
				show={otpModal}
				verify={loginVerify}
				handleClose={closeOtpModal}
			/>
			<DialogBox
				title={"Login Failed"}
				body={"Enter Both Values"}
				show={show}
				handleClose={handleClose}
			/>
			<h1 style={{ textAlign: "center" }}>
				Login
				<LockOpenTwoToneIcon />
			</h1>

			<form>
				<InputTextComponent
					type="text"
					name="email"
					placeholder="Enter Email"
					onChange={setValue}
				/>
				<InputTextComponent
					type="password"
					name="password"
					placeholder="Enter Password"
					onChange={setValue}
				/>

				<ButtonWithFunc
					classname={"btn custom-button btn-danger"}
					buttonText="Login"
					onclick={loginToken}
				/>
			</form>
		</div>
	);
};

export default LoginPage;
