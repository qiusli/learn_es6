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
