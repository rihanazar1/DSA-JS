// let a = 5;
// let b = 7;
// console.log(a+b);

// let a = 5;
// let b = 7;
// console.log(`sum of ${a} + ${b} is ${a+b}`);

// ______________________________________
// first method 
// let a = Number(prompt("enter the first value"));
// let b = Number(prompt("enter the second value")); -- convert string into int using Number keyword
// second method 
// let a = parseInt(prompt("enter the first value"));
// let b = parseInt(prompt("enter the second value")); 
// console.log(a+b);
// ______________________________________________

// ____________________________
// let a = prompt("name");
// let b = prompt("age");
// console.log(`Hello ${a}, you are ${b} years old`)
// _______________________________________

// ______________________________________________________
// Area of perimeter
// let length = parseFloat(prompt("enter length"));
// let width = parseFloat(prompt("enter width"));

// let area =  length * width
// let perimeter = 2 * (length+width)
// console.log("Area  "+ area)
// console.log("perimeter "+ perimeter)
// _____________________________________________


// let a = prompt("Enter first num");
// let b = prompt("Enter second num");

// if(a > ){
// }

// _________________________________
// let a = prompt("enter num");

// if (a % 2 === 0){
//     console.log("it is even")
// } else {
//     console.log("it is odd")
// }
// _____________________________________


// _______________________________________
// let age = Number(prompt("Enter your age"));

// if (age >= 18){
//     console.log("You can vote")
// } else{
//     console.log("You can not vote")
// };
// __________________________________________

// _________________________________________________
// let day = Number(prompt("enter the num"))

// if (day === 1){
//     console.log("Monday")
// } else if(day === 2){
//     console.log("Tuesday")
// }else if(day === 3){
//     console.log("wednesday")
// }else if(day === 4){
//     console.log("Thusday")
// }else if(day === 5){
//     console.log("Friday")
// }else if(day === 6){
//     console.log("Saturday")
// }else if(day === 7){
//     console.log("Sunday")
// }else {
//     console.log("wrong Input")
// }
// ____________________________________________



// -------------------------------------------------------
// Area of tringle
// let num1 = Number(prompt("Enter the value 1"));
// let num2 = Number(prompt("Enter the value 2"));
// let num3 = Number(prompt("Enter the value 3"));

// let a = Number(num1+num2+num3)

// let semi = Number(a/2)

// // console.log(`Area of Tringle is ${semi}`);

// let area = Math.floor(Math.sqrt(semi*(semi-num1)*(semi-num2)*(semi-num3)))

// console.log(area); 

// -----------------------------------------------------------


// ______________________________________________
// let a = Number(prompt("Enter the num1"));
// let b = Number(prompt("Enter the num2"));

// if (a > b){
//     console.log(`${a} is greater number`);    
// } else {
//     console.log(`${b} is greater number`)
// }
// ___________________________________________________

// Leap Year

// _________________________________________________
// let a = Number(prompt("Enter the year"));

// if (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) {
//     console.log(`${a} is a leap year`)
//  } else {
//     console.log(`${a} is not a leap year`)
// } 
// _____________________________________________________


// _______________________________
// N times “hello world

// var n = parseInt(prompt("Enter the Number"))

// for (let i = 1; i <= n ; i=i+1){
//     console.log("Hello World")
// }
// ______________________________________

// ________________________________________________
// Electricity Bill

// let unit = Number(prompt("Enter the Unit"));

// let amount = 0;
// if (unit <= 100){
//     amount = unit * 4.2
// } if (unit > 100 && unit <= 200){
//     amount = (unit - 100) * 6 + (100 * 4.2)
// } if (unit > 200 && unit <= 400){
//     amount = (unit - 200) * 8 + (100 * 4.2) +  (100 * 6)
// } if (unit >= 400){
//     amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) *13
// }

// console.log("Bill Amount = " + amount);
// ________________________________________________________



// __________________________________________________
// N natural numbers
// var n = parseInt(prompt("Enter the Number"))

