# What is Javascript ?
- Javascript is a scripting language which is used to make the interactive and dynamic websites.
- Javascript adds the behaviour to the website. For example : performing the clickable actions and showing the popups etc.
- Javascript improves the user experience by converting the webpage from static to interactive one.
- Javascript is single threaded, synchronous programming language by default, but we can also use the asynchronous code.
- Javascript is also used to develop the server - side applications using Node Js.
- Javascript is dynamically typed language. (Dynamically typed : the programming language where the datatype is not compulsory).
- Javascript was developed by Brenden Eich and created the spidermonkey firefox js engine while working in netscafe.
- Now - a - days modern browsers Javascript is treated as both interpreted and compilation language based Js Engine.


# Why Javascript is Important ?

- JavaScript is important because it is the only programming language that is natively supported by all major web browsers. This means that JavaScript can be used to create web applications that can be used by anyone, regardless of what browser they are using.
- Most of the websites are uses Javascript.
- We can use Javascript in Back - end development. 

# How Javascript Code Works and JS Engine Works?

- The main responsible to run the javascript code is the browser.
- Every browser contains the JS runtime environment and it contains all the elements to run JS code.
- It is combination of JS engine, set of api's, callback queue , event loop etc.
- Js engine is not a machine. It is a myth. Its normal code which is written by some engineer.
- Whenever we write the code, the JS Engine receives the code as input and it goes the below three stages.

    1. Parsing : In this stage the js code is broken into tokens. There is a syntax parser which takes the code and converts into AST (Abstract Syntax Tree).
    2. Compilation : The AST is converted into byte code with the help of JIT Compilation(Just in Time) and here the both Interpreter and Compilation is used.
    3. Now the Byte code is goes to Memeroy heap and as well as call back for further process.

The fastest Js Engine is `Google's V8` Engine in which Google used Iginition as Interpreter and Turbofan as optimizing compiler which helps in make code run very fast.
