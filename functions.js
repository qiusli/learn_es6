function push(arr, ...items) {
	items.forEach(function (item) {
		arr.push(item);
		console.log(item);
	});
}
var a = [];
push(a, 1, 2, 3);
console.log(a); // 1, 2, 3

// default value
function log(x, y = 'World') {
	console.log(x, y);
}
log('Hello');

function foo({
	x,
	y = 5
}) {
	console.log(x, y);
}
foo({}); // undefined, 5
foo({
	x: 1 // 1, 5
});
foo({
	x: 1,
	y: 2
}); // 1, 2
// foo(); typeerror

function fetch(url, {
	body = '',
	method = 'GET',
	headers = {}
}) {
	console.log(method);
}
fetch('http://abc.com', {}); // GET
// fetch('http://abc.com'); // typeerror

function fetch2(url, {
	method = 'GET'
} = {}) {
	console.log(method);
}
fetch2('http://abc.com'); // GET

function m1({
	x = 0,
	y = 0
} = {}) {
	console.log(x, y);
}

function m2({
	x,
	y
} = {
	x: 0,
	y: 0
}) {
	console.log(x, y);
}
// 只有在函数参数没有提供或者缺省的情况下默认值才会生效
m1(); // 0, 0
m2(); // 0, 0
m1({
	x: 3,
	y: 3
}); // 3, 3
m2({
	x: 3,
	y: 8
}); // 3, 8
m1({
	x: 3
}); // 3, 0
m2({
	x: 3
}); // 3, undefined
m1({}); // 0, 0
m2({}); // undefined, undefined
m1({
	z: 3
}); // 0, 0
m2({
	z: 3
}); // undefined, undefined

function f(y = x) {
	var x = 2;
	console.log(y);
}
// f(); // x is not defined

// 规定必须提供某个参数,否则报错
function throwIfMissing() {
	throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
	return mustBeProvided;
}
// foo(); throw error


function add(...values) {
	let sum = 0;
	for(let val of values) {
		sum += val;
	}
	return sum;
}
console.log(add(2, 3, 5)); // 10

function sortNumbers() {
	return Array.prototype.slice.call(arguments).sort();
}

// is equivalent to

const sortNumbers2 = (...numbers) => numbers.sort();

// spread
console.log(...[1, 2, 3]); // 1, 2, 3
console.log(...
	'hello'); // h e l l o


var f = v => v;
// is equivalent to
var f1 = function (v) {
	return v;
};

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true

// 箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
// this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
function foo2() {
	setTimeout(() => {
		console.log('id: ', this.id); // 42
	}, 100);
}
var id = 21;
foo2.call({
	id: 42
});

function Timer() {
	this.seconds = 0;
	setInterval(() => this.seconds++, 1000);
}

// var timer = new Timer();
// setTimeout(() => console.log(timer.seconds), 3100); // 3


// tail recursion 优化
function factorial(n, total = 1) {
	if(n === 1) {
		return total;
	}
	return factorial(n - 1, n * total);
}
console.log(factorial(5)); // 120