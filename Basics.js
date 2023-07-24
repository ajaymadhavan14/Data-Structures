function recursiveFunction(n) {
  if (n <= 0) {
    return;
  } else {
    console.log("Recursive function called with n =", n);
    recursiveFunction(n - 1);
    console.log("Returning from recursive function with n =", n);
  }
}

//  recursiveFunction(3);

let s = "HELLOWORLD";

// console.log( s.split('').reverse().join());

function string(input) {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    stack.push(input.charAt(i));
  }

  let reverseSting = "";
  while (stack.length > 0) {
    reverseSting += stack.pop();
  }

  return reverseSting;
}

console.log(string(s));
