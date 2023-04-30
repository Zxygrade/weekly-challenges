function FirstReverse(str) {
splitStr = str.split("");

reverseStr = splitStr.reverse();

joinStr = reverseStr.join("")
  // code goes here
  return joinStr;

}

// keep this function call here
console.log(FirstReverse(readline()));