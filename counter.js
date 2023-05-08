var createCounter = function(num) {
	return function() {
		let to_return = num;
		num++;
		return to_return;
	}
}

const counter = createCounter(10)

for (let i = 0; i < 5; i++) {
	console.log(counter())
}
