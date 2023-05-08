// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9

const map = function(arr, fn) {
	let resArray = new Array(arr.length);
	for (let i = 0; i < arr.length; i++) {
		resArray[i] = fn(arr[i], i);
	}
	return resArray;
};

// examples
const plusone = function(n) {
	return n + 1;
}

const plusI = function(n, i) {
	return n + i;
}

const constant = function() {
	return 42;
}

let arr = [1, 2, 3];
let result = map(arr, plusone);
result.forEach(x => console.log(x));
console.log("*******");
arr = [1, 2, 3];
result = map(arr, plusI);
result.forEach(x => console.log(x));
console.log("*******");
arr = [10, 20, 30];
result = map(arr, constant);
result.forEach(x => console.log(x));
