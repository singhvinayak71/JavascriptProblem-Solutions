// function findXYInRange(sum, hcf, minRange, maxRange) {
//     // Find the values of x and y
//     let x, y;

//     for (let i = minRange; i <= maxRange; i++) {
//         if (i % hcf === 0) {
//             x = i;
//             y = sum - x;
//             if (y % hcf === 0 && y >= minRange && y <= maxRange) {
//                 return [x, y];
//             }
//         }
//     }

//     return null; // No valid x, y found in the range
// }

// const sum = 1215;
// const hcf = 81;
// const minRange = 500;
// const maxRange = 700;

// const result = findXYInRange(sum, hcf, minRange, maxRange);

// if (result) {
//     const [x, y] = result;
//     console.log("Value of x:", x);
//     console.log("Value of y:", y);
// } else {
//     console.log("No valid x, y found in the given range.");
// }
// function gcd(a, b) {
//     // Euclidean algorithm to find GCD
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function lcm(a, b) {
//     // LCM * GCD = a * b
//     return (a * b) / gcd(a, b);
// }

// function findLCM(numbers) {
//     let result = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         result = lcm(result, numbers[i]);
//     }
//     return result;
// }

// const numbers = [10, 12, 15, 18, 20];
// const result = findLCM(numbers);

// console.log("LCM of", numbers.join(", "), "is", result);

