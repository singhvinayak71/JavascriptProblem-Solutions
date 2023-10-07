// Print all even numbers from 0 – 10

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.map((e)=>{
    console.log("Even Number")
    if (e % 2 == 0){
        console.log(e)
    }
})

// Print all odd numbers from 0 – 10

arr.map((e)=>{
    console.log("Odd Number")
    if (e % 2 == 1){
        console.log(e)
    }
})