// How Many Types of Functions in JS

// ES5 Function 

// 1️⃣ Named Function (Called by its name)

// function greet() {
//     return "Hello!";
// }
// console.log(greet()); // Call the function


// 2️⃣ Anonymous Function (Stored in a variable, called using the variable)

// const greet = function() {
//     return "Hello!";
// };
// console.log(greet()); // Call using variable name


// 3️⃣ Immediately Invoked Function Expression (IIFE) (Executes automatically)

// (function() {
//     console.log("IIFE executed!"); 
// })(); // No need to call separately


// 4️⃣ Constructor Function (Called using new to create an object)

// function Person(name) { //create with Pascel case
//     this.name = name;
// }
// const user = new Person("Rihan"); // Call with `new` keyword
// console.log(user.name); // Output: Rihan

//  ES6 Function 

// 5️⃣ Fat Arrow Function 
// const fun = ()=>{
//     console.log("Hello World")
// }


// _____________________________________________________

//.this keyword in javascript

// "use strict"

//.this in Global Space

// console.log(this); --> //globalObject - window , global. It is depends on where are you run the code. 

//for browser globalOject is window object and in node.js is it global.

//.this inside a function

// function x(){
//     //the value depends on strict / non strict mode. if you are in strict mode value is "undefined" and not in strict mode value is window object
//     console.log(this)
// };
// x()


//.this in non-strict mode - (this substitution)

//In non-strict mode the value of this keyword replaced with globalObject.

//.this inside object method

// const person = {
//     name: "Rihan",
//     greet: function () {
//       console.log(this.name);
//     }
//   };
  
//   person.greet(); // Output: Rihan


//.this keyword inside arrow function 

// const obj = {
//     name: "Rihan",
//     arrowFn: () => {
//       console.log(this);
//     }
//   };
  
//   obj.arrowFn(); // Output: window Object.


//.this keyword inside nested arrow function

// const obj2 = {
//     a : 20,
//     x : function (){
            //enclosing lexical context
//         const y = () => {
//             console.log(this)
//         }
//         y()
//     }
// }

// obj2.x() // output = {a : 20, x : f()}


//.this inside DOM elements => reference to HTML Elements


//What is method in JS?
// If function create in a object as a key it is called methods. 
  
  

// __________________________________________________

// console.log("start of script3")

// setTimeout(()=>{
//     console.log("This is from the Task Queue (setTimeout)")
// },0)

// Promise.resolve().then(() =>{
//     console.log("This is from the Microtask Queue (Promises)")
// })

// console.log("End of Script");


// function Person(fname, lname, pnumber){
//     this.fname = fname;
//     this.lname = lname;
//     this.pnumber = pnumber;

//     this.getName = function (){
//         console.log(this.fname, this.lname)
//     }
// }

// let person1 = new Person("Rihan", "Azhar", "9999999")
// person1.getName() 


// function add(a, b, cb){
//     let result = a + b;
//     cb(result);
// }


// add(2, 4, function(val){
//     console.log(val)
// })


