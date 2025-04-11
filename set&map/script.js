// let arr =[10,20,22,43,55]
// let set = new Set(arr)

// for(let i=0; i<arr.length; i++){
//     set.add(arr[i])
// }

// console.log(set);


//____________________________________________
// let arr  = [10,12,10,12,4,1,2,4,2]

// const set = new Set();
// for(let i=0; i<arr.length; i++){
//     if(set.has(arr[i])){
//         set.delete(arr[i])
//     }else {
//         set.add(arr[i])
//     }
// }

// console.log(set);

//__________________________________________________________
// leetcode 1832
// let sentence = "thequickbrownfoxjumpsoverthelazydog"

// let set = new Set(sentence)

// for(let i=0; i<sentence.length; i++){
//     let ch = sentence.charAt(i)
//     set.add(ch)
// }

// console.log(set.size==26);


//____________________________________
// MAP Method 
// let map = new Map()
// let arr = [2,1,2,3,1,1,2,2,3,5,6,7,6]

// for(let i=0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i]) +1)
//     }else{
//         map.set(arr[i], 1)
//     }
// }
// console.log(map);


// let map = new Map()
// map.set('name', 'Rihan')
// map.set('age', '18')
// map.set('city', 'delhi')

// console.log(map.set('name'));
// console.log(map)


// Step 1: Create a Map
// const myMap = new Map([
//     ['name', 'John'],
//     ['age', 25],
//     ['city', 'New York']
// ]);

// // Step 2: Iterate over keys using for...of
// for (let [key, value] of myMap) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }


