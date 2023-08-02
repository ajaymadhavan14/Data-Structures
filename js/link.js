let x = 20;

function a() {
  let x = 30;
  return () => {
    console.log(x);
  };
}
console.log(x);
let A = a();

A();
