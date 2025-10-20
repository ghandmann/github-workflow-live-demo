function countTo(targetNumber) {
	if(targetNumber < 0) {
		throw new Error("no negative values!");
	}

	for(let i = 0; i < targetNumber; i++) {
		console.log(i);
	}
}

countTo(5);

countTo(-1);
// countTo("Peter");
