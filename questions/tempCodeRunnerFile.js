// let a = 5 
// let str = ""

// for(let i=1; i<=a; i++){
//     str = str + i + " "
// }
// console.log(str)

// let num = 5
// let sum = 0

// for(let i=1; i<=num; i++){
//     sum = sum + i
// }
// console.log(sum)


// let num = 5;
// let fac = 1

// for(let i=1; i<=num; i++){
//     fac = fac * i
// }

// console.log(fac)

// let num = 7

// let count = 0

// for(let i=1; i<=num; i++){
//     if(num % i == 0){
//         count++
//     }
// }

// console.log(count === 2 ? `${num} is a Prime Number` : "Not Prime"  )


// let num = 1234
// let sum = 0

// while(num > 0){
//     let mod = num % 10
//     sum = sum + mod 
//     num = Math.floor(num / 10)
// }

// console.log(sum)


// let num = 36798
// let rev = 0

// while(num > 0){ 
//     let mod = num % 10
//     rev = rev * 10 + mod
//     num = Math.floor(num / 10) 
// }
// console.log(rev) 


// let num = 12321
// let copy = num
// let rev = 0

// while(num > 0){
//     let mod = num % 10
//     rev = rev * 10 + mod 
//     num = Math.floor(num / 10)
// }

// console.log(rev == copy ? "Plindrome" : "Not Palindrome")


// let num = 24
// let copy = num
// let ans = 0

// while(num > 0){
//     let mod = num % 10
//     let fac = 1
//     for(let i =1; i<=mod; i++){
//         fac = fac * i
//     }
//     ans = ans + fac 
//     num = Math.floor(num / 10)
// }
// console.log(copy === ans ? "Strong Number" : "Not Strong")


// let num = 145 
// let copy = num
// let sum = 0

// while(num > 0){
//     let mod  = num % 10 
//     let fac = 1
//     for(let i=1; i<=mod; i++){
//         fac = fac * i 
//     }
//     sum = sum + fac 
//     num = Math.floor(num / 10)
// }

// console.log(copy == sum ? "Strong Number" : "Not Strong")


// let num = 25 
// let copy = num
// let sq = num * num 
// let count = 0

// while(num > 0){
//     count++
//     num = Math.floor(num / 10)
// }

// console.log(copy === sq % Math.pow(10, count) ? "Automorphic" : "Not Automorphic")



// let num = 6758 
// let sum = 0 

// while(num > 0 || sum > 9){
//     if(num == 0){
//         num = sum 
//         sum = 0
//     }
//     sum = sum + num%10
//     num = Math.floor(num / 10)
// }
// console.log(sum)

// let num = 11
// let sum = 0 

// while(num > 0 || sum > 9){
//     if(num == 0){
//         num = sum 
//         sum = 0
//     }
//     sum = sum + num%10
//     num = Math.floor(num / 10)
// }
// console.log(sum)


// let num = 25 
// let copy = num
// let count = 0
// let sq = num * num 

// while(num > 0){
//     count++
//     num = Math.floor(num / 10)
// }

// console.log(copy == sq % Math.pow(10, count) ? "Automorphic" : "Not Automorphic")


// let num = 625
// let copy = num 
// let sq = num * num 
// let count = 0

// while(num > 0){
//     count++
//     num = Math.floor(num / 10)
// }

// console.log(copy == sq % Math.pow(10, count) ? "Automorphic" : "Not Automorphic")


// let digit = 6758
// let ans = 0

// while(digit > 0 || ans > 9){
//     if(digit == 0){
//         digit = ans
//         ans = 0
//     }
//     let mod = digit % 10
//     ans = ans + mod 
//     digit = Math.floor(digit / 10) 
// }


// console.log(ans) 


// let num = 6758 
// let sum = 0

// while(num > 0 || sum > 9){

//     if(num == 0){
//         num = sum 
//         sum = 0
//     }

//     let mod = num % 10
//     sum = sum + mod 
//     num = Math.floor(num / 10)
// }

// console.log(sum) 


// let num = 8
// let first = 0
// let second = 1
// console.log(first)
// console.log(second)


// for(let i=3; i<=num; i++){
//     let third = first + second
//     console.log(third)
//     first = second
//     second = third
// }


// let num = 8;
// let first = 0;
// let second = 1;

// let result = first + " " + second + " "; // start with first two numbers



// for (let i = 3; i <= num; i++) {
//     let third = first + second;
//     result = result + third + " ";  // append next number to the result string
//     first = second;
//     second = third; 
// }

// console.log(result); // print all in one line
// console.log(typeof(result))


// let num = 10 
// let first = 0
// let second = 1

// let result = first + " " + second + " "

// for(let i=3; i<=num; i++){
//     let third = first + second 
//     result = result + third + " "
//     first = second
//     second = third
// }
// console.log(result)

