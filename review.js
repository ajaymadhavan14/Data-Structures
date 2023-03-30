// curring
function sum(a) {
  return (b) => {
    return (c) => {
      return console.log(a + b + c);
    };
  };
}

sum(10)(20)(30);

//spread

let newArr = [1, 2, 3, 4, 5];

let newAAA = [10, 20, 30, ...newArr];

//console.log(newAAA);

let setnewM = newArr.map((x) => {
  return x * 2;
});

let setnewF = newArr.filter((x) => {
  return x % 2 != 0;
});

let setnewR = newArr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

let setnewR2 = newArr.reduce((acc, curr) => {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
});

newArr.forEach((e) => {});

console.log(setnewM);
console.log(setnewF);
console.log(setnewR);
console.log(setnewR2);

let users = [
  { firstName: "ajay", lastName: "kishna", age: 24 },
  { firstName: "anshi", lastName: "yoyo", age: 20 },
  { firstName: "salee", lastName: "daaa", age: 20 },
  { firstName: "sfeek", lastName: "mon", age: 30 },
];

let userSet = users.map((e) => {
  return e.firstName + e.lastName;
});
console.log(userSet);

let userAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(userAge);

let userF = users
  .filter((e) => {
    return e.age < 30;
  })
  .map((e) => e.firstName);
console.log(userF);

let name = {
  firstName: "ajay",
  lastName: "krishna",
};
addname = function (a) {
  console.log(this.firstName + this.lastName + a);
};
let name2 = {
  firstName: "salee",
  lastName: "mon",
};

addname.call(name2, "hello");
