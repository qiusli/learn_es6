var [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(baz); // 3

let [,,third] = [1, 2, 3];
console.log(third); // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [x, y, ...z] = ['a'];
console.log(x); // a
console.log(y); // undefined
console.log(z); // []

let [a1, b1, c1] = new Set(["a", "b", "c"]);
console.log(c1); // c

let [delta = true] = []
console.log(delta); // true

let [tmp = 1] = [undefined];
console.log(tmp); // 1

[tmp = 2] = [3];
console.log(tmp); // 3

[tmp = 4] = [null];
console.log(tmp); // null (only when the rhs === undefined it will then has no effect)

function f() {
  return 'aaa';
}
let [k = f()] = ['abc'];
console.log(k); // abc (f() will not be executed if k can get value from rhs)

var {foo1, bar1} = {foo1: "aaa", bar1: "bbb"};
console.log(foo1); // aaa
console.log(bar1); // bbb

//what actually happen is
var {foo2: fv, bar2: bv} = {foo2: "aaa", bar2: "bbb"};
console.log(fv, bv); // aaa, bbb

const [a2, b2, c2, d2, e2] = 'hello';
console.log(a2, b2, c2, d2, e2); // h, e, l, l, o

// parameter is an object
function move({x = 0, y = 0} = {}) {
  console.log([x, y]);
  return [x, y];
}
move({x: 3, y: 8}); // 3, 8
move({x: 3}); // 3, 0
move({}); // 0, 0
move(); // 0, 0

var jsonData = {
  id:42,
  name: "Qiushi",
  age: 27
};
let {id, name, age} = jsonData;
console.log(id, name, age);
