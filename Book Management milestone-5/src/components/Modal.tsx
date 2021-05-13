import { Modal, Button } from "react-bootstrap";

function DialogBox(props: any) {
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
				<Modal.Body>{props.body}</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.handleClose}>Ok</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DialogBox;
