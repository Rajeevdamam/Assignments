var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
	alert("Hello");
});

var heading1 = document.getElementById("heading1");
heading1.addEventListener("mouseover", function () {
	heading1.style.color = "red";
});

heading1.addEventListener("mouseout", function () {
	heading1.style.color = "black";
});

// heading1.innerText="Main heading"

document.addEventListener("keypress", function (event) {
	console.log("Key pressed is: " + event.keyCode);
});

var innerDiv = document.getElementById("inner");
var outerDiv = document.getElementById("outer");

var count = 0;
innerDiv.addEventListener("click", function () {
	count++;
	if (count % 2 != 0) {
		innerDiv.style.backgroundColor = "tomato";
		outerDiv.style.backgroundColor = "aqua";
	} else {
		innerDiv.style.backgroundColor = "aqua";
		outerDiv.style.backgroundColor = "tomato";
	}
});
