import React from "react";

interface Props {
	strongText: string;
	message: string;
	onClick: React.MouseEventHandler;
}

export const AlertComponent = (props: Props) => {
	return (
		<div>
			<div
				className="alert alert-success alert-dismissible fade show"
				role="alert"
				style={{ width: "100%", margin: "0 auto", zIndex: 999 }}
			>
				<strong>{props.strongText}</strong>
				{props.message}
				<button
					onClick={props.onClick}
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
	);
};
