// function temp(){
//     let a = 1;
//     return function temp2(){
//         console.log(a++)
//     }
// }

// const obj1 = temp() 
// const obj2 = temp() 
// const obj3 = temp() 

// obj3()


// function closer(a){
//     return function closer1(b){
//         return a + b
//     }
// }

// console.log(closer(1)(2))



// function greeter(){
//     return function greeter1(){
//         return a + b
//     }
// }

// let greeter = greeter() 




// function callAPI(){
//     let count = 1
//     return function(){
//         if(count <= 3){
//             return count++
//         }else{
//             return "API limit exceeded"
//         }
//     }
// }

// let ans = callAPI()
// console.log(ans())
// console.log(ans())
// console.log(ans())
// console.log(ans())




// function createToggle() {
//     let isOn = false; // Initial state

//     return function toggle() {
//         isOn = !isOn;
//         console.log(isOn ? "ON" : "OFF");
//     }
// }

// // Toggle function ban gaya
// const toggleSwitch = createToggle();

// // Use it
// toggleSwitch(); // ON
// toggleSwitch(); // OFF
// toggleSwitch(); // ON
// toggleSwitch(); // OFF


// function password(a){

// }


// rate limiting
// function abcd(){
//     let allow = true;
//     return function(){
//         if(!allow){
//             return;
//         }
//         else{
//             console.log("hello world")
//             allow = false;
//             setTimeout(function(){
//                 allow = true;
//             }, 3000);
//         }
//     }
// }

// let fnc = abcd()



function fun(){
    
    return function(){
       console.log("hello") 
    }
}

