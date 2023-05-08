const createCounterTS = (x: number) => {
	return (): number => {
		let temp = x;
		x++;
		return temp;
	}
}


const counterTS: () => number = createCounter(10)

for (let i = 0; i < 5; i++) {
	console.log(counterTS())
}
