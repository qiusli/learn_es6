var foo = "foo";
var bar = {
	foo
};
console.log(bar); // {foo: 'foo'}

function f(x, y) {
	return {
		x,
		y
	};
}
console.log(f(0, 1)); // {x: 0, y: 1}

var age = 27;
var person = {
	name: "Nick",
	age,
	talk() {
		console.log('I dont always talk shit');
	}
};
console.log(person.age); // 27
person.talk(); // I dont always talk shit

// same-value equality
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); // false
console.log(Object.is(NaN, NaN)); // true

var target = {
		a: 1
	},
	source1 = {
		b: 2
	},
	source2 = {
		c: 3
	},
	source3 = {
		d: {
			value: 4
		}
	};
// shallow copy of d
Object.assign(target, source1, source2, source3);
console.log(target); // {a: 1, b: 2, c: 3, d: {value: 4}}
source3.d.value = 100;
console.log(target); // {a: 1, b: 2, c: 3, d: {value: 100}}