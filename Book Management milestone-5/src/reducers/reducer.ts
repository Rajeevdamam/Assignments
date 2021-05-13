const reducer = (currentState: any, action: any) => {
	switch (action.type) {
		case "DISPLAY_BOOKS":
			console.log(currentState);
			return {
				...currentState,
				users: [],
				books: action.payload,
				searchedBooks: [],
				status: action.status,
			};

		case "ADD_BOOK":
			console.log(currentState);
			return currentState;

		case "ADD_USER":
			console.log(currentState);
			return currentState;

		case "VIEW_BY_ID":
			return {
				...currentState,
				singleBook: action.payload,
			};

		case "LOGIN":
			return {
				...currentState,
				status: action.payload,
			};

		case "LOGOUT":
			return {
				...currentState,
				status: action.payload,
			};

		case "SEARCH_BY_AUTHOR":
			console.log(action.payload);

			return {
				...currentState,
				searchedBooks: action.payload,
			};

		case "SEARCH_BY_TITLE":
			console.log(action.payload);

			return {
				...currentState,
				searchedBooks: action.payload,
			};

		case "SEARCH_BY_PRICE":
			return {
				...currentState,
				searchedBooks: action.payload,
			};

		case "VERIFY":
			return {
				...currentState,
				verify: action.payload,
			};
	}
};

export default reducer;
