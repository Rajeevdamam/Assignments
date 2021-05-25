import { connect } from "react-redux";
import "./App.css";
import Home from "./Components/Home";
import User from "./Components/User";

function App(props) {
	console.log(props.user);
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

const mapStateToProps = (state) => {
	console.log(state);
	return {
		user: state.userReducer,
		math: state.mathReducer,
	};
};

const mapdispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({
				type: "SET_USER",
				payload: name,
			});
		},
		setAge: (age) => {
			dispatch({
				type: "SET_AGE",
				payload: age,
			});
		},
	};
};

// export default App;

export default connect(mapStateToProps, mapdispatchToProps)(App);
