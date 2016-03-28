'use strict';

// node --harmony_destructuring app2.js

var [a, b, c] = [1, 2, 3, 4];
console.log(a, b, c);

var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz);

var [,,third] = ['foo', 'bar', 'baz'];
console.log(third);

const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

let [name, age = 27] = ['Qiushi'];
console.log(name, age);


// object destructuring

let {country, state} = {state: 'UT', country: 'U.S.'};
console.log(JSON.stringify(country), JSON.stringify(state));

var o = {p: ["Hello", {y: "World"}]};
var {p:[x, {y}]} = o;
console.log(x, y);

let {m = 3} = {};
console.log(m);

const {x1, y1 = 5} = {x1: 1};
console.log(x1, y1);


function example1() {
  return [1, 2, 3];
}
var [k1, k2, k3] = example1();
console.log(k1, k2, k3);

function example2() {
  return {foo: 11, bar: 22};
}
var {foo, bar} = example2();
console.log(foo, bar);


var map = new Map();
map.set('first', 'Hello');
map.set('second', 'World');

for(let [key, value] of map) {
  console.log(key + " is " + value);
}
