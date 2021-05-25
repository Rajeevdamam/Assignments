import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// here 1 is initialstate just like we give it to reducers
// createStore is just to create the globalstore where all our data can be accessed from different hirarachy level of components
// this also takes two arguments such as first parameter takes reducer function

// const store = createStore(reducer, 1);

const initialstate = {
	name: "rajeev",
	age: 0,
};

const userReducer = (state: any, action: any) => {
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

const store = createStore(userReducer, initialstate, applyMiddleware(thunk));

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
