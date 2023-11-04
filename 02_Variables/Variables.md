# What is Variable in Programming ?

- Varibles are the storing locations where we can store the different type of values such as Numbers, Strings, Objects and Boolean values etc.

## Variables in Javascript ?

- To create a variable in JavaScript, you use the var, let, or const keyword. The var keyword is the oldest and least restrictive way to declare a variable, but it is no longer recommended to use it. The let keyword is the preferred way to declare a variable, as it allows you to control the scope of the variable. The const keyword is used to declare a constant variable, which cannot be changed once it is assigned a value.

- var is globally scoped while let and const are block scoped.
- var can updated and re-declared within its scope.
```javascript
var name="shiva"
var name="akira"
console.log(name);
```
```
Output 
akira
```
- let can be updated but not re-declared.
```js
let a=10
a=30;
{
    a=40
    let b=100
    console.log(b);
    console.log(a);
}
console.log(a);
console.log(b); //ReferenceError: b is not defined
```
```
Output 
100
40
40
```
- const can neither updated nor re-declared.
```js
const bike="Duke350"
bike="Duke200" //TypeError: Assignment to constant variable.
console.log(bike); 
```

### 🚀  Interview Question  ?

Question :
What  are the var , let and const in Javascript ?

1. var , let , const are the variable declarations we use in Javascript.
2. var is globally scoped and it is redeclared and reassigned and it is a function scope
3. let and const are blocked scope which means we can declared the variable inside the block and use it inside the block only.
4. let can be reassigned but not redeclared.
5. const is block scope and we cannot neither redeclared and reassigned the value to const. once the variable is declared in const we cannot modify.

### 🚀  MCQs
Q1: Variables defined with let cannot be redeclared.

Select True or False.

 True

 False

A : True
You cannot do this
let a=34;
let a=56;

Q2: Select whether the below JS code is valid or not:
```js
let x = "Hello Peter Doe";
let x = 0;
```
 
 1) Valid

 2) Invalid

A : In Javascript, the variables defined with let cannot be redeclared. Therefore the given code will throw - 'Uncaught SyntaxError: Identifier 'x' has already been declared'.



Q3: Select whether the below JS code is valid or not:
```js
var x = "John Doe";
var x = 0;
```
 1) Valid

 2) Invalid

A : Variables defined with var can be redeclared. Therefore the given javascript code is valid.

Q4: Variables defined with const cannot be Reassigned.

Select True or False:

 True
 False


A : You cannot reassign a value in a const variable i.e. you cannot do this (as shown below):

const x=56;

x=x+10;

You will get - Uncaught TypeError: Assignment to constant variable.


Q5: Variables defined with const can be Redeclared.

Select True or False:


 True

 False


A: Variables defined with const cannot be Redeclared. i.e. you cannot do this (as shown below)

const x=56;

const x=45;

you will get - Uncaught SyntaxError: Identifier 'x' has already been declared





Q6: Select whether the below JS code is valid or not:
```js
const PI = 3.141592653589793;
PI = 3.14;
```


 1) Valid

 2) Invalid



A : The given JS code is invalid because you are reassigning a value in a const variable. You will get - Uncaught TypeError: Assignment to constant variable.






Q7: Select whether the below JS code is valid or not:
```js
const PI = 3.141592653589793;
PI = PI + 10;
```


 1) Valid

 2) Invalid


A: The given JS code is invalid because you are reassigning a value in a const variable. You will get - Uncaught TypeError: Assignment to constant variable.






Q8: A value must be assigned to a const variable when it is declared

Select True or False:



 True

 False



The given statement is true. A const variable must be initialized with some value in the declaration statement i.e. you cannot write this (as shown below)
```js
const x;
x = 3;
```
A : You will get - Uncaught SyntaxError: Missing initializer in const declaration.


Q9: Select whether the below JS code is valid or not:
```js
const PI;
PI = 3.14159265359;
```
 1) Valid

 2) Invalid



A: The given JS code is invalid. A const variable must be initialized with some value in the declaration statement.

You will get - Uncaught SyntaxError: Missing initializer in const declaration.






Q10: Select whether the below JS code is valid or not:
```js
const cars = ["Ford", "Honda", "BMW"];
cars[0] = "Nissan";
```

 1) Valid

 2) Invalid


A : The given JS code is a valid code. You can change an element of a const array.

Q11: Select whether the below JS code is valid or not:
```js
const cars = ["Ford", "Honda", "BMW"];
cars = ["Toyota", "Skoda", "Audi"];
```
 1) Valid

 2) Invalid


A : The given JS code is an invalid code. You cannot reassign the array.


Q12: Select whether the below JS code is valid or not:
```js
var x = 2;
var x = 3;
```


 1) Valid

 2) Invalid

A : Variables defined with var can be redeclared. Therefore, the given JS code is a valid code.

Q13: Select whether the below JS code is valid or not:
```js
const x = 2;

{
const x = 3;
}

{
const x = 4;
}
```
 1) Valid

 2) Invalid

A : Redeclaring a variable with const, in another scope, or in another block, is allowed.

Q14: What will be the console output of the below javascript code?
```
const a=34;
let b=56;
console.log(a=b);
```

1) Uncaught TypeError: Assignment to constant variable.

 2) 56

 3) false

 4) 34

A : You will get - Uncaught TypeError: Assignment to constant variable because you are reassigning a value in a const variable.
