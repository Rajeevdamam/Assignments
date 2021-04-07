let table = document.getElementById("book-details");
// function deleteFunc(index: any) {
// 	let i = index.parentNode.parentNode.rowIndex;
// 	table.deleteRow(i);
// }
import { BookManager } from "./bookManager.js";
let manager = new BookManager();
// let deleteButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
// 	".delete"
// )! as NodeListOf<HTMLButtonElement>;
// deleteButtons.forEach((item) => {
// 	item.addEventListener("click", (event: any) => {
// 		console.log("elements", item.parentNode?.parentNode);
// 		if (item === event.target) {
// 			manager.deleteFunc(event.target);
// 		} else {
// 			manager.deleteFunc(event.target.parentElement);
// 		}
// 	});
// });
table.addEventListener("click", (event) => {
    let clicked = event.target;
    if (clicked.id === "span") {
        clicked = event.target.parentElement.parentElement.parentElement;
    }
    else if (clicked.id === "deleteId") {
        clicked = event.target.parentElement.parentElement;
    }
    else {
        return;
    }
    manager.deleteFunc(clicked);
});
