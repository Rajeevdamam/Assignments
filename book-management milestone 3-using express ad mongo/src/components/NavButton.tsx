import React from "react";
import { Link } from "react-router-dom";

interface Props {
	buttonText: string;
	name: string;
	route: string;
}

const NavButton = (props: Props) => {
	return (
		<button
			style={{
				marginRight: "20px",
			}}
			type="button"
			className={props.name}
		>
			<Link
				style={{ textDecoration: "none", color: "white" }}
				to={`/${props.route}`}
			>
				{props.buttonText}
			</Link>
		</button>
	);
};

export default NavButton;