// let str = ""
// for (let i = 1; i <= n ; i=i+1){
//     str = str + i+"  "
    
// }
// console.log(str)
// ___________________________________________________


// __________________________________________________
// Sum of first N numbers
// var n = parseInt(prompt("Enter the Number"))

// let sum = 0;

// for (let i = 1; i <= n ; i++){
//     sum = sum + i;
// }
// console.log(sum)
// _________________________________________________


// __________________________________________
// Shop Discount

// var price = Number(prompt("Enter the amount"));

// let payingAmount = 0;
// if (price >= 0 && price <= 5000){
//       payingAmount = (price / 100) * 0 - (price)
// } else if (price >= 5000 && price <= 7000){
//     payingAmount = (price / 100) * 5 - (price)
// } else if (price >= 7000 && price <= 9000){
//     payingAmount = (price / 100) * 10 - (price)
// } else if (price >= 9000){
//     payingAmount = (price / 100) * 20 - (price)
// } 
// console.log("Total Amount is =" + payingAmount);

// ______________________________________________


// _____________________________________________
// factorial of number 

// var num = Number(prompt("Enter the Value"));

// let sum = 1;
// for(i = num; i >= 1; i=i-1){
//     sum = sum * i
// }
// console.log(sum);
// _________________________________________


// _______________________________________
// Prime Number
// var num = Number(prompt("Enter the Value"));

// let count = 0;
// for(let i = 1; i <= num; i++){
//     if(num % i == 0) {
//         count++
//     }
// }
//     if (count === 2){
//         console.log("prime")
//     } else{
//         console.log("Not Prime")
//     }
// _________________________________________


// ___________________________________
// 20. Sum of digit 
// var n = Number(prompt("enter the value"));

// let sum = 0;

// while(n>0){
//     let rem = n%10;
//     sum = sum + rem;
//     n = Math.floor(n/10);
// }
// console.log("sum "+ sum);
// _______________________________________


// ______________________________________
// 21 Reverse the number

// let n = 12345;

// let rev = 0;

// while(n > 0){
//     let rem = n % 10;
//     rev = rev*10 + rem 
//     n = Math.floor(n/10);   
// }
// console.log(rev);

// ____________________________________


// __________________________________________________
// 22.  Palindrome number

// let n = Number(prompt("enter the value"));

// let copy = n;
// let rev = 0;
// while(n>0){
//     rev = (rev*10) + (n%10);
//     n = Math.floor(n/10);
// }
// console.log(copy===rev? "pallindrom" : "no pallindromic"); 


// let n = 1234321;

// let copy = n;
// let rev = 0;          
// while (n>0){
//     rev = (rev * 10) + (n%10)
//     n = Math.floor(n/10)
// };
// console.log(copy===rev? "palindrom" : "Non palindrom");
// _____________________________________________________________


//________________________________

// Strong number

// let n= 145; //--> 14, 1 
// let copy = n;
// let ans = 0; //--> 1 , 3 

// while(n>0){
//     let rem = n%10; //---> 5, 4 , 1
//     let fact = 1; // 2
//     for(let i = 1; i<=rem; i++){ 
//         fact = fact * i; 
//     }
//     ans = ans + fact; //---> 1, 3 , 5
//     n = Math.floor(n/10) //---> 14, 1
// }
// console.log(copy ==ans? "Strong num" : "no strong num")

// let n = 145;
// let copy = n;
// let ans = 0;

// while(n > 0){
//     let rem = n%10;
//     let fact = 1;
//     for(let i = 1; i <= rem ; i++){
//         fact = fact * i //--> 1, 2, 3, 4, 5
//     }

//     ans = ans + fact; 
//     n = Math.floor(n/10)
// }

// console.log(copy == ans ? "strong number" : "Not strong number");
//__________________________________________   


//____________________________________________
//24 Automorphic Number 

// let n = 25;
// let copy = n; 
// let sq = n*n;
// let count = 0; // --> 1, 2

