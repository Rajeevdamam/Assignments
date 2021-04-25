import React from "react";

const Table = (tableProps) => {
	return (
		<table className="moves-table">
			<thead>
				<tr>
					<th>Player</th>
					<th>Move</th>
				</tr>
			</thead>

			<tbody>{tableProps.func}</tbody>
		</table>
	);
};

export default Table;
