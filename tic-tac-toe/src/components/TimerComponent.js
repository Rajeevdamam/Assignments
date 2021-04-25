import React from "react";

class TimerComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0,
		};
	}
	countdownTimer = () => {
		this.id = setInterval(() => {
			if (this.state.seconds > 59) {
				clearInterval(this.id);
				return;
			}
			this.setState({ seconds: this.state.seconds + 1 });
		}, 1000);
	};

	toggleTimer = () => {
		if (this.id) {
			clearInterval(this.id);
			// this.id = null;
		}
		// else {
		// 	this.countdownTimer();
		// }
	};

	stopTimer = () => {
		if (this.props.win) {
			clearInterval(this.id);
		}
	};

	resetTimer = () => {
		this.setState({ seconds: 0 });
	};

	render() {
		this.style = {
			borderRadius: "5px",
			padding: "5px",
			boxShadow: "0px 0px 5px 0px rgb(22, 22, 22)",
			width: "fit-content",
			marginTop: "60px",
			background: "blue",
			color: "white",
		};
		this.stopTimer();
		return (
			<div style={this.style}>
				<p>{this.props.player}</p>
				<h3>
					{"0" + this.state.minutes}:
					{this.state.seconds >= 10
						? this.state.seconds
						: "0" + this.state.seconds}
				</h3>
				<button
					style={{
						border: "none",
						background: "white",
						display: "block",
						margin: "5px",
						color: "blue",
					}}
					onClick={this.resetTimer}
				>
					Reset
				</button>
				<button
					style={{
						border: "none",
						background: "white",
						display: "block",
						margin: "5px",
						color: "blue",
					}}
					onClick={this.toggleTimer}
				>
					Stop
				</button>
			</div>
		);
	}
}

export default TimerComponent;
