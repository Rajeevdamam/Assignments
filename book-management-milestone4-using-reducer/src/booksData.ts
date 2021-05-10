const searchBook = (params: any, books: any) => {
	let searchedArray = [];
	if (params.value && params.type) {
		for (let i = 0; i < books.length; i++) {
			if (books[i][params.type].toLowerCase().indexOf(params.value) >= 0) {
				searchedArray.push(books[i]);
			}
		}
		console.log(`seacrhedArray`, searchedArray);

		return searchedArray;
	} else {
		console.log(`books`, books);
		return books;
	}
};

export { searchBook };
