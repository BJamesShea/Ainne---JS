// Practice questions 3
// Brandon Shea
// May 27th - 31st

// 1)
function reverseNum(num) {
  return parseInt(num.toString().split("").reverse().join(""), 10);
}

console.log(reverseNum(15243));

// 2
function alphabetOrder(str) {
  return str.split("").sort().join("");
}

let inputString = "keyincollege";
let sortedString = alphabetOrder(inputString);
console.log(sortedString);

// 3)

function getFileExtension(filename) {
  return filename.split(".").pop();
}

console.log(getFileExtension("example.txt"));
console.log(getFileExtension("annieIsTheBest.jpg"));

// 4)
function getCurrentDate() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let mm_dd_yyyy = month + "-" + day + "-" + year;
  let mm_dd_yyyy_slash = month + "/" + day + "/" + year;
  let dd_mm_yyyy = day + "-" + month + "-" + year;
  let dd_mm_yyyy_slash = day + "/" + month + "/" + year;

  return {
    "mm-dd-yyyy": mm_dd_yyyy,
    "mm/dd/yyyy": mm_dd_yyyy_slash,
    "dd-mm-yyyy": dd_mm_yyyy,
    "dd/mm/yyyy": dd_mm_yyyy_slash,
  };
}

let currentDate = getCurrentDate();
console.log(currentDate["mm-dd-yyyy"]);
console.log(currentDate["mm/dd/yyyy"]);
console.log(currentDate["dd-mm-yyyy"]);
console.log(currentDate["dd/mm/yyyy"]);

// 5)
function capitalize(str) {
  if (!str) return str;

  let firstChar = str.charAt(0);
  let restOfString = str.slice(1);

  if (firstChar >= "a" && firstChar <= "z") {
    firstChar = firstChar.toUpperCase();
  }

  return firstChar + restOfString;
}

console.log(capitalize("noman"));
console.log(capitalize("is"));
console.log(capitalize("The"));
console.log(capitalize("coolest"));

// 6)
function checkPeriod(str) {
  if (str.includes(".")) {
    return "contains period";
  } else {
    return "no period";
  }
}

console.log(checkPeriod("hello there"));
console.log(checkPeriod("..."));
console.log(checkPeriod("general"));
console.log(checkPeriod("kenobi"));

// 7)
function putSuffix(num) {
  if (num === undefined) return;

  let suffix = "th";
  let lastDigit = num % 10;
  let lastTwoDigits = num % 100;

  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    if (lastDigit === 1) {
      suffix = "st";
    } else if (lastDigit === 2) {
      suffix = "nd";
    } else if (lastDigit === 3) {
      suffix = "rd";
    }
  }

  return num + suffix;
}

console.log(putSuffix(22));
console.log(putSuffix(23));
console.log(putSuffix(1));
console.log(putSuffix(2));
console.log(putSuffix());
