// Create a function that reverses an array

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// example1
// const reversesArr = arr.reverse()
// console.log(reversesArr)



// example2
// let reverseArr = []
// for(let i = arr.length-1; i>=0; i--){
//     reverseArr.push(arr[i])
// }
// console.log(reverseArr)

let originalArr = [1, 2, 3, 5, 6, 7];
let reverseArr = [];

originalArr.forEach((e)=>{
    reverseArr.unshift(e)
})
console.log(reverseArr)