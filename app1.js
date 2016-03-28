'use strict';

var a = [];
for(var i = 0; i < 10; i++) {
  var c = i;
  a[i] = function() {
    console.log(c);
  };
}
a[6](); // 9

///

for(var i = 0; i < 10; i++) {
  let c = i;
  a[i] = function() {
    console.log(c);
  };
}
a[6](); // 6

///

(function f1() {
  let n = 5;
  if(true) {
    let n = 10;
  }
  console.log(n);
})(); // 5

///

function f() {
  console.log('I am outside');
}
(function() {
  if(false) {
    function f() {
      console.log('I am inside');
    }
  }
  f();
}()); // depends on es6 or es5

///
