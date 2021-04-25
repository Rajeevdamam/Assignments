import React from "react";
import Board from "./Board";
import SaveComponent from "./saveComponent";
import TimerComponent from "./TimerComponent";
import Table from "./Table";
import Clear from "./ClearButton";

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: "player X",
			player2: "player O",
			inputCompo: true,
			boardCompo: false,
			timerCompo: false,
			next: "X",
			start: true,
			cells: Array(9).fill(null),
			filled: [],
			cellElements: Array(9),
		};
		this.timer1 = React.createRef();
		this.timer2 = React.createRef();
	}

	isBoardFull() {
		if (this.state.filled.length === this.state.cells.length) {
			return true;
		}
		return false;
	}

	onCellClick = (id) => {
		const current = this.state.cells[id];
		// if (current) {
		// 	return;
		// }

		// let history = [...this.state.cells];
		let history = this.state.cells;
		let winnerStatus = calculateWinner(history);

		if (winnerStatus || current) {
			this.setState({ next: "" });
			return;
		}
		history[id] = this.state.next;
		let newNext = this.state.next === "X" ? "O" : "X";

		this.setState({
			next: newNext,
			cells: history,
			filled: this.state.filled.concat({ player: history[id], _id: id }),
			cellElements: this.state.cellElements.concat(current),
		});
	};

	updatePlayers = (name1, name2) => {
		this.setState({
			player1: name1,
			player2: name2,
			inputCompo: false,
			boardCompo: true,
			timerCompo: true,
		});
	};

	updateTimers = () => {
		if (this.timer1.current && this.timer2.current) {
			if (this.state.next === "X") {
				this.timer1.current.countdownTimer();
				this.timer2.current.toggleTimer();
			} else {
				this.timer2.current.countdownTimer();
				this.timer1.current.toggleTimer();
			}
		}
	};

	onClear = () => {
		this.setState({
			cells: this.state.cells.fill(null),
			filled: [],
			cellElements: [],
			next: "X",
		});
		this.timer1.current.resetTimer();
		this.timer2.current.resetTimer();
	};

	movesDetails = (player1, player2) => {
		return this.state.filled.map((value, index) => {
			const { player, _id } = value;
			return (
				<tr key={index}>
					<td>{player === "X" ? player1 : player2}</td>
					<td>{_id}</td>
				</tr>
			);
		});
	};

	componentDidUpdate() {
		if (this.state.next === "X") {
			this.timer1.current.countdownTimer();
			this.timer2.current.toggleTimer();
		} else {
			this.timer2.current.countdownTimer();
			this.timer1.current.toggleTimer();
		}
	}

	render() {
		const winner = calculateWinner(this.state.cells);

		let { player1, player2 } = this.state;
		let status;
		if (winner) {
			if (winner.cellObj === "X") {
				winner.cellObj = player1;
			} else {
				winner.cellObj = player2;
			}
			status = "Winner: " + winner.cellObj;
		} else {
			status = "";
		}
		let player = "";
		if (this.state.next === "X") {
			player = player1;
		} else {
			player = player2;
		}
		return (
			<div className="game">
				{this.state.inputCompo && (
					<SaveComponent onUpdate={this.updatePlayers} />
				)}
				<table style={{ margin: "auto" }}>
					<tbody>
						<tr>
							<td>
								{this.state.timerCompo && (
									<TimerComponent
										ref={this.timer1}
										// minutes={0}
										// seconds={0}
										player={this.state.player1}
										win={winner ? winner : null}
									/>
								)}
							</td>
							<td>
								{this.state.timerCompo && (
									<TimerComponent
										ref={this.timer2}
										// minutes={0}
										// seconds={0}
										player={this.state.player2}
										win={winner ? winner : null}
									/>
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="mainContainer">
					<div className="gameBoardDetails">
						{this.state.boardCompo && !winner && !this.isBoardFull() && (
							<h3>Next Move:{player}</h3>
						)}
						{this.state.boardCompo && !winner && this.isBoardFull() && (
							<h3>Match Tied!</h3>
						)}
						{this.state.boardCompo && winner && <h3>{status}</h3>}
						{this.state.boardCompo && (
							<Board
								cells={this.state.cells}
								onCellClick={this.onCellClick}
								seconds={this.state.seconds}
								playerName1={this.state.player1}
								playerName2={this.state.player2}
								winnerObj={winner ? winner.possibilitiesObj : null}
							/>
						)}
						{this.state.boardCompo && <Clear onClick={this.onClear} />}
					</div>
					{this.state.boardCompo && (
						<Table
							func={this.movesDetails(this.state.player1, this.state.player2)}
						/>
					)}
				</div>
			</div>
		);
	}
}

function calculateWinner(cells) {
	let possibilities = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < possibilities.length; i++) {
		const [a, b, c] = possibilities[i];

		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return { cellObj: cells[a], possibilitiesObj: possibilities[i] };
		}
	}
	return null;
}

export default Game;
