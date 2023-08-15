let x = [1, 2, 3];

x[10] = 10;

console.log(x.length);

let n = [1, 2, 3, 4];

let s = n.map((x) => x ** x);

console.log(s);

console.log(0 || ("Hello" && (undefined ?? true)));

// console.log("Hello");

// console.log(0);

// console.log(null);

// console.log(true);

// console.log(0 && true);

let xy = () => {
  let y = 4;
  return () => y;
};

console.log(xy()());

let x1 = ["a", "b", "c"];
let y1 = x1.join("-");

console.log(y1);
