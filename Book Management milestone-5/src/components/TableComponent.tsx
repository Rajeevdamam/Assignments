import React from "react";
import InputTextComponent from "./inputTextComponent";

interface Props {
	// children: React.ReactNode;
}

interface State {}

class Table extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<table className="table text-light bg-dark">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Title</th>
						<th scope="col">Author</th>
						<th scope="col">Price</th>
						<th scope="col">Rating</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-primary">
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>5</td>
					</tr>
					<tr className="bg-success">
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>5</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Table;
