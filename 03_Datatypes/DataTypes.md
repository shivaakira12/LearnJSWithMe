# Data Types in Javascript 

- We know that Javascript is dynamic and weak typed language which means there no compulsory declaration of type of data.
- JavaScript is called a weakly typed language because it does not require you to specify the data type of a variable before you assign a value to it. The data type of a variable is automatically determined by the value that is assigned to it.


JavaScript has 8 data types. They are:

- String: A string is a sequence of characters which is enclosed with single or double quotes.
- Number: A number is a numeric value. It can have integers or floating point values
- BigInt: A BigInt is a numeric primitive that can represent integers with arbitrary magnitude.
- Boolean: A Boolean is a logical value that can be either true or false.
- Undefined: An undefined value is a value that has not yet been assigned or has been deleted.
- Null: A null value is a special value that indicates the absence of a value.
- Symbol: A Symbol is a unique value that is used to identify objects.
- Object: An object is a collection of properties and methods.

- Primitive data types are immutable, meaning that they cannot be changed once they are created. Non-primitive data types, such as objects, are mutable, meaning that they can be changed after they are created.

```
For Example 
```
```js
//String declaration 
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
// Symbol declartion
const mySymbol = Symbol("mySymbol");
console.log(typeof firstName); // "string"
console.log(typeof valueOne); // "number"
console.log(typeof rainingTomorrow); // "boolean"
console.log(typeof myIdentity); // "undefined"
console.log(typeof myNull); // "object"
console.log(typeof mySymbol); // "symbol"
```

### Interview Questions 

1. What is null vs undefined in Javascript ?
- Undefined means the variable is declared but not assigned.
```js
For example :
let myStatus; // undefined
```
- Null is an assignment value that explicitly means nothing. It is often used to indicate that a variable does not have a value or that a function does not return a value
```js
For example :
let mySalary=null; // mySalary now has the value null
```
- It is important to note that null and undefined are not the same thing. However, they are both falsy values, which means that they evaluate to false in Boolean expressions.

2. What are the falsy values in Javascript ?
- We have 5 falsy values in Javascript. They are undefined,null,0,"",Nan,false.

3. What is NaN in Js ?
- NaN stands for Not - a - Number.
- It is a property of Global Object.


### Exercise - 1 :

1) 10 + " 20 " -> 1020
2) 10 - "20" -> -10
3) "Shiva" - "Akira" -> NaN
4) "10" - "20" -> -10
5) " " + 0 -> 0
6) "Shiva" + 30 -> Shiva30
7) true + true -> 2

- Here the we consider true = 1 and false = 0;


### Datatype Conversion 

1) Number :
```js
//Implicit Conversion
console.log("5"+2); //52


let number="33"
//Explicit Conversion
let value=Number("333");
console.log(typeof (value))
console.log(typeof number);

let isRaining=true;
let isShaining=false;
let b=1;
let c=0;
console.log(Number(b)) //1
console.log(Number(c)) //0
console.log(Number(isRaining)) // returns 1
console.log(Number(isShaining)) //return 0

let status=undefined;
console.log(Number(undefined)); //NaN

let a=Number(null);
console.log(a); //0
```