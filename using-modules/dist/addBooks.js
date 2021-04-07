import { BookManager } from "./bookManager.js";
let manager = new BookManager();
function add() {
    manager.addBook();
}
const addButton = document.getElementById("submit");
addButton.addEventListener("click", add);
