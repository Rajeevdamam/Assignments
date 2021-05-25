import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./reducers/reducers";

// const store = createStore(mathReducer, initialstate1);

//if we want to use ultiple reducers then we have to use a library called combineReducers

// const store = createStore(combineReducers({ mathReducer, userReducer }));

//if we want to use updated the state we can use it in subscribe
// store.subscribe(() => {
// 	console.log("store updated", store.getState());
// });

// if we dont use subscribe to get the result we will get initial value
// console.log("store updated", store.getState());

// store.dispatch({ type: "ADD", payload: 10 });

// store.dispatch({ type: "MINUS", payload: 5 });

// store.dispatch({ type: "SET_USER", payload: "rajeev" });

// store.dispatch({ type: "SET_AGE", payload: 22 });

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
