import React from "react";

const Home = (props) => {
	return (
		<div>
			<button onClick={props.setName}>Change Name</button>
			<button onClick={props.setAge}>Change Age</button>
		</div>
	);
};

export default Home;
