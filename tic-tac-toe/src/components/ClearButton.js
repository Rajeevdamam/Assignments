import React from "react";

const Clear = (clearProps) => {
	let buttonStyle = {
		background: "blue",
		color: "white",
		fontSize: "20px",
		padding: "10px",
		border: "none",
		borderRadius: "5px",
		margin: "10px",
		position: "relative",
	};
	return (
		<button onClick={clearProps.onClick} style={buttonStyle}>
			Clear
		</button>
	);
};

export default Clear;
