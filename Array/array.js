const read = require("readline-sync");

let arr = new Array(6);

arr = [6, 5, 9, 7, 4];
console.log(arr);
let total = 10;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == total) {
      console.log(arr[i], arr[j]);
    }
  }
}
let newArray = [1, 3, 5, 2, 2, 6, 2, 9, 2];
//newArray.splice(1,1,10)
console.log(newArray);
let element = 2;
let temp2;
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] == element) {
    for (let j = newArray.length - 1; j >= i; j--) {
      if (i == j) {
        break;
      }
      if (newArray[j] == element) {
        continue;
      } else {
        temp2 = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp2;
      }
    }
  }
}
console.log(newArray);
// console.log("Enter your array elaments")
// let newA = arr.map((x,i)=>{
// return  arr.splice(i,1,10)
// })
// for(var i=0;i<5;i++){
//     arr[i]=Number(read.quesion())
// }

// arr.splice(0,1,10)
// console.log(arr);
let newArr = [];
let temp;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
let c = 0;
for (let i = 0; i < arr.length - 1; i++) {
  let flage = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      c++;
      flage = 1;
    }
  }
  if (flage == 1) {
    console.log(arr[i]);
  }
}
console.log(c);
let a = 0;
arr.forEach((el) => {
  if (el % 2 == 0) {
    a++;
  }
});

console.log(a);
console.log("duplicates");
let z = [];
let dupArr = [1, 2, 1, 2, 3, 4, 4];
for (let i = 0; i < dupArr.length - 1; i++) {
  for (let j = i + 1; j < dupArr.length; j++) {
    if (dupArr[i] == dupArr[j]) {
      z.push(dupArr[i]);
    }
  }
}
console.log(z);
console.log("foreach");
dupArr.forEach((e, index) => {
  if (dupArr.indexOf(e) == index) {
    console.log(e);
  }
});

const pal = ["M", "A", "L", "A", "Y", "A", "L", "A", "M"];
//const pal = ['H','E','L','L','O']
let flag = 0;
for (let i = 0; i < pal.length; i++) {
  if (pal[i] != pal[pal.length - i - 1]) {
    flag++;
  }
}
if (flag == 0) {
  console.log("palindrom");
} else {
  console.log("not palindrom");
}

let arrfind = [1, 2, 3, 4, 5, 6];
let big = arrfind[0];

for (let i = 0; i < arrfind.length; i++) {
  if (big < arrfind[i]) {
    big = arrfind[i];
  }
}
console.log(big);
let temp5;
for (let i = 1; i < arrfind.length; i++) {
  if (arrfind[i] > arrfind[i - 1]) {
    temp5 = arrfind[i];
    arrfind[i] = arrfind[i - 1];
    arrfind[i - 1] = temp5;
    i = 0;
  }
}
console.log(arrfind);
