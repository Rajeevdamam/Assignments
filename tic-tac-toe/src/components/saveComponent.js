import React from "react";
import SaveButton from "./SaveButton";
import InputComponent from "./inputComponent";

class SaveComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: "",
			player2: "",
		};
	}

	handleSave = () => {
		if (this.state.player1 && this.state.player2) {
			this.props.onUpdate(this.state.player1, this.state.player2);
		} else {
			console.log("Enter both the values");
		}
	};

	setPlayerName = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="inputCompo">
				<InputComponent
					labelName="Player 1 Name"
					value={this.state.player1}
					onChange={this.setPlayerName}
					label="player1"
				></InputComponent>

				<InputComponent
					labelName="Player 2 Name"
					value={this.state.player2}
					onChange={this.setPlayerName}
					label="player2"
				></InputComponent>

				<SaveButton className="save-button" onClick={this.handleSave} />
			</div>
		);
	}
}

// const SaveComponent = (props) => {
// 	let value1, value2;

// 	const getValue = (value) => {
// 		value1 = value;
// 		value2 = value;
// 		console.log(value1, value2);
// 	};

// 	const handleSave = () => {
// 		if (value1 && value2) {
// 			console.log(value1, value2);
// 			props.onUpdate(value1, value2);
// 		} else {
// 			console.log("Enter both the values");
// 		}
// 	};

// 	return (
// 		<div className="inputCompo">
// 			<InputComponent label="Player 1" getValues={getValue}></InputComponent>
// 			<InputComponent label="Player 2" getValues={getValue}></InputComponent>
// 			{/* <label> Player 1 Name </label>
// 			<input type="text" onChange={handleChange1} required></input>
// 			<label> Player 2 Name </label>
// 			<input type="text" onChange={handleChange2} required></input> */}
// 			<SaveButton className="save-button" onClick={handleSave} />
// 		</div>
// 	);
// };

export default SaveComponent;
