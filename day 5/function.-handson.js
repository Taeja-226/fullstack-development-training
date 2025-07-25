// function is a block of code designed to perform  a particular task
// function payFee(payment) -> payFee is afunction that take payment
// function is a keyword (syntax= function_name(parameters))
function greet(){
    console.log("Hello , my name is Pooja");
     console.log("I am learning JavaScript functions");
}
greet ();
// function with parameters
function greet_with_name(Name){
    console.log("Hello, My name is " + Name);
}
greet_with_name("Pooja");
function square(n){
    console.log( "The square of " + n + " is " + (n**2));
}
square(4)
square(6)
function sub(a,b){
   return a-b;
}
let x = sub(4,3);
console.log( "The subtraction is " + x);
function div(a,b){
    return a/b;
}
let y = div(0,2);
console.log("The division is " + y);