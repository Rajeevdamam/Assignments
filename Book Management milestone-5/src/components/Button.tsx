import React from "react";
import { Link } from "react-router-dom";

interface ButtonName {
	buttonText: string;
	route: string;
}
function RouteButton(props: ButtonName) {
	// props.firstName
	// props.lastName
	return (
		<Link
			style={{ textDecoration: "none", color: "white" }}
			to={`/${props.route}`}
		>
			<button type="button" className="buttonComponent">
				{props.buttonText}
			</button>
		</Link>
	);
}

export default RouteButton;
