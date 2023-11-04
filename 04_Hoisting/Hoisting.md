# Hoisting in Javascript ?
- Hoisting is a phenomena of moving the variables and funtion declarations to top of their scropes before code execution.
- This means that variables and functions can be used before they are declared in the code.
- Memory phase which is present in Execution context plays vital role in Hoisting.
> For Example
```js
//Variable Hoisting
console.log(myName);
var myName="Shiva";
//Function Hoisting
getStatus()
function getStatus(){
    console.log("Single");
}
```
> Output
```
undefined

Single
```
## Variable Hoisting 
- Incase of Variable hoisting the above example code is executed from top and store the placeholder for myName as undefined in the memory.
That's why we get the output as `undefined` when we try to log the value before declaration.
## Function Hoisting 
- While executing the function which we called the before declaration, whole function in stored in the memory phase.

## Hoisting in case of Arrow Function.
- Let's consider the below example.
> For Example 
```js
getmyStatus();
var getmyStatus=
()=>
    console.log("Single");
```
- Here we will get the error saying `getmyStatus is not a function.`
- In case arrow function, Inside the execution context getmyStatus is treated as variable. And getmyStatus is assigned as undefined initially.

## Hoisting in case of Function Expression
- 
> For Example :
```js
console.log(foo); // undefined

var foo = function() {
  console.log("This is a function expression assigned to 'foo'.");
};
```
- In case of function expression, foo is created as variable so inside the memory foo is stored as undefined.
