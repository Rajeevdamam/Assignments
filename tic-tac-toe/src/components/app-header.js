import React from "react";

const AppHeader = () => {
	let style = {
		color: "white",
		borderBottom: "15px solid gray",
		margin: "0",
		height: "50px",
		textAlign: "center",
		backgroundColor: "blue",
	};
	return <h1 style={style}>Tic Tac Toe Game</h1>;
};

export default AppHeader;
