import React from "react";
import { Link } from "react-router-dom";

interface Props {
	buttonText: string;
	name: string;
	route?: string;
	onClick?: React.MouseEventHandler;
}

const NavButton = (props: Props) => {
	return (
		<Link
			style={{ textDecoration: "none", color: "white" }}
			to={`/${props.route}`}
		>
			<button
				style={{
					marginRight: "20px",
				}}
				type="button"
				onClick={props.onClick}
				className={props.name}
			>
				{props.buttonText}
			</button>
		</Link>
	);
};

export default NavButton;
