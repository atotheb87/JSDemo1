var whoToGreet = 1;
var whoElseToGreet = 2;

console.log(whoToGreet + whoElseToGreet);

whoElseToGreet = 2;

console.log("Hello, " + whoToGreet + whoElseToGreet + "!");

// String
// Number
// TYPES

// TYPE1 + TYPE2
// NUMBER + NUMBER --> + is addition
// STRING + STRING --> + is concatenation
// Different Types
// STRING + STRING --> + is concatenation
// STRING + NUMBER --> It will just make it work
// I can't always convert a string to a number, but I can ALWAYS convert a number to  a string.
// STRING + (NUMBER converted to a STRING)
// STRING + STRING --> + is concatenation

// We call this Type Cooersion

//  for(var i = 0; i < 10; i = i + 1) is the same as i++
    for(var i = 0; i < 10; i++){
    console.log(i + ":Hello, " + whoToGreet + "!");
}