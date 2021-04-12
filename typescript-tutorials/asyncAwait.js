let delay = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function test() {
	console.log("Testing delay");
	await delay(5000);
	console.log("Done");
}

test();
