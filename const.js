const PI = 3.141592653;
// PI = 3; cannot be re-assigned
// const k; error, should be assigned at definition
if(1) {
  const a = 1;
}
// console.log(a); // REFERENCE ERROR: a is not defiend

const foo = {}; // points to a reference
foo.name = 'Qiushi';
console.log(foo.name); // Qiushi

// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
