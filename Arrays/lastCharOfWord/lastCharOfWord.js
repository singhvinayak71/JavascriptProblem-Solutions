// How many ways can you return the last character of a string ... when you don't know what the string is?

let myName = "vinayak singh";

// Solution #1
// let lastchar = myName.charAt(myName.length - 1)

// Solution #2
// let lastchar = myName.slice(-1)

// Solution #3 
// let lastchar = myName.split('').at(-1)

// Solution #4
// let lastchar = myName.split('').slice(-1)[0]

// Solution #5
let lastchar = myName.split('')[myName.length - 1]


console.log(lastchar)