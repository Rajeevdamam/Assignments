const reducer = (currentState: any, action: any) => {
	if (action.type === "DELETE_BOOK") {
		const deletedBooks = currentState.books.filter(
			(books: any) => books._id !== action.id
		);
		return {
			books: deletedBooks,
			users: currentState.users,
			status: currentState.status,
		};
	} else if (action.type === "ADD_BOOK") {
		currentState.books.push(action.data);
		return {
			books: currentState.books,
			users: currentState.users,
			status: currentState.status,
		};
	} else if (action.type === "ADD_USERS") {
		currentState.users.push(action.data);
		// console.log(currentState.users);

		return {
			books: currentState.books,
			users: currentState.users,
			status: currentState.status,
		};
	} else if (action.type === "LOGIN_STATUS") {
		currentState.status = true;
		return {
			books: currentState.books,
			users: currentState.users,
			status: currentState.status,
		};
	} else if (action.type === "LOGOUT") {
		currentState.status = false;
		console.log(currentState.status);

		return {
			books: currentState.books,
			users: currentState.users,
			status: currentState.status,
		};
	}
};

export default reducer;
