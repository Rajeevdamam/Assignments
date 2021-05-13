import { Modal, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import React, { useState, useContext } from "react";

function ModalWithInput(props: any) {
	const [value, setValue] = useState("");

	const [toggle, settoggle] = useState(false);

	const handleChange = (event: any) => {
		console.log(event.target.value);
		setValue(event.target.value);
		if (event.target.value.length === 6) {
			settoggle(true);
		}
	};

	const onSubmit = () => {
		console.log(value);
		props.verify(value);
		props.handleClose();
	};

	return (
		<>
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				show={props.show}
				onHide={props.handleClose}
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<TextField
						id="outlined-textarea"
						label="Enter OTP"
						placeholder="OTP"
						variant="outlined"
						onChange={handleChange}
					/>
				</Modal.Body>
				<Modal.Footer>
					{!toggle && <h3 style={{ color: "red" }}>Enter 6 digit OTP</h3>}
					{toggle && <Button onClick={onSubmit}>Ok</Button>}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalWithInput;
