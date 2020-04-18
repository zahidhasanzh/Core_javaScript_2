// && || !

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false



var a = 10
var b = 20
var c = 50 
var d = 40

if(a > b && c > d){
    console.log('A is greater than B and C is greater than D');  
}
else{
    console.log('At least one condition false'); //At least one condition false
    
}

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = true

if (a > b || c > d) {
    console.log('A is greater than B and C is greater than D'); //true  
}
else {
    console.log('At least one condition false');

}

//
var check = !(a > b )
console.log(check); // true

var check = !!(a > b)
console.log(check); // false