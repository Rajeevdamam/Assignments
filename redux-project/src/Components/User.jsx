import React from "react";

const User = (props) => {
	console.log(props);
	return (
		<div>
			<p>{props.name.name}</p>
			<p>{props.age.age}</p>
		</div>
	);
};

export default User;
