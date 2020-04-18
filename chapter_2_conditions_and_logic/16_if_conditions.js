/* if statement is the most simple decision making statement. It is used to decide
 whether a certain statement or block of statements will be executed or not i.e if
a certain condition is true then a block of statement is executed otherwise not. */

var a = 10;
var b = 20;

//a > b true or false

if(a > b){
    console.log('A is greater than B');  
}
if(a < b){
    console.log('B is greater than A');  
}

// even or odd

var n = 5;

if(n % 2 == 0){
    console.log( n + ' is even number');
}
if(n % 2 == 1){
    console.log( n + ' is odd number');  
}