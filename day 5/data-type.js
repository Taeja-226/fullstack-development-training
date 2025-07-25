//string
let name="Pooja";
console.log(name);
// let is keyword for variable declaration (Syntax= let variable_name = value)
// commets
//number
let age= 18;
console.log("my age is " + age);
//float
//javascript dynamic language (We don't have t0 define data type)
// in javascript we have console.log() function as print function in python
let height= 5.4;
console.log(height)
let istameezdar= false;
console.log(istameezdar);
// is js case sensitive?
let a = 3;
let A = 5;
console.log(a, A);
let x;
console.log(x);
//null
let y = null;
console.log(y);
//object data type
// let object_name={ key: value}
//key can only be string but value can be any data type
let person = {
    "name": "Pooja",
    "age": 18,
    "number": 123456678,
    "address": {
        "city": "Panipat",
        "village":"Dehra"
    }
}
console.log(person);
let address = {
    "key1":"string value",
    "key2": 1234,
    "Homeaddress":{"city":"Panipat"},
    "officeaddress":{ "city":"noida"}

}
console.log(address);
// print city of office address
console.log(address.Homeaddress.city)
console.log("my office city is " + address.officeaddress.city)
// array data type
let my_friends= ["Ashu","Deepak","Ishu","Madhav","Nitish"];
console.log(my_friends);
console.log(my_friends[0]);
console.log(my_friends[2]);
// my best friend is Nitish
console.log("My best friend is " + my_friends[4] + " & " + my_friends[1]);// string concatenation
console.log(`My best friends are  ${my_friends[1]} and ${my_friends[4]}`); // template literal
// Date is a class in js
let currentdate = new Date();
console.log(currentdate);
let myDOB= new Date("2006-11-25"); // format = year-month-date
console.log(myDOB);
console.log("DOB year " + myDOB.getFullYear()); // get year from date
console.log("DOB month " + (myDOB.getMonth() + 1)); // added 1 because month is 0 indexed in js
console.log("DOB day " + myDOB.getDay()); // get day from date
console.log("my expression " + 1 + 1); // concate string
console.log("my expression "+ (1 + 1)); // it first calculate then concate with string

1