// while(n > 0){
//     count++
//     n = Math.floor(n/10);
// }

// console.log(copy == sq%Math.pow(10, count) ? "automorphic" : "not autoporphic");

// let n = 5;
// let copy = n
// let sq = n*n;
// let count = 0;

// while (n > 0){
//     count++
//     n = Math.floor(n/10)
// } 

// console.log(copy == sq%Math.pow(10 , count) ? "Automorphic" : "Not Automorphic");

//__________________________________________________________   


// ____________________________________
// 25. Single Digit
// let n = 6758; 
// let sum = 0; --->26 // 8

// while(n>0 || sum>9){
//     if(n==0){
//         n = sum; --> n = 26;
//         sum = 0;
//     }
//     sum = sum + n%10    -----> 8+5+7+6      // --->6+2
//     n= Math.floor(n/10) ---> 675/67/6/0
// }
// console.log(sum);


// let num = 4545;
// let sum = 0;

// while(num>0 || sum>9){
//     if(num == 0){
//         num = sum;
//         sum = 0;
//     }
//     sum = sum + num%10;
//     num = Math.floor(num/10);
// }

// console.log(sum);
// ____________________________________


// _____________________________________
// 26. Fibonacci series 

// var num = 10

// var a = 0 
// var b = 1
// var c = 0

// var str1 = a + "," + b
// var str2 = ''
// // console.log(a + "," + b)

// for(var i = 3; i <= num; i++)
// {   
//     c = a + b             //---> c = 1 + 1 = 2
//     str2 += ',' + c
//     a = b                //---> a =1, a = 1, 
//     b = c                // ---> b = 1, b = 2,
// }
// console.log(str1 + str2); 


// let n = 10
// let first =0, second = 1
// console.log(first)
// console.log(second)
// for(let i=1; i<=n-2; i++){
//     let third = first + second
//     console.log(third)
//     first = second
//     second = third
// }



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

//_______________________________________________________
// do{ 
//     // var a ="hello"
//     // console.log(a)
//     var rep = Number(prompt("Press 1 to repeat"));
//     if (rep === 1){
//         console.log("Hello")
//     } else if (rep !== 1){
//         console.log("Program Exits") 
//     }
// }while(rep > 1 && rep < 1 || rep === 1);

//________________________________________________________________

// let choice;

// do {
//     choice = parseInt(prompt(
//         "Choose an operation:\n" +
//         "1. Addition\n" +
//         "2. Subtraction\n" +
//         "3. Multiplication\n" +
//         "4. Division\n" +
//         "5. Exit\n\n" +
//         "Enter your choice:"
//     ));

//     if (choice >= 1 && choice <= 4) {
//         let num1 = parseFloat(prompt("Enter the first number:"));
//         let num2 = parseFloat(prompt("Enter the second number:"));
//         let result;

//         switch (choice) {
//             case 1:
//                 result = num1 + num2;
//                 alert("Sum = " + result);
//                 break;
//             case 2:
//                 result = num1 - num2;
//                 alert("Difference = " + result);
//                 break;
//             case 3:
//                 result = num1 * num2;
//                 alert("Product = " + result);
//                 break;
//             case 4:
//                 if (num2 !== 0) {
//                     result = num1 / num2;
//                     alert("Quotient = " + result);
//                 } else {
//                     alert("Division by zero is not allowed.");
//                 }
//                 break;
//         }
//     } else if (choice !== 5) {
//         alert("Invalid choice. Please try again.");
//     }

// } while (choice !== 5);

// alert("Calculator exited.");


//___________________________________________
// 30. Pattern - square

// let n = 5 
// for(let i = 1 ; i<=n; i++ ){
//     for(let j = 1; j<=5; j++){
//         process.stdout.write("*");
//     }
//     console.log("")
// } 

//_______________________________________________________
// 30. Pattern - Right Triangle (Star)

// let n= 5;
// for(var i=1; i<=n; i++){
//     for(var j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log(i);   
// }

