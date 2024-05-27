// // 1) may 13tth

// // function areaCircle(radius) {
// //   let area = 3.14 * radius * radius;
// //   console.log(area);
// // }
// // areaCircle(4);
// // 2)
// function roll(sides = 6) {
//   let dice = Math.floor(Math.random() * sides) + 1;
//   console.log(dice);
// }

// roll();
// roll(10);

//3)
// function temperature(celsius) {
//   const fahrenheit = (9 / 5) * celsius + 32;

//   return { celsius: celsius, fahrenheit: fahrenheit };
// }

// const tempAtZero = temperature(0);
// console.log(tempAtZero);

// function convert(celcius) {
//   var fahrenheit = (celcius * 9) / 5 + 32;
//   console.log(fahrenheit);
// }

// const fahr = (celsius) => (celsius * 9) / 5 + 32;
// console.log(fahr(32));

// // 4)

// function convert2(temp, M) {
//   if (M == "C") {
//     var fahrenheit = (temp * 9) / 5 + 32;
//     console.log(fahrenheit + " F ");
//   } else {
//     var celcius = ((temp - 32) * 5) / 5;
//     console.log(celcius + " C ");
//   }
// }

// convert(122, "F");
// convert(8, "C");

// corrected version
// function temperature(celsius) {
//   const fahrenheit = (9 / 5) * celsius + 32;
//   return { celsius: celsius, fahrenheit: fahrenheit };
// }

// const tempAtZero = temperature(0);
// console.log(tempAtZero);

// function convert(celsius) {
//   var fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(fahrenheit);
// }

// const fahr = (celsius) => (celsius * 9) / 5 + 32;
// console.log(fahr(32));

// function convert2(temp, M) {
//   if (M == "C") {
//     var fahrenheit = (temp * 9) / 5 + 32;
//     console.log(fahrenheit + " F ");
//   } else {
//     var celsius = ((temp - 32) * 5) / 9;
//     console.log(celsius + " C ");
//   }
// }

// convert2(122, "F");
// convert2(8, "C");

// 5)
// function isUnder50(...values) {
//   var len = values.length;
//   let flag = 0;
//   for (var i = 0; i < len; i++) {
//     if (values[i] < 50) continue;
//     else flag = 1;
//   }

//   if (flag == 0) return true;
//   else return false;
// }

// console.log(isUnder50(1, 2, 3, 5, 4, 65));

// 6)
function sum() {
  var count = arguments.length;
  var total = 0;
  for (var i = 0; i < count; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
