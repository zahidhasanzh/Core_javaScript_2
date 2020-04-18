var n = 5
var str = ''

if(n % 2 == 0){
    str = 'even'
}
else{
    str = 'odd'
}
console.log(str); //odd

//condition ? exprIfTrue : exprIfFalse

var result = n % 2 == 0 ? 'even':'odd'
console.log(result); //odd
