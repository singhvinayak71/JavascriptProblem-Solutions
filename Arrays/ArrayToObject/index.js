// Question -  How to convert an array to an object in JavaScript

// const arr = ['a', 'b', 'c', 'd'];

// let obj = arr.reduce(
//     (a, it, i) => ({...a, [i]:it}), {}
// );
// console.log(obj);

        // example2
// Using the Object.assign() method to convert an array to an object ,e.g. const obj = Object.assign({}, arr).
// const names = ['Alex', 'Bob', 'Johny', 'Atta']

// const obj = Object.assign({}, names)

// console.log(obj)

        // example3 - using spred operator

// const newarr = ['hello', 'goodMorning']
// let myobj = {...newarr}
// console.log(myobj);

        // example4 - using Array.forEach() method

const names = ['Alex', 'Bob', 'Johny', 'Atta']

const obj = {}

names.forEach((elem, i) => {
  obj[i] = elem
})

console.log(obj)