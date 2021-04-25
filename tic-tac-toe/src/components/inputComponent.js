import React from "react";

const InputComponent = (props) => {
	return (
		<div className="input-component">
			<label>{props.labelName}</label>
			<input
				type="text"
				name={props.label}
				value={props.value}
				onChange={props.onChange}
			></input>
		</div>
	);
};

export default InputComponent;
