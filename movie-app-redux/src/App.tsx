import { connect } from "react-redux";
import "./App.css";
import Home from "./Components/Home";
import User from "./Components/User";

interface Props {
	user: any;
	setName: any;
	setAge: any;
}

function App(props: Props) {
	window.onload = async () => {
		await new Audio(
			"https://www.partnersinrhyme.com/files/sounds1/MP3/human/fight/slap.mp3"
		).play();
		alert("slap!");
	};

	console.log(props);
	return (
		<div className="App">
			<User name={props.user} age={props.user} />
			<Home
				setName={() => props.setName("Monjunath")}
				setAge={() => props.setAge(22)}
			/>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		user: state,
	};
};

const mapdispatchToProps = (dispatch: any) => {
	return {
		setName: (name: any) => {
			dispatch({
				type: "SET_USER",
				payload: name,
			});
		},
		setAge: (age: any) => {
			dispatch({
				type: "SET_AGE",
				payload: age,
			});
		},
	};
};

// export default App;

export default connect(mapStateToProps, mapdispatchToProps)(App);
