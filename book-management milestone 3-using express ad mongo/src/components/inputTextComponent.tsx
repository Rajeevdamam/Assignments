import React from "react";

interface Props {
	type: string;
	name: string;
	placeholder: string;
	onChange?: React.ChangeEventHandler;
}

const TextInputComponent = (props: Props) => {
	return (
		<div className="form-group">
			<label>{props.placeholder}</label>
			<input
				className="form-control"
				name={props.name}
				type={props.type}
				onChange={props.onChange}
				placeholder={props.placeholder}
				required
			/>
		</div>
	);
};

export default TextInputComponent;
