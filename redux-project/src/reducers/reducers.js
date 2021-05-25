import { createStore, combineReducers } from "redux";

// here 1 is initialstate just like we give it to reducers
// createStore is just to create the globalstore where all our data can be accessed from different hirarachy level of components
// this also takes two arguments such as first parameter takes reducer function

// const store = createStore(reducer, 1);

const initialstate1 = {
	number: 0,
	results: [],
};

const initialstate2 = {
	name: "rajeev",
	age: 0,
};

const mathReducer = (state = initialstate1, action) => {
	switch (action.type) {
		case "ADD":
			//should not make changes to the same state
			//state.number = state.number + action.payload;

			state = {
				...state,
				number: state.number + action.payload,
				results: [...state.results, action.payload],
			};
			//immutable way
			//state.results.push(state.number);
			break;

		case "MINUS":
			// state.number = state.number - action.payload;
			state = {
				...state,
				number: state.number - action.payload,
				results: [...state.results, action.payload],
			};
			//immutable way

			//state.results.push(state.number);

			break;

		default:
			break;
	}
	return state;
};

const userReducer = (state = initialstate2, action) => {
	switch (action.type) {
		case "SET_USER":
			//should not make changes to the same state

			state = {
				...state,
				name: action.payload,
			};

			break;

		case "SET_AGE":
			state = {
				...state,
				age: action.payload,
			};

			break;

		default:
			break;
	}
	return state;
};

// const store = createStore(mathReducer, initialstate1);

//if we want to use ultiple reducers then we have to use a library called combineReducers

const store = createStore(combineReducers({ mathReducer, userReducer }));

//if we want to use updated the state we can use it in subscribe
// store.subscribe(() => {
// 	console.log("store updated", store.getState());
// });

// // if we dont use subscribe to get the result we will get initial value
// console.log("store updated", store.getState());

// store.dispatch({ type: "ADD", payload: 10 });

// store.dispatch({ type: "MINUS", payload: 5 });

// store.dispatch({ type: "SET_USER", payload: "rajeev" });

// store.dispatch({ type: "SET_AGE", payload: 22 });

// export { mathReducer, userReducer };

export default store;
