
// example1:
let nums = [20, 10, 40, 30, -10, -50, 10, -40]
let sum = 0;

// for(let i=0; i<nums.length; i++){
//     sum += nums[i]
// }
// console.log(sum)


// example2:
// nums.map((e, i)=>{
//     sum += nums[i]
// })
// console.log(sum);


// example3:

const reuslt = nums.reduce((accumilater, currenValue)=>{
    return accumilater + currenValue
})
console.log(reuslt)