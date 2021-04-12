function searchResult(htmlDoc) {
	const optionSelected = htmlDoc.getElementById("dropdown");
	const paramType = optionSelected.value;
	const searchText = htmlDoc.getElementById("searchBar");
	showData(searchText.value, paramType);
}

function search(optionSelected, searchBar, searchButton) {
	let placeholder, buttonText;
	if (optionSelected.value === "book_id") {
		placeholder = "Search By Id";
		buttonText = "Search Id";
	} else if (optionSelected.value === "book_name") {
		placeholder = "Search By Title";
		buttonText = "Search Title";
	} else if (optionSelected.value === "book_author") {
		placeholder = "Search By Author";
		buttonText = "Search Author";
	} else {
		return;
	}
	searchBar.placeholder = placeholder;
	searchButton.innerHTML = buttonText;
}

function httpRequest(id) {
	let xmlReq = new XMLHttpRequest();
	xmlReq.onload = () => {
		// console.log(xmlReq.response);
		console.log("onload called");
		let parser = new DOMParser();
		let htmlDoc = parser.parseFromString(xmlReq.response, "text/html");
		let element;

		if (id === "home-btn") {
			element = htmlDoc.getElementById("details_section");
			document.getElementById("content").innerHTML = element.innerHTML;
			showData();
			let optionSelected = document.getElementById("dropdown");
			let searchBar = document.getElementById("searchBar");
			let button = document.getElementById("search-button");
			let table = document.getElementById("book-details");
			table.addEventListener("click", (event) => {
				console.log(event.target.parentElement);
				let clicked = event.target;
				if (clicked.id === "span") {
					clicked = event.target.parentElement.parentElement.parentElement;
				} else if (clicked.id === "deleteId") {
					clicked = event.target.parentElement.parentElement;
				} else {
					return;
				}
				deleteBook(clicked.cells[0].innerHTML);
			});
			optionSelected.addEventListener("change", function () {
				console.log(optionSelected.value);
				search(optionSelected, searchBar, button);
			});
			button.addEventListener("click", function () {
				searchResult(document);
			});
		} else if (id === "add-books") {
			element = htmlDoc.getElementById("add-book-page");
			document.getElementById("content").innerHTML = element.innerHTML;
			let item;
			console.log(element);
			let add = document.getElementById("submit");
			add.addEventListener("click", function () {
				let name = document.getElementById("book_name").value;
				let author = document.getElementById("author").value;
				let rating = document.getElementById("rating").value;
				if (name !== "" && author !== "" && rating !== "") {
					item = {
						// id: "3",
						isbn: "",
						title: name,
						author: author,
						pages: "",
						price: "",
						rating: rating,
						votes: "",
						description: "",
						tags: [],
						series: "",
						seriesIndex: "",
						releaseDate: "",
						cover: "",
					};
					addBook(item);
				}
			});

			// else {
			// 	return;
			// }
		}
	};
	xmlReq.open("get", "http://127.0.0.1:5501/dist/index.html", true);
	xmlReq.send();
}

function searchMatch(searchParam, booksArray, paramType) {
	// searchParam = searchParam.toLowerCase();

	if (paramType === "book_id") {
		paramType = "id";
	} else if (paramType === "book_name") {
		paramType = "title";
	} else if (paramType === "book_author") {
		paramType = "author";
	}
	return booksArray[paramType].indexOf(searchParam) >= 0;
}

function showData(searchParams = "", paramType = "") {
	fetch("http://localhost:3000/books")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let table = document.getElementById("book-details");
			table.innerHTML = `<tr>
													<th>Book Id</th>
													<th>Isbn</th>
													<th>Title</th>
													<th>Author</th>
													<th>Rating</th>
													<th>Pages</th>
													<th>Votes</th>
													<th>Series</th>
													<th>Actions</th>
									</tr>`;

			for (let i = 0; i < data.length; i++) {
				let row;
				let displayFlag = true;
				if (
					searchParams.length > 0 &&
					paramType.length > 0 &&
					paramType !== "selected"
				) {
					if (!searchMatch(searchParams, data[i], paramType)) {
						displayFlag = false;
					}
				}
				if (displayFlag) {
					row = `<tr>
											<td>${data[i].id}</td>
											<td>${data[i].isbn}</td>
											<td>${data[i].title}</td>
											<td>${data[i].author}</td>
											<td>${data[i].rating}</td>
											<td>${data[i].pages}</td>
											<td>${data[i].votes}</td>
											<td>${data[i].series}</td>
											<td><button class="delete" id="deleteId" style="border: none; background-color: inherit;"><span class="material-icons" id="span" style="color: red;">delete</span></button>

											<span class="material-icons" style="color: royalblue;">remove_red_eye</span></td>
									</tr>`;
					table.innerHTML += row;
				}
			}
		});
}

function addBook(data) {
	fetch("http://localhost:3000/books", {
		// Adding method type
		method: "POST",

		// Adding body or contents to send
		body: JSON.stringify(data),

		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		// Converting to JSON
		.then((response) => response.json())

		// Displaying results to console
		.then((json) => console.log(json))
		.catch((err) => console.log(err));
}

function deleteBook(id) {
	fetch("http://localhost:3000/books/" + id, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			showData();
		});
}

document.getElementById("home-btn").addEventListener("click", function () {
	httpRequest("home-btn");
});
document.getElementById("add-books").addEventListener("click", function () {
	httpRequest("add-books");
});
