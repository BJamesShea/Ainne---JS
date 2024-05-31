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
