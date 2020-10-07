module.exports = function check(str, bracketsConfig) {
  let stack = [];  
  let open = bracketsConfig.map(item => item[0]);
  let close = bracketsConfig.map(item => item[1]);
  
  str.split('').forEach(item => {
    if (open.includes(item) && close.includes(item)) {
      if (stack.length && stack[stack.length - 1] === item) {
        stack.pop();
      } else {
        stack.push(item);
      }      
    } else if (open.includes(item)) {
      stack.push(item);
    } else if (stack.length && open.indexOf(stack[stack.length - 1]) === close.indexOf(item)) {
      stack.pop();
    } else {
      stack.push(item);
    }    
  }); 

  return stack.length === 0;
}
