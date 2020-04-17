var str = '1000';
var n = 10;

console.log(str * n); //10000
console.log(str + n); //wrong output:100010

console.log(Number(str)); // 1000
console.log(Number.parseInt(str));//1000

console.log(n.toString()); // 10 string

console.log(Number(Infinity)); // Infinity --bcs don't conversion infinity
console.log(String(Infinity)); // Infinity --yes its working conversion string


//truthy value false value

console.log(Boolean(Infinity)); //true
console.log(Boolean(-Infinity)); //true

/* Examples of truthy values in JavaScript (which will be coerced to true
 in boolean contexts, and thus execute the if block): */
 /* 
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
 */

 console.log(Boolean("-42"));

 /* InJavaScript, there is a specialist list of following 7 values,
  which are called falsy values — they all evaluate to false in conditionals: */

/* 
the number 0
the BigInt 0n
the keyword null
the keyword undefined
the boolean false
the number NaN
the empty string "" (equivalent to '' or ``)
*/

console.log(Boolean(0)); // false
console.log(Boolean(null));// false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false

//truthy values string conversion
console.log(true); // true
var x = true;
console.log(x.toString()); // true -- it is string







 










