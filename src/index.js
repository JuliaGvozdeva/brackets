module.exports = function check(str, bracketsConfig) {
  let brackets = Object.fromEntries(bracketsConfig);
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length-1] === str[i]){
      stack.pop();
    }
    else if (brackets[str[i]]) {
      stack.push(brackets[str[i]]);
    }
    else {
      return false;
    }
  }
  return stack.length === 0;
}
