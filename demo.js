function countTo(targetNumber) {
	if(targetNumber < 0) {
		console.log("You are incompetend. Negative values not supported!");
		return;
	}

	for(let i = 0; i < targetNumber; i++) {
		console.log(i);
	}
}

hallo

// countTo(7);

countTo(-100);
// countTo("Peter");
