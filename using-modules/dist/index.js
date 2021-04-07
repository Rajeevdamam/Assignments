var _a, _b;
import { BookManager } from "./bookManager.js";
let manager = new BookManager();
manager.displayRecords();
function myFunction() {
    var x = document.getElementById("details_section");
    var y = document.getElementById("add-book-page");
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
    var x = document.getElementById("details_section");
    var y = document.getElementById("add-book-page");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
    }
    // else {
    // 	y.style.display = "none";
    // 	x.style.display = "block";
    // }
}
(_a = document.getElementById("home-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", myFunction);
(_b = document.getElementById("add-books")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", myFunction1);
