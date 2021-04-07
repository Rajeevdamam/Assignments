import { BookManager } from "./bookManager.js";

let manager: BookManager = new BookManager();
manager.displayRecords();

function myFunction() {
	var x = document.getElementById("details_section")! as HTMLElement;
	var y = document.getElementById("add-book-page")! as HTMLElement;
	if (x.style.display === "none") {
		x.style.display = "block";
		y.style.display = "none";
	}
	// else {
	// 	y.style.display = "block";
	// 	x.style.display = "none";
	// }
}

function myFunction1() {
	var x = document.getElementById("details_section")! as HTMLElement;
	var y = document.getElementById("add-book-page")! as HTMLElement;
	if (y.style.display === "none") {
		x.style.display = "none";
		y.style.display = "block";
	}
	// else {
	// 	y.style.display = "none";
	// 	x.style.display = "block";
	// }
}

document.getElementById("home-btn")?.addEventListener("click", myFunction);
document.getElementById("add-books")?.addEventListener("click", myFunction1);
