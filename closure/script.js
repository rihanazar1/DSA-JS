// // function temp(){
// //     let a = 1;
// //     return function temp2(){
// //         console.log(a++)
// //     }
// // }

// // const obj1 = temp() 
// // const obj2 = temp() 
// // const obj3 = temp() 

// // obj3()


// // function closer(a){
// //     return function closer1(b){
// //         return a + b
// //     }
// // }

// // console.log(closer(1)(2))



// // function greeter(){
// //     return function greeter1(){
// //         return a + b
// //     }
// // }

// // let greeter = greeter() 




// // function callAPI(){
// //     let count = 1
// //     return function(){
// //         if(count <= 3){
// //             return count++
// //         }else{
// //             return "API limit exceeded"
// //         }
// //     }
// // }

// // let ans = callAPI()
// // console.log(ans())
// // console.log(ans())
// // console.log(ans())
// // console.log(ans())




// // function createToggle() {
// //     let isOn = false; // Initial state

// //     return function toggle() {
// //         isOn = !isOn;
// //         console.log(isOn ? "ON" : "OFF");
// //     }
// // }

// // // Toggle function ban gaya
// // const toggleSwitch = createToggle();

// // // Use it
// // toggleSwitch(); // ON
// // toggleSwitch(); // OFF
// // toggleSwitch(); // ON
// // toggleSwitch(); // OFF


// // function password(a){

// // }


// // rate limiting
// // function abcd(){
// //     let allow = true;
// //     return function(){
// //         if(!allow){
// //             return;
// //         }
// //         else{
// //             console.log("hello world")
// //             allow = false;
// //             setTimeout(function(){
// //                 allow = true;
// //             }, 3000);
// //         }
// //     }
// // }

// // let fnc = abcd()


// function x(){
//     var a= 7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }

// var z = x()
// z() 


//Curring Example 

// function sendAutoEmail(to){
//     return function (subject){
//         return function (body) {
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
//         }
//     }
// }

// let step1 = sendAutoEmail("rihanazhar5@gmail.com")
// let step2 = step1("New Order Confirmation")
// step2("Hey Rihan, There is something for you")


// Debounce Example
// function debounce(fn, delay){
//     let timerid;

//     return function(...args){
//         clearTimeout(timerid); // cancle last call
//         timerid = setTimeout(() => {
//             fn(...args);
//         }, delay)
//     };
// }

// const search = (query) => {
//     console.log(`Searching for` , query)
// };

// const searchWithDebounce = debounce(search, 300)

// searchWithDebounce("Ha")
// searchWithDebounce("Hard")
// searchWithDebounce("Hard Java")
// searchWithDebounce("Hard JavaScript Question")



// Throttling Example

// function throttle(fn , delay){
//     let lastCall = 3;

//     return function(...args){
//         const now = Date.now();
//         if(now - lastCall < delay){
//             return;
//         }
//         lastCall = now;
//         return fn(...args);
//     }
// }

// function sendChatMessage(message){
//     console.log(`Sending Message`, message);
// }

// const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

// sendChatMessageWithSlowMode("hi")
// sendChatMessageWithSlowMode("hello")
// sendChatMessageWithSlowMode("how are you")
// sendChatMessageWithSlowMode("Whats are you doing")



//Call( ) , Apply( ) , Bind( )
// const person1 = {
//     FName : "Rihan",
//     LName : "Azar",
//     fullName : function (hometown, country){
//         return this.FName + " " + this.LName + " " + hometown + " " + country
//      }    
// }

// const person2 = {
//     FName : "Aman",
//     LName : "Surname",
// }

// //call
// console.log(person1.fullName.call(person2, "pune", "India")) //call method me jo first argument jo hai wo aise object jo denote krega jise hume call method me use krn hai.

// //Apply
// console.log(person1.fullName.apply(person2, ["pune", "India"]))

// //Bind
// const result = person1.fullName.bind(person2, "pune", "India")  //ye function return krta hai , jais eabhi result ek function hai 
// console.log(result)
// console.log(result())