// let n= 5;
// for(var i=1; i<=n; i++){
//     for(var j=1; j<=i; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log();   
// }

// let n= 5;
// for(var i=1; i<=n; i++){
//     for(var j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(64 + j) + ' ')
//     }
//     console.log();   
// }

//___________________________________________
// 30. Inverted Right Triangle (Star)

// let n = 5 

// for(let i = 1 ; i<=n; i++ ){
//     for(let j = 1; j<=n-i+1; j++){
//         process.stdout.write("*");
//     }
//     console.log("")
// } 

// let n = 5 
// let k = 5
// for(let i = 1 ; i<=n; i++ ){
//     for(let j = 1; j<=k; j++){
//         process.stdout.write("*");
//     }
//     k--
//     console.log("")
// }

//____________________________________
// Mirrored Right Triangle
// let n = 5;
// for(let i=1; i<=n; i++){

//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(" ")
//     }

//     for(let j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();   
// }

//___________________________________
// Tringle 

// let n = 5;
// for(let i=1; i<=n; i++){

//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(" ")
//     }

//     for(let j=1; j<=i; j++){
//         process.stdout.write("*  ")
//     }
//     console.log();   
// }

//___________________________________
// V pattern 

// let n =9;

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=(2*n)-1; j++){
//         if(i === j || i+j==2*n ){
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
    
// }

//_________________________________
// X Pattern 

// var n = 5;

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i===j || i+j===n+1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

//_________________________________________
//SUM OF ARRAY 

// let arr = [20,10,25,15,30]

// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i]
//     var mean = Math.floor(sum/arr.length)
// }
// console.log(`Mean of arr ${mean}`)
// console.log(`sum of arr ${sum}`)

//_____________________________________________
//Greatest in Array
// let arr = [20, 40, 50, 8, 12, 68, 43];

// let max = arr[0]

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }
// console.log(`Greatest array is ${max}`);

//_______________________________________________
//Smallest Array 

// let arr = [20, 40, 50, 8, 12, 68, 43];

// let min = arr[0]

// for(let i=0; i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }
// console.log(`Greatest array is ${min}`); 


//_______________________________________________
// Second Greatest

// let arr = [20, 40, 50, 8, 12, 68, 43];

// let greatest = Math.max(arr[0],arr[1])
// let secondGreatest = Math.min(arr[0], arr[1])

// for(let i=2; i < arr.length; i++){
//     if(arr[i] > greatest){
//         secondGreatest = greatest
//         greatest = arr[i]
//     } else if(arr[i] > secondGreatest){
//         secondGreatest = arr[i]
//     }
// } 
// console.log(secondGreatest);

// _____________________________________
//Deep Copy 

// let arr =  [10, 20, 30, 40, 50]
// let temp = []
// for(let i=0; i<arr.length; i++){
//      temp = [...arr]   
// }
// console.log(temp);

//___________________________________________________
// 0 left side 

// let arr = [0, 1, 1, 0, 0 ,1, 0, 1]

// let j = 0

// for(let i =0; i<=arr.length-1; i++){
//     if(arr[i] == 0){
//         let temp = arr[i]
//         arr[i] = arr[j] 
//         arr[j] = temp
//         j++
//     }
// }
// console.log(arr)

//_____________________________________________
// Is Array Sorted 
// let arr = [10,15,21,25,27,30,5]

// let isSorted = true;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         isSorted = false
//         break 
//     }
// }
// if (isSorted){
//     console.log("Given array is Sorted"); 
// } else{
//     console.log("Given array is not Sorted"); 
// }

// ___________________________________________________
//Left rotate array  & rotate from K

//Brute Force Approche

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

// opptimal approche

// let arr = [1, 2, 3, 4, 5]

// let temp = new Array(arr.length)
// let k = 3

// for(let i=0; i< arr.length; i++){
//     temp[i] = arr[(i+k) % arr.length]
// }
// console.log(temp)

//_________________________________________________

// Reverse the array
// let arr = [10, 20, 30, 40, 50]

