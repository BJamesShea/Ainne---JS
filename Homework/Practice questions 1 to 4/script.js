// Practice questions 2 - May 13th

// 1)
let radius = 5;

function area(radius) {
  return 3.14 * radius * radius;
}
console.log(area(radius));
// 2)
let sides = 6;
let randomNumber = Math.floor(Math.random() * sides) + 1;

function roll(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

console.log(roll(50));

// 3)

function convert1(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit + " °F";
}

console.log(convert1(0));
console.log(convert1(32));
console.log(convert1(100));

// 4)

function convert2(value, scale) {
  let result;

  if (scale === "C") {
    result = (value * 9) / 5 + 32;
    return result.toFixed(1) + " °F";
  } else if (scale === "F") {
    result = ((value - 32) * 5) / 9;
    return result.toFixed(1) + " °C";
  } else
    return " Invalid scale, please use 'C' for Celsius or 'F' for Fahrenheit.";
}

console.log(convert2(0, "C"));
console.log(convert2(32, "C"));
console.log(convert2(100, "C"));
console.log(convert2(150, "F"));
console.log(convert2(200, "F"));
console.log(convert2(1000, "R"));

// 5)
