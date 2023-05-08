// https://leetcode.com/problems/counter/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo

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
