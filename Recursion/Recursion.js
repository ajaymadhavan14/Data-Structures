function f(n) {
  if (n <= 1) {
    return n;
    console.log(n);
  }
  return n * f(n - 1);
}
// console.log(f(5));

let k = 1;
for (let i = 1; i <= 5; i++) {
  k = k * i;
}
// console.log(k);

function f2(n) {
  if (n <= 1) {
    return n;
  }
  f2(n - 1);
  console.log("----------------");
  console.log(n);
  console.log("----------------");
  f2(n - 1);
}
f2(5);
