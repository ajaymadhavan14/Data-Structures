let newArr = [1, 2, 3, 4, 5, 6];

let all = newArr
  .filter((e) => e % 2 != 0)
  .reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });

console.log(all);

let obj = {
  firstName: "ajay",
  lastName: "krishna",
};
console.log(obj.firstName);

let { firstName, lastName } = obj;
console.log(lastName);

let { firstName: fn, lastName: ln } = obj;

console.log(ln);
let array = [1, 2, 3, 4];
let [a, b, ...arr] = array;
console.log(b);

let newObj = {
  name: "ajay",
};
console.log(newObj);
Object.assign(newObj, { place: "krishna", good: "morning", age: 20 });

console.log(newObj);

let newObj2 = {
  bro: "BCK49",
  mern: "stack",
  age: 25,
};

Object.assign(newObj, newObj2);

console.log(newObj);

console.log(newObj2);

let newSet = Object.assign({}, newObj, newObj2);

console.log(newSet);

let setArray = [10, 2, 3, 4, 5, 6, 7];

let ok = setArray.reduce((acc, curr) => {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(ok);

function callS() {
  console.log(this.name + this.place);
}
let allS = callS.bind(newObj);
allS();

let freee = { name: "asdfg", place: "calicut" };

Object.freeze(freee);
freee.name = "ajay";
console.log(freee);
console.log(Object.keys(freee));
console.log(JSON.stringify(freee));
console.log(JSON.parse(JSON.stringify(freee)));
