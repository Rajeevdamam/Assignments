import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
	type: string;
	name: string;
	placeholder: string;
	onChange?: React.ChangeEventHandler;
}

const TextInputComponent = (props: Props) => {
	return (
		<TextField
			variant="outlined"
			margin="normal"
			type={props.type}
			name={props.name}
			onChange={props.onChange}
			placeholder={props.placeholder}
			required
			fullWidth
			id={props.name}
			label={props.placeholder}
			autoComplete={props.type}
			autoFocus
		/>
	);
};

export default TextInputComponent;
