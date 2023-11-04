//String declaration 
/*
let firstName = 'Shiva';
let lastName = "Akira";
//Number declaration
const valueOne = 1;
const valueTwo = 30;
// Boolean declaration
let rainingToday = true;
let rainingTomorrow = false;
// Undefined declartion
const myIdentity = undefined;
// Null declaration
const myNull = null
// Symbol
const mySymbol = Symbol("mySymbol");
console.log(typeof firstName); // "string"
console.log(typeof valueOne); // "number"
console.log(typeof rainingTomorrow); // "boolean"
console.log(typeof myIdentity); // "undefined"
console.log(typeof myNull); // "object"
console.log(typeof mySymbol); // "symbol"


//Exercise
/* 
console.log(10+"20");
console.log(10-"20");
console.log("Shiva"-"Akira");
console.log("10"-"20");
console.log(" "+0)
console.log("Shiva"+30)
console.log(true+true);
console.log(true+false);
console.log(false+false);
console.log(false-true);
*/


//Number Conversion

//Implicit Conversion
console.log("5"+2); //52


let number="33"
//Explicit Conversion
let value=Number("333");
console.log(typeof (value))
console.log(typeof number);

let isRaining=true;
let isShaining=false;
console.log(Number(isRaining)) // returns 1
console.log(Number(isShaining)) // return 0

let status=undefined;
console.log(Number(undefined)); //NaN

let a=Number(null);
console.log(a);

let b=1;
let c=0;
console.log(Number(b))
console.log(Number(c))
let aa=2
console.log(typeof aa)