
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







