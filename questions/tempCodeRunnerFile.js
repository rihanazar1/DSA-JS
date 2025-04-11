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


function add(a, b, cb){
    let result = a + b;
    cb(result);
}


add(2, 4, function(val){
    console.log(val)
})
