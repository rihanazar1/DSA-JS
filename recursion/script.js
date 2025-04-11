// function main(){
//     greet()
//     console.log("main chla")
// }

// function greet(){
//     enjoy()
//     console.log("good morning")
// }

// function enjoy(){
//     console.log("enjoy ho rha hai")
// }
// main()

//________________________________________
// let n = 5

// runHello(n)

// function runHello(n){
//     if(n==0) return
//     console.log(`Hello Duniya ${n}`)
//     runHello(n-1)
// }

//_______________________________________-
// let n = 5

// runHello(n)

// function runHello(n){
//     if(n==0) return
//     runHello(n-1)
//     console.log(`Hello Duniya ${n}`)
// }


// let n = 5

// runHello(n)

// function runHello(n){
//   if(n==0) return
//   runHello(n-1)
//   console.log(n)
// }  

// _____________________________________________
// sum of digit 
// let sum = 0
// let n = 123

// function calNum(n){
//     if(n == 0) return sum 
//     let mod = n%10
//     sum += mod
//     return calNum(Math.floor(n/10))
// }
// console.log(calNum(n))

//______________________________
// sum of num 
// let n = 10

// console.log(sumNterm(n))

// function sumNterm(n){
//     if(n == 1) return n
//     return n + sumNterm(n-1)
// }

//______________________________
// factorial
// let n = 5

// console.log(sumNterm(n))

// function sumNterm(n){
//     if(n == 1) return n
//     return n * sumNterm(n-1)
// } 

//_____________________________________
// sum of digit 
// let rev = 0
// let n = 12345

// function revNum(n){
//     if(n == 0) return rev
//     let mod = n%10
//     rev = rev*10 + mod
//     return revNum(Math.floor(n/10))
// }
// console.log(revNum(n)) 

//_________________________________________
// Fibonacci 

// let n = 10
// console.log(fibo(n))

// function fibo(n){
//     if(n==0 || n==1) return n
//     return fibo (n-1) + fibo(n-2)
// }

// Fibonacci series 

//_________________________________________
// GCD greatest common divisor
// let a = 20
// let b = 32
// let c = Math.min(a,b)

// console.log(gcd(a,b,c))

// function gcd(a,b,c){
//     if(c==1) return 1
//     if(a%c ==0 && b%c ==0) return c
//     return gcd(a,b,c-1)
// } 

// _____________________
//Factorial of number

// let n = 36
// let arr = []
// for(let i=1; i<=Math.floor(Math.sqrt(n)); i++){
//     if(n%i==0){
//         if(i==n/i)
//         arr.push(i)
//     }else {
//         arr.push(i)
//         arr.push(n/i)
//     }
// }
// arr.sort((a,b)=>(a-b)) 
// console.log(arr)


// factor(n, 1)

// function factor(n,i){
//     if(n%i==0) console.log(i)
//     if(i> Math.floor(n/2)){
//         console.log(n)
//         return
//     }    
//     factor(n, i+1)
// }


// brute force 
// var num = Number(prompt("Enter the Value"));

// let count = 0;
// for(let i = 1; i <= num/2; i++){
//     if(num % i == 0) {
//         count++
//     }
// }

// if (count === 1){
//     console.log("prime")
// } else{
//     console.log("Not Prime")
//}

// optimal aproach

//agr koi number 2 se lekr sqrt tk divide nahi ho paya to wo age bhi divide nahi ho payega.

// let n = 36
// if(isPrime(n)) console.log("Prime Number")
// else console.log("app prime number nahi ho")


// function isPrime(n){
//     if(n<=1) return fales
//     if(n==2) return true
//     if(n%2==0) return false
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i==0) return false
//     }
//     return true
// }

