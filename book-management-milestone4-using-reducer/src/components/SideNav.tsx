import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { BookContext } from "../Context/BookContext";

interface Props {}

const SideNav = (props: Props) => {
	const { state } = useContext(BookContext);
	console.log(state.status);

	const [boolStatus, setstatus] = useState(false);
	useEffect(() => {
		if (state.status === true) {
			setstatus(true);
		} else {
			setstatus(false);
		}
	}, [state.status]);

	return (
		<div className="sidenav">
			<div className="sidenav-content">
				{boolStatus === true ? (
					<Button buttonText="Add Book" route="addbook"></Button>
				) : null}

				<Button buttonText="Book List" route="bookList" />
			</div>
		</div>
	);
};

export default SideNav;
