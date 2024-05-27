// 1) May 6
var label = "keyincollege";
var tld = "ca";
var domainName = label + "." + tld;
console.log(domainName);

// 2)
var isKeyin;
if (domainName === "keyincollege.ca") isKeyin = true;
else isKeyin = false;
console.log(isKeyin);

// 3)
var isNotKeyin;
if (isKeyin === true) {
  isNotKeyin = false;
} else {
  isNotKeyin = true;
}

// 4)
var byte1 = 4;
var byte2 = 32;
var byte3 = 3;
var byte4 = 128;

// 5)
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(ipAddress);

// 6)
var table = 32;
for (var i = 1; i <= 10; i++) {
  console.log(table + " X " + i + " = " + table * i);
}

// Either will work
var table = 32;
for (var i = 1; i <= 10; i++) {
  let temp = table * i;
  console.log(table + " X " + i + " = " + temp);
}

// 7)
for (var i = 0; i <= 99; i++) {
  if (i % 2 === 0) console.log(i + " " + "Even");
  else console.log(i + " " + "Odd");
}

// 8)
var sum = 0;
for (var i = 0; i <= 99; i++) {
  if (i % 2 === 0) console.log(i + " " + "Even");
  sum = sum + i;
}
console.log(sum);

// 9
function isPerfectNumber(num) {
  if (num <= 1) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

let number = 28;
if (isPerfectNumber(number)) {
  console.log(`${number} is a perfect number.`);
} else {
  console.log(`${number} is not a perfect number.`);
}