// var l = 0             //left pointer
// var r = arr.length-1 //right pointer

// while(l < r){
//     let temp = arr[l]  // create temp variable & store the value of [0] index
//     arr[l] = arr[r]    // swap the value of [4] index to [0] index 
//     arr[r] = temp       // store te value of [0] index in index [4]
//     l++
//     r--
// }
// console.log(arr);

//_____________________________________________
//Linear Search 
//first method 
// let arr = [1, 2, 3, 4, 5]

// let num = 4
// let index = -1
// for(let i=0; i<arr.length; i++){
//     if(arr[i] === num){
//         index = i
//     } 
// }
// console.log(index);

//second method 
// let arr = [10, 16, 14, 9, 13, 90, 54]
// let se = Number(prompt("Enter the searching element"))

// let index = -1
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == se){
//         index = i
//         break
//     }
// }
// if(index == -1) console.log("not found");
// else console.log(se+" found at " + index + " index");

//_____________________________________________

// BINARY SEARCH ALGORITHM

// let arr = [1, 2, 3, 4, 5];

// let key = 5;

// let left = 0; // Starting index
// let right = arr.length - 1; // Ending index
// let result = -1; // Initialize result as -1 (key not found)

// while (left <= right){
//     let mid = Math.floor((left + right) / 2);  // Find the middle index

//     if (arr[mid] === key) {
//         result = mid;    // Key found, store the index
//         break;          // Exit the loop 
//     } else if (arr[mid] < key) {
//         left = mid + 1;      // Narrow the search to the right half
//     } else {
//         right = mid - 1;   // Narrow the search to the left half
//     }
// }
// console.log(`Your key is ${key} and index is ${result}`); // Output the result (index of key or -1 if not found)


//__________________________________________
// BUBBLE SORT ALGORITHM

// let arr =  [4, 3, 6, 7, 11, 9]

// for (let i = 0; i < arr.length - 1; i++) { // Outer loop for passes
//     for (let j = 0; j < arr.length - 1 - i; j++) { // Inner loop for comparisons
//         if (arr[j] > arr[j + 1]) { // If current element is greater than the next
//             // let temp = arr[j]; // Swaping metod 1 
//             // arr[j] = arr[j + 1];
//             // arr[j + 1] = temp;
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]] //// Swaping metod 2
//         }
//     }
// }
// console.log(arr); // Output: [3, 4, 6, 7, 9, 11]


//_______________________________________________
// SELECTION SORT ALGORITHMS

// let arr = [4, 3, 6, 7, 11, 9];

// for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;      // Assume current index has the smallest element
//                           // Find the smallest element in the unsorted portion
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[minIndex] > arr[j]) {
//             minIndex = j;  // Update minIndex if a smaller element is found
//         }
//     }
//     // Swap the smallest element with the first unsorted element
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }

// console.log(arr); // Sorted array

//_________________________________________________
//Insertion Sort

// let arr = [4, 1, 5, 2, 3]; // Initial unsorted array

// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i]; // Current element jo insert karna hai
//     let j = i - 1; // Sorted part ka last index

//     // Current element ko sahi jagah insert karte hain
//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j]; // Element ko ek position right shift karo
//         j--;
//     }
//     arr[j + 1] = key; // Key ko sahi jagah par rakh do
// }

// console.log(arr); // Sorted array print karo


// ____________________________________________________________
// Mearge Sort

// let arr = [7,4,3,1,5,9]

// divide(arr, 0, arr.length-1)
// console.log(arr)

// function divide(arr, first, last){
//     if(first<last){
//         let mid = first + Math.floor((last-first)/2)
//         divide(arr, first , mid)
//         divide(arr, mid+1, last)
//         conquer(arr, first, mid, last)
//     }
// }

// function conquer(arr, first, mid, last){
//     let temp =  new Array(last - first + 1)
//     let idx1 = first, idx2 = mid + 1, k = 0
//     while(idx1 <= mid && idx2 <= last){
//         if(arr[idx1] < arr[idx2] <= last){
//             if(arr[idx1 <= mid && idx2]) temp[k++] = arr[idx1++]
//             else temp[k++] = arr[idx2++]
//         }
//     }
    
