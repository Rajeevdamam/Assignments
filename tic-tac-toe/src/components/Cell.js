import React from "react";

const Cell = (cellProps) => {
	let style;
	if (cellProps.possCall) {
		cellProps.possCall.forEach((element) => {
			if (cellProps.id === element) {
				style = {
					background: "green",
				};
			}
		});
	}
	return (
		<button
			style={style}
			onClick={() => cellProps.onClick(cellProps.id)}
			className="cell"
		>
			{cellProps.value}
		</button>
	);
};

export default Cell;
