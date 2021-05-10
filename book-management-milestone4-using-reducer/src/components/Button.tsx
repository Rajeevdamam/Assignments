import React from "react";
import { Link } from "react-router-dom";

interface ButtonName {
	buttonText: string;
	route: string;
}
function Button(props: ButtonName) {
	// props.firstName
	// props.lastName
	return (
		<button type="button" className="buttonComponent">
			<Link
				style={{ textDecoration: "none", color: "white" }}
				to={`/${props.route}`}
			>
				{props.buttonText}
			</Link>
		</button>
	);
}

export default Button;
