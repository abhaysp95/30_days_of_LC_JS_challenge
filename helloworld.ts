// typescript files will ofcourse contain solution in typescript but also much more than required solution

const helloWorld = () => {
	return function(): string {
		return "Hello World";
	};
}

const hello: () => string = helloWorld()
hello()
