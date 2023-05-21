// Using string methods

function revNum(input) {
  let arr = [];
  let newArr = [];
  let splitString = input.toString().split("");
  let revArr = splitString.reverse().join("");
  let num = parseInt(revArr);
  if (input < 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(revNum(123));
console.log(revNum(-123));
console.log(revNum(120));