//     while(idx1 <= last){
//         temp[k++] = arr[idx1++]
//     }

//     while(idx2 <= last) {
//         temp[k++] = arr[idx2++]
//     }

//     for(let i=0; j = first; i < temp.length, i++, j++){
//         arr[j] = temp[i]
//     }
// }

//_____________________________________________________

//Quick Sort
// let arr = [7,4,3,1,5,9]   

//mark the first and last point to 0 & l-1.
//consider last element as pivot element
//mark j pointer to first pointer and mark i pointer to first-1
//Now, start comparing jth element to pivot if you get jth element is smaller then pivot then increment i by 1 & swap jth & ith element. jth index will move to last -1.
//After exausting j, just increment i by 1and swap pivot element to ith element.
//Now make two calls for left & right, 
// for left call -> first = first, last= i-1
// for right call -> first= i+1, last = last

// quickSort(arr, 0, arr.length-1)
// console.log(arr)

// function quickSort(arr, first, last){
//     if(first < last){
//         let pivotIdx = partition(arr, first, last)
//         quickSort(arr, first, pivotIdx-1)
//         quickSort(arr, pivotIdx+1, last)
//     }
// }  

// function partition(arr, first, last){
//     let pivot = arr[last], i=first-1
//     for(let j = first; j<last; j++){
//         if(arr[j] < pivot){
//             i++
//             swap(arr, i, j)
//         }
//     }
//     i++
//     swap(arr, i, last)
//     return i
// }

// function swap(arr, i, j){
//     let temp = arr[j]
//     arr[i] = arr[j]
//     arr[j] = temp
// } 

//___________________________________________________

// Cyclic Sort 

// let arr = [6,1,3, 4, 2,5]

// let i = 0;

// while(i<arr.length){
//     let correctIdx = arr[i]-1
//     if(arr[i] != arr[correctIdx]){
//         let temp = arr[i]
//         arr[i] = arr[correctIdx]
//         arr[correctIdx] = temp
//     }
//     else i++
// }

// console.log(arr)
//____________________________________________________

//Merge Two Sorted Array

// let arr1 = [2, 5, 6]
// let arr2 = [1, 3, 4, 8]
// let merge = new Array(arr1.length + arr2.length)

// let i=0 , j=0, k = 0

// while(i<arr1.length && j< arr2.length){

//     if(arr1[i] < arr2[j]){
//         merge[k] = arr1[i]  
//         k++
//         i++
//     }else{
//         merge[k] = arr2[j]
//         k++
//         j++
//     }
// }

// while(j<arr2.length){
//     merge[k] = arr2[j]
//     k++
//     j++
// }
// while(i<arr1.length){ 
//     merge[k] = arr1[i]
//     k++
//     i++
// }

// console.log(merge) 

//____________________________________________
// Count subarrays’ sum equals target

// let arr = [1,2,3,7,5]

// let target = 12
// let count = 0

// for(let i=0; i<arr.length; i++){
//     let currsum = 0
//     for(let j=i; j<arr.length; j++){
//         currsum += arr[j]
//         if(currsum == target){
//             count++
//         }
//     }
// }

// console.log(count);

// find subarrays

// let arr = [1, 2, 3, 4, 5];

// for (let st = 0; st < arr.length; st++) {
//     for (let end = st; end < arr.length; end++) {
//         let subArray = "";
//         for (let i = st; i <= end; i++) {
//             subArray += arr[i] + " ";
//         }
//         // console.log(subArray.trim());
//         process.stdout.write(subArray)
//     }
//     console.log(""); // for line break like endl
// }

//Maximum Subarray By using Brute force 

// let arr = [-2,1,-3,4,-1,2,1,-5,4] 

// let maxSum = 0

// for(let i=0; i<arr.length; i++){

