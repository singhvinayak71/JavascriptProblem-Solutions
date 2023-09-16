// Write a JavaScript program to get every nth element in a given array.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const EveryNthElement =  (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

// console.log(EveryNthElement(arr, 1))
console.log(EveryNthElement(arr, 2))
console.log(EveryNthElement(arr, 3))
console.log(EveryNthElement(arr, 4))