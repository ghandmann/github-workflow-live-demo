function countTo(targetNumber) {
	if(targetNumber < 0) {
		console.log("You are stupid. Negative values not supported!");
		return;
	}

	for(let i = 0; i < targetNumber; i++) {
		console.log(i);
	}
}

// countTo(7);

countTo(-100);
// countTo("Peter");