//     let currSum = 0
//     for(let j=i; j<arr.length; j++){
//         currSum = currSum + arr[j]
//         maxSum = Math.max(currSum, maxSum)
//     }
// }

// console.log(maxSum)

//Kadane's Algorithm 

// let nums = [-2,1,-3,4,-1,2,1,-5,4]

// let maxSum = nums[0];
// let currentSum = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log(maxSum);

// let arr = [-2,1,-3,4,-1,2,1,-5,4] 

// let currSum = arr[0]
// let maxSum = arr[0]

// for(let i=1; i<arr.length; i++){
//     currSum = Math.max(arr[i], currSum + arr[i]) 
//     maxSum = Math.max(maxSum, currSum)
// }
// console.log(maxSum)

// ______________________________________________________
//Find the frequency of array elements

// let arr = [4,3,5,5,6,4,8,9,3,6,-1,10,2,-1]

// for(let i=0; i<arr.length; i++){

//      let count = 1

//      if(arr[i] != -1){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 count ++
//                 arr[j] = -1
//             }    
//         }
//         console.log(arr[i] + " element found " + count + " times"); 
//      }
// }

//  WITH MAP METHOD

// let arr = [4,3,5,5,6,4,8,9,3,6,-1,10,2,-1]

// let map = new Map()
// for(let i=0; i<Array.length; i++){
//     if(map.has(arr[i], map.get(arr[i])+1)){
//         map.set(arr[i], map.get(arr[i] + 1))
//     }else map.set(arr[i] , 1)
// }
// console.log(map)

//________________________________________________
// let arr = [10, 13, -5, 15, -3, 12, -8, -6]

// let i =0;
// let j =0;
// while (i<arr.length){
//     if(arr[i]<0){
//         let temp = arr[i] 
//         arr[i] = arr[j]
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);


// let arr = [1,1,0,1,1,1,0,0,1]
// let max = 0, count=0

// for (let i=0; i<arr.length; i++){
//     if(arr[i] == 1) count++;
//     else{
//         max = Math.max(max, count);
//         count = 0
//     }
// }
// max = Math.max(max, count)
// console.log(max);

// ________________________________________________
// let arr = [1,2,3,7,5]
// let sum = 12
// let count = 0

// for(let i=0; i<arr.length; i++){
//     let currsum = 0
//     for(let j=i; j<arr.length; j++){
//         currsum += arr[j]
//         if(currsum == sum){
//             count++
//         }
//     }
// }

// console.log(count);

// _____________________________________________________
// let nums1 = [1,2,3,4]

// let nums2 = [2,5,7]

// let ans = new Array(nums1.length + nums2.length)
// let i=0 , j=0, k=0
// while(i<nums1.length && j<nums2.length){
//     if(nums1[i] < nums2[j]){
//         ans[k++] = nums1[i++]
//     } else{
//         ans[k++] = nums2[j++]
//     }
// }

// while(i<nums1.length){
//     ans[k++] = nums2[j++]
// }
// console.log(ans);



//____________________________________________
// let str = "hello"
// let string = ""
// for(let i=0; i<str.length; i++){
//     string = str[i]
//     console.log(string);
// }
//_____________________________________________

// Reverse STRING
// let str = "hello"
// let rev = " "
// for(let i=str.length-1; i>=0; i--){
//     rev = rev + str.charAt(i)
// }
// console.log(rev);

//______________________________________
//Palindrome STRING
// let str = "madam"
// let ispalindrome = true
// let i = 0
// let j = str.length-1

// while(i < j){
//     if(str.charAt(i) != str.charAt(j)){
//         ispalindrome = false
//         break
//     }
//     i++
//     j--
// }
// console.log(ispalindrome ? "palindrome" : "No Palindrome");

// ___________________________________________________________________
//Find VOWALS
// let str = "hello world 2345 anish"
// let vol = 0
// let space = 0
// let consto = 0
// let num = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'|| str[i] =='o'|| str[i] == 'u'){
//         vol += 1
//     }
//     else if(str[i] == ' '){
//         space += 1
//     }
//     else if(str.charAt(i) >= 0 && str.charAt(i) <= 9)
//     {
//         num += 1
//     }
//     else {
//         consto += 1
//     }
// }

