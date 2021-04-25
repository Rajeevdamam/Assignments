import React from "react";
import Cell from "./Cell";
import "../style.css";

const Board = (props) => {
	return (
		<div className="board-container">
			{props.cells.map((value, index) => (
				<Cell
					key={index}
					id={index}
					value={props.cells[index]}
					onClick={props.onCellClick}
					possCall={props.winnerObj ? props.winnerObj : null}
				></Cell>
			))}
		</div>
	);
};

export default Board;
