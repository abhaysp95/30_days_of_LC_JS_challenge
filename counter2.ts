class CounterObjectTS {
	_init: number;
	_output: number;

	constructor(x: number) {
		this._init = x;
	}

	increment(): number {
		return ++this._output;
	}

	decrement(): number {
		return --this._output;
	}

	reset(): number {
		return this._output = this._init;
	}
}

const counterObjTS = new CounterObjectTS(5)
console.log(counterObjTS.increment())
console.log(counterObjTS.increment())
console.log(counterObjTS.reset())
console.log(counterObjTS.decrement())
