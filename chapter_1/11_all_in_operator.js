//arithmetic operator
// + - * / % ++ --

//modules(%) operator

// var a = 10;
// var b = 3;
// console.log(a%b); // 1

var a = 10;
var b =5;
console.log(a%b); // 0

//incremental
//pre incremental - post incremental

// console.log(++a); // 11 --pre incremental
console.log(a++); // 10 -- post incremental

// console.log(--b); // 4 --pre decremental 

console.log(b--); // 5 --post decremental

//Assignment operator
/* An assignment operator assigns a value to its left operand based
 on the value of its right operand. */

 var a = 10;
 var b = 20;

//a = a+b;
a += b //sort
console.log(a); // 30

a -= b //sort
console.log(a); //10

a *= b //sort
console.log(a); //200

a /= b //sort
console.log(a); //10

a %= b //sort
console.log(a); //10

//comparison operator
//JavaScript logical operators and comparison operators test for true or false values.

//equal to
// var x = 10;
// var y = 20;
// console.log(x==y); //false

//equal to
var x = 20;
var y = 20;
console.log(x==y); //true

//not equal
var x = 10;
var y = 20;
console.log(x != y); // true

console.log(x > y); //false

console.log(x < y); //true

console.log(x >= y); //false
console.log(x <= y); //true

x = 20;

console.log(x >= y); //true
console.log(x <= y); //true

//Double Equals vs. Triple different
var c = '10';
var d = 10;
console.log(c == d); //true
console.log(c === d); //false

console.log(c !==d);

//logical operator
/* 
&&
||
!
*/

//Bitwise operator
/*Bitwise AND	a & b
  Bitwise OR	a | b
  Bitwise XOR	a ^ b
  Bitwise NOT	~ a
  Left shift	a <<
  Sign-propagating right shift	a >> b
  Zero-fill right shift	a >>> b
*/

//typeof operator
console.log(typeof('string')); //string
console.log(typeof(50)); //number




 















