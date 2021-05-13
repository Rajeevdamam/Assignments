import React, { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";

interface Props {
	children?: any;
}

export const BookContext = createContext<any>({});

const initialState = {
	books: [],
	users: [],
	searchedBooks: [],
	singleBook: {},
	verify: 0,
	status: false,
};

const BookContextProvider = (props: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<BookContext.Provider value={{ state, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
