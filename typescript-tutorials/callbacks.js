// function add(x, y, callback) {
// 	setTimeout(() => {
// 		callback(x + y);
// 	}, 2000);
// }

// console.log("please wait....");
// add(2, 3, (result) => {
// 	console.log(result);
// });
// add(10, 15, console.log);

function printSum(x, y, callback) {
	setTimeout(() => {
		callback(x + y);
	}, 5000);
}

printSum(2, 5, (result) => console.log(result));
printSum(30, 686, console.log);

console.log("please wait...");
