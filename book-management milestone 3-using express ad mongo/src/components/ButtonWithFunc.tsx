import React, { MouseEventHandler, ReactElement } from "react";

interface Props {
	buttonText: string;
	onclick?: React.MouseEventHandler;
}

export default function ButtonWithFunc(props: Props): ReactElement {
	return (
		<button
			type="button"
			className="btn btn-danger"
			onClick={props.onclick}
			style={{ marginTop: "10px" }}
		>
			{props.buttonText}
		</button>
	);
}
