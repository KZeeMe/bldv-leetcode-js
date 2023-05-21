function isValid(str) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let ch of str) {
    if (hashMap[ch]) {
      // ch is an opening bracket
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // ch is a closing bracket and top of the stack matches
      stack.pop();
    } else {
      // ch is a closing brack and the top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
