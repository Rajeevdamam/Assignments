import React from "react";

const SaveButton = (props) => {
	let buttonStyle = {
		background: "blue",
		color: "white",
		fontSize: "20px",
		padding: "10px",
		border: "none",
		borderRadius: "5px",
		position: "relative",
		margin: "auto",
		display: "block",
	};
	return (
		<button onClick={props.onClick} style={buttonStyle}>
			Save
		</button>
	);
};

export default SaveButton;