// do {
//     var a = "hello"
//     var input = Number(prompt("Enter the value"));
//     if(input === 1){
//         console.log("hello")
//     }else{
//         console.log("Program Exist")
//     }
// } while (input > 1 && input < 1 || input === 1);


// let n = 5

// for(let i=1; i <= n; i++){
//     for(j=1; j<=n; j++){
//         process.stdout.write("*")
//     }

//     console.log("")
// }


// let n = 5 

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=i; j++){
//         process.stdout.write(j + " ")
//     }

//     console.log()
// }


// let n = 5 

// for(let i=1; i<=n; i++){
    
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(" ")
//     }

//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ")
//     }
    
//     console.log()
// }



// let n = 5;

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=(2*n)-1; j++){

//         if (i==j || i+j == 2*n) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")          
//         }
//     }

//     console.log()
// }


// let n = 5;

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=n; j++){

//         if (i == j || i+j == n+1) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }


// let n = 8
// let first = 0
// let second = 1
// let result = first + " " + second + " "


// for(let i=3; i<=n; i++){
//     let third = first + second
//     result = result + third + " "
//     first = second
//     second = third
// }
// console.log(result) 

// let n = 10
// let first = 0
// let second = 1
// let result = first + " " + second + " "

// for(let i=3; i<=10; i++){
//     let third = first + second
//     result = result + third + " "
//     first = second
//     second = third
// }
// console.log(result)


// let n = 5
// for(let i=1; i<=n; i++){

//     for(let j=1; j<=i; j++){
//         process.stdout.write("*")
//     }

//     console.log()
// }

// let n = 5 

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=i; j++){
//         process.stdout.write(j + " ")
//     }

//     console.log()
// }

// let n = 5 

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(64 + j) + " ")
//     }

//     console.log()
// }


// let n = 5 

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(" ") 
//     }

//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ") 
//     }
    
//     console.log()
// }


