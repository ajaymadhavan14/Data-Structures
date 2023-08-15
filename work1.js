let obj = {
  prop1: 123,
  prop2: 456,
};
let obj2 = {
  prop3: 789,
  prop4: 101,
  __proto__: obj,
};

console.log(obj2.prop1);
// console.log(obj);
// console.log(obj.toString());
console.log(obj2.__proto__.toString());
// console.log(obj.prop2.toString());
// console.log(obj);

console.log(
  "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
);

console.log(JSON.stringify(obj));
