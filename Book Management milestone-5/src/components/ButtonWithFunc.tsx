import React, { ReactElement } from "react";

interface Props {
	buttonText: string;
	classname?: string;
	onclick?: React.MouseEventHandler;
}

export default function ButtonWithFunc(props: Props): ReactElement {
	return (
		<button
			type="button"
			className={props.classname}
			onClick={props.onclick}
			style={{ marginTop: "10px", marginLeft: "0 auto" }}
		>
			{props.buttonText}
		</button>
	);
}
