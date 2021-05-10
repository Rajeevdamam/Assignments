let array: any[];

async function deleteBooks(title: any) {
	return await fetch("http://localhost:4000/books/delete/" + title, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: `${localStorage.getItem("token")}`,
		},
	});
}

async function searchFunc(key: any, value: any) {
	if (key === "author" && value) {
		await fetch(`http://localhost:4000/api/books/by?${key}=${value}`)
			.then((response) => response.json())
			.then((data) => {
				array = data;
			});
	} else if (key === "title" && value) {
		await fetch(`http://localhost:4000/api/books/title?${key}=${value}`)
			.then((response) => response.json())
			.then((data) => {
				array = data;
			});
	} else if (key === "price" && value) {
		let splitted = value.split("-");
		await fetch(
			`http://localhost:4000/api/books/priced?${key}=${parseInt(
				splitted[0]
			)}&${key}=${parseInt(splitted[1])}`
		)
			.then((response) => response.json())
			.then((data) => {
				array = data;
			});
	} else {
		await fetch("http://localhost:4000/api/books")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				array = data;
			});
	}
	return array;
}

async function addBook(data: any) {
	console.log("data", data);
	await fetch("http://localhost:4000/books", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: `${localStorage.getItem("token")}`,
		},
	});
}

async function signup(data: any) {
	console.log("data", data);
	await fetch("http://localhost:4000/signup", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
}

let status: any;
async function login(data: any) {
	await fetch("http://localhost:4000/login", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.status) {
				status = res.status;
				localStorage.setItem("token", res.token);
			}
		});
	return status;
}

let idData: any;
async function bookDataById(id: any) {
	await fetch("http://localhost:4000/books/" + id)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			idData = data;
		});
	return idData;
}

export { addBook, deleteBooks, bookDataById, searchFunc, login, signup };
