import { BookManager } from "./bookManager.js";

let manager: BookManager = new BookManager();
// manager.displayRecords();

const optionSelected: HTMLSelectElement = document.getElementById(
	"dropdown"
)! as HTMLSelectElement;
const searchBar: HTMLInputElement = document.getElementById(
	"searchBar"
)! as HTMLInputElement;
const searchButton: HTMLButtonElement = document.getElementById(
	"search-button"
) as HTMLButtonElement;

const button = document.querySelector("#search-button")! as HTMLElement;
button.addEventListener("click", function (): void {
	manager.searchResult();
});

// function search():void{
//     if(optionSelected.value==='id_search'){
//         inputType.placeholder='Search By Id';
//         buttonChange.innerHTML='Search Id';
//         buttonChange.value='id';
//         let param:string=buttonChange.value;
//         const button = document.querySelector('#search-button')! as HTMLElement;
//         button.addEventListener('click', function():void{
//             manager.searchResult(param);
//         });
//     }else if(optionSelected.value==='title_search'){
//         inputType.placeholder='Search By Title';
//         buttonChange.innerHTML='Search Title';
//         buttonChange.value='name';
//         let param:string=buttonChange.value;
//         const button = document.querySelector('#search-button')! as HTMLElement;
//         button.addEventListener('click', function():void{
//             manager.searchResult(param);
//         });
//     }
//     else if(optionSelected.value==='author_search'){
//         inputType.placeholder='Search By Author';
//         buttonChange.innerHTML='Search Author';
//         buttonChange.value='author';
//         let param:string=buttonChange.value;
//         const button = document.querySelector('#search-button')! as HTMLElement;
//         button.addEventListener('click', function():void{
//             manager.searchResult(param);
//         });
//     }
// }

function search(): void {
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

optionSelected.addEventListener("change", search);

export default optionSelected;
