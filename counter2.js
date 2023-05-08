// https://leetcode.com/problems/counter-ii/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo

var createCounter = function(num) {
	let init = num
	return {
		increment: function() {
			return ++num;
		},
		decrement: function() {
			return --num;
		},
		reset: function() {
			return num = init;
		}
	};
}

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
