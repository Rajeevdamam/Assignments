function getRequestedData() {
	fetch("http://localhost:3000/books")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let container = document.getElementsByClassName("grid-container");
			for (let i = 0; i < data.length; i++) {
				let card = `<div>
                    <p>${data[i].id}</p>
                    <p>${data[i].title}</p>
                    <p>${data[i].author}</p>
                </div>`;
				console.log(card);
				container.innerHTML += card;
			}
		});
}

document.getElementById("getData").addEventListener("click", getRequestedData);