// console.log("Vowels: " + vol)

// console.log("Spaces: " + space)

// console.log("Consonants: " + consto)

// console.log("numbers: " + num);



//________________________________________________
//Toggel Character
// let s = "riHaN"
// console.log(s);
// let ans = ""

// for(let i=0; i<s.length; i++){
//     if(s.charCodeAt(i)>=65 && s.charCodeAt(i) <=96){
//         ans = ans + String.fromCharCode(s.charCodeAt(i) + 32)
//     } else {
//         ans = ans + String.fromCharCode(s.charCodeAt(i)-32)
//     }
// }
// console.log(ans);



//_____________________________________________________
// Count the Valid Words
// let str =  ["pay", "attire", "practice", "attend"]
// let pref = "at"
// let count = 0
// for(let i=0; i<str.length; i++){
//     if(str[i].startsWith(pref)){
//         count ++
//     }
// }
// console.log(count);



//___________________________________
// Split String
// let str = "Hello Bhai Kaise ho"
// let arr = str.split(" ")
// //hello
// //arr[0] = hello
// //arr[0].charAt(0) = H + ello
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i].charAt(0).toUpperCase() + arr[i].substring(1));    
// }


//________________________________________
//Count Frequency
// let s = "hello"
// let arr  = new Array(26).fill(0)
// console.log(s);
// for(let i=0; i<s.length; i++){
//     let ascii = s.charCodeAt(i)
//     arr[ascii-97] = arr[ascii-97]+1
// }

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i+97) + ":" + arr[i]); 
//     }   
// }


//________________________________________
//Anagram 

// let s1 = "anagram"
// let s2 = "nagarm"
// console.log(s1 +" "+ s2);

// let arr = new Array(26).fill(0)

// if(s1.length != s2.length){
//     console.log("No Anagram");
// } else {
//     for(let i=0; i<s1.length; i++){
//         let asciiofStr1 = s1.charCodeAt(i)
//         let asciiofStr2 = s2.charCodeAt(i)
//         arr[asciiofStr1-97] = arr[asciiofStr1-97]+1
//         arr[asciiofStr2-97] = arr[asciiofStr2-97]-1
//     }
//     let isAnagram = true;
//     for(let i=0; i<26; i++){
//         if(arr[i]>0){
//             isAnagram = false
//             break
//         }
//     }

//     if(isAnagram) console.log("Anagram Word")
//     else console.log("Not Anagram Word")    
// }

//_____________________________________
// let word = "abcdefd"
// console.log(word);

// let ch = "d"
// let rev = ""
// for(let i=0; i<word.length; i++){
//     if(word.charCodeAt(i) === word.charCodeAt(ch)){
//         for(let i = word.indexOf(ch); i>=0; i-- ){
//             rev = rev + word[i]
//         }
//     }
// }

// console.log(rev + word.substring(rev.length));


//Leetcode String 2315, 2357, 2160, 2278, 2124, 2299, 2399 


// _________________________________________________________________________________
// 2D Array 

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[0].length; j++){
//         console.log(arr[i][j]);
//     }
// }


//__________________________
// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12,15],
//     [16,22]
// ]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }



//__________________________________
// Method 1
// let rows = 3 
// let cols = 4
// let arr = Array.from({length : rows}, ()=>Array(cols))
// // Array.from({},function)

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter Element"))
//     }
// }
// console.log(arr);

// Method 2
// let arr = new Array(3)

// for(let i=0; i<arr.length; i++){
//     arr[i] = new Array(4)
// }
// console.log(arr);

//__________________________________

// let arr = [
//     [1 , 2, 3]
//     [4 , 5, 6]
//     [7 , 8, 9]
// ]

// let leftSum =0, rightSum=0

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         if(i==j)
//     }
// }






