import React, { useState, useEffect } from "react";
import Button from "./Button";

interface Props {}

const SideNav = (props: Props) => {
	const [status, setstatus] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setstatus(true);
		}
	}, [localStorage.getItem("token")]);
	return (
		<div className="sidenav">
			<div className="sidenav-content">
				{status && <Button buttonText="Add Book" route="addbook"></Button>}

				<Button buttonText="Book List" route="bookList" />
			</div>
		</div>
	);
};

export default SideNav;
