{
  let a = 10;
  var b = 1;
}

console.log(a); // undefined
console.log(b); // 1


var a = [];
for(var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[6](); // 10

for(let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[6](); // 6


console.log(foo);
console.log(bar);
var foo = 1;
let bar = 2; // no hoist


// temporal dead zone
var tmp = 123;
if(true) {
  tmp = 456;
  let tmp;
}

function barr(x = y, y = 2) {
  console.log(x); // undefined
  console.log(y); // 2
}
barr();

var tmp2 = 1;
function f() {
  console.log(tmp2);
  if(false) {
    var tmp2 = "Hello";
  }
}
f(); // undefined (cause tmp2 in if-statement got hoisted)

var s = "hello";
for(var j = 0; j < s.length; j++) {
  console.log(s[j]);
}
console.log(j); // 5 (cause j's got hoisted, only function&global scope in es5)



function f1() {
  let n = 5;
  if(true) {
    let n = 10;
  }
  console.log(n);
}
f1(); // 5
{{{{let insane = 'Hello World'}}}}

{
  let a = 'secret';
  function f2() {
    return a;
  }
}
// console.log(f2());  f2 is not defined

let f3;
{
  let a = 'secret';
  f3 = function() {
    return a;
  }
}
console.log(f3()); // secret

function f4() {
  console.log('outside');
}

(function() {
  if(false) {
    function f4() {
      console.log('inside');
    }
  }
  f4() // es6: outside; es5: inside (hoist)
}())
