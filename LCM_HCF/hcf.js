function findXYInRange(sum, hcf, minRange, maxRange) {
    // Find the values of x and y
    let x, y;

    for (let i = minRange; i <= maxRange; i++) {
        if (i % hcf === 0) {
            x = i;
            y = sum - x;
            if (y % hcf === 0 && y >= minRange && y <= maxRange) {
                return [x, y];
            }
        }
    }

    return null; // No valid x, y found in the range
}

const sum = 1215;
const hcf = 81;
const minRange = 500;
const maxRange = 700;

const result = findXYInRange(sum, hcf, minRange, maxRange);

if (result) {
    const [x, y] = result;
    console.log("Value of x:", x);
    console.log("Value of y:", y);
} else {
    console.log("No valid x, y found in the given range.");
}
