const side1 = 3;
const side2 = 4;
const side3 = 5;

const s = (side1 + side2 + side3) / 2;

const area =  Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
  );

console.log(`Area of trangle = ${area}`)