// let n = 5 

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=(2*n)-1; j++){

//         if (i == j || i+j==2*n) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }

//     console.log()
// }


// let n  = 5 

// for(let i=1; i<=n; i++){
    
//     for(let j=1; j<=n; j++){
//         if (i == j || i+j == n+1) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
    
//     console.log()
// }


// let arr = [10, 15, 20, 25, 30]

// let sum = 0

// for(let i=0; i<=arr.length-1; i++){
//     sum = sum + arr[i] 
// }
// console.log(sum)
// console.log(sum / arr.length)

// let arr = [10, 5, 2, 37, 8]
// let grestest = arr[0]
// let index = 0

// for(let i=0; i<=arr.length-1; i++){
//     if(grestest < arr[i+1]){
//         grestest = arr[i+1]
//         index = i+1
//     }
// }
// console.log(`gretest array is ${grestest} and index is ${index}`)


// let arr = [10, 15, 20, 25, 30]

// let sum = 0 

// for(let i=0; i<=arr.length-1; i++){
//     sum = sum + arr[i] 
// }
// console.log(sum)
// console.log(Math.floor(sum/arr.length))


// let arr  = [10, 5, 2, 37, 8]

// let greatest = arr[0]
// let index = 0

// for(let i=0; i<=arr.length-1; i++){
//     if(greatest < arr[i+1]){
//         greatest = arr[i+1]
//         index = i + 1
//     }
// }

// console.log(`greatest array is ${greatest} and index is ${index}`)



// let arr = [40, 40, 50, 8, 12, 68, 43] 

// let greatest = Math.max(arr[0], arr[1])
// console.log(greatest)
// let secondGreatest = Math.min(arr[0], arr[1])
// console.log(secondGreatest)

// for(let i=2; i<=arr.length-1; i++){
//     if(arr[i] > greatest){
//         secondGreatest = greatest
//         greatest = arr[i]
//     }else if (arr[i] > secondGreatest) {
//         secondGreatest = arr[i]
//     }
// }
// console.log(secondGreatest)



// let arr = [20, 40, 50, 8, 12, 68, 43] 

// let greatest = Math.max(arr[0], arr[1])
// let secondGreatest = Math.min(arr[0], arr[1])

// for(let i=2; i<=arr.length-1; i++){
//     if(arr[i] > greatest){
//         secondGreatest = greatest
//         greatest = arr[i]
//     }else if(arr[i] > secondGreatest){
//         secondGreatest = arr[i]
//     }
// }
// console.log(secondGreatest)


// let arr = [12,2,3,4,5]

// let isSorted = true

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] > arr[i+1]){
//         isSorted = false
//         break
//     }
// }

// console.log(isSorted)


// let nums = [1, 2, 3, 4, 5]

// let copy = [...nums]

// console.log(copy)



// let arr = [10,20,30,40,50]

// let k = 2

// for(let j=1; j<=k; j++){
//     let temp = arr[0]
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = temp
// }

// console.log(arr)


// let arr = [1, 2, 3, 4, 5]
// let temp = arr[0]
// for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i+1]
// }
// arr[arr.length-1] = temp

// console.log(arr) 

// let arr = [1, 2, 3, 4, 5]

// let k = 6

// for(let i=1; i<=k; i++){
//     let temp = arr[0]
//     for(let j=0; j<=arr.length-1; j++){
//         arr[j] = arr[j + 1]
//     }
//     arr[arr.length-1] = temp
// }

// console.log(arr)

// let arr = [1, 2, 3, 4, 5] 

// let k = 3

// for(let i=1; i<=k; i++){
//     let temp = arr[0]
//     for(let j=0; j<=arr.length-1; j++){
//         arr[j] = arr[j + 1]
//     }
//     arr[arr.length-1] = temp 
// }
// console.log(arr)


// let arr = [1, 2, 3, 4, 5]

// let left = 0
// let right = arr.length-1

// while(right > left){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
// }
// console.log(arr)


// let num = [1, 2, 3, 4, 5]

// let left = 0
// let right = num.length-1

// while(left < right){
//     let temp = num[left]
//     num[left] = num[right]
//     num[right] = temp
//     left++
//     right--
// }

// console.log(num)


// let arr = [1, 2, 3, 4, 5]

// let key = 10
// let index = -1

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] == key){
//         index = i
//     }
// }
// console.log(`key is ${key} index is ${index}`)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let key = 2
// let result = -1

// let left = 0 
// let right = arr.length-1

// while(left <= right){
//     let mid = Math.floor((left + right) / 2)

//     if(arr[mid] == key){
//         result = mid
//         break
//     }else if(arr[mid] < key){
//         left = mid + 1
//     }else if(arr[mid] > key){
//         right = mid - 1
//     }
// }
// console.log(`key is ${key} result is ${result}`) 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let key = 9
// let result = -1
// let left = 0
// let right = arr.length-1

// while(left <= right){
//     let mid = Math.floor((left + right) / 2)

//     if (arr[mid] == key) {
//         result = mid
//         break
//     } else if(arr[mid] < key){ 
//         left = mid + 1
//     } else{
//         right = mid - 1
//     }
// }

// console.log(`key is ${key} result is ${result}`)


// let arr =  [10, 5, 1, 12, 3]

// for(let i=0; i<=arr.length-1; i++){

//     for(let j=0; j<=arr.length-1-i; j++){

//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp 
//         }
//     }
// }
// console.log(arr)


// let arr = [10, 5, 1, 8, 13, 7];

// for(let i=0; i<=arr.length-1; i++){
//     let minIndex = i

//     for(let j=i+1; j<=arr.length-1; j++){
//         if(arr[minIndex] > arr[j]){
//             minIndex = j 
//         }
//     }

//     let temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
// }

// console.log(arr)


// let arr = [4, 3, 6, 7, 11, 9];

// for(let i=0; i<=arr.length-1; i++){

//     let minIndex = i

//     for(let j=i+1; j<=arr.length; j++){
//         if(arr[minIndex] > arr[j]){
//             minIndex = j 
//         }
//     }

//     let temp = arr[i]
//     arr[i]  = arr[minIndex]
//     arr[minIndex] = temp
// }

// console.log(arr)

// let arr = [10, 5, 12, 1, 3]

// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i]; 
//     let j = i - 1; 

    
//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j]; 
//         j--;
//     }
//     arr[j + 1] = key; 
// }

// console.log(arr); 


// let arr = [8, 2, 5, 6, 16, 20]

// for(let i=0; i<=arr.length-1; i++){
//     let minIndex = i 

//     for(let j=i+1; j<=arr.length-1; j++){
//         if(arr[minIndex] > arr[j]){
//             minIndex = j
//         }
//     }

//     let temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
// }

// console.log(arr)

// for(let i=0; i<=arr.length-1; i++){
//     let smallIndex = i

//     for(let j=i+1; j<=arr.length-1; j++){
//         if(arr[smallIndex] > arr[j]){
//             smallIndex = j
//         }
//     }

//     let temp = arr[i]
//     arr[i] = arr[smallIndex]
//     arr[smallIndex] = temp
// }

// console.log(arr)

// let num = [3, 5, 1, 9, 11, 22, 30]

// for(let i=0; i<=num.length-1; i++){
//     let minIdx = i 

//     for(let j=i+1; j<=num.length-1; j++){
//         if(num[minIdx] > num[j]){
//             minIdx = j
//         }
//     }

//     let temp = num[i]
//     num[i] = num[minIdx]
//     num[minIdx] = temp 
// }

// console.log(num)




let arr = [10, 5, 12, 1, 3]

for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; 
    let j = i - 1; 

    
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; 
        j--;
    }
    arr[j + 1] = key; 
}

console.log(arr); 