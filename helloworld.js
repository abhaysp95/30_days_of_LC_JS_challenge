// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

var createHelloWorld = function() {
	return function(...args) {
		return "Hello, World"
	}
}

const f = createHelloWorld()
console.log(f())
