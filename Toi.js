// callback

function hello(callback) {
  callback();
  console.log("hello");
}

function sample() {
  console.log("Sample");
}

hello(sample);

// //promise

function anyTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("opertation succes");
      } else {
        reject("Failed");
      }
    }, 200);
  });
}

anyTask()
  .then((result) => {
    console.log("Success :", result);
  })
  .catch((err) => {
    console.log("Error :", err);
  });

//call,apply,bind

let obj = {
  name: "AJAY",
  place: "Calicut",
};
function newSample() {
  console.log(this.name + " " + this.place);
}
newSample.call(obj);
// newSample.call(obj,"hello");
// newSample.apply(obj,["hello"]);
let newBind = newSample.bind(obj);
newBind();

let str = false;
str = !str;
console.log(str);

// reduce,filter,map

let arr = [1,2,3,4,5,6]

let Double = arr.map((x)=>{
  return x*2
})
console.log(Double);

let oddNumber = arr.filter((x)=>{
  return x % 2
})
console.log(oddNumber);

let sumArr = arr.reduce((acc,curr)=>{
  acc = acc+ curr
  //  acc += curr
  return acc
},0)

console.log(sumArr);

let maximum = arr.reduce((acc,curr)=>{
  if(acc<curr){
    acc = curr
  }
  return acc
},0)

console.log(maximum);

const users = [
  {firstName : "AJAY ", secondName : "Krishna", age:25},
  {firstName : "Bro ", secondName : "Type", age:5},
  {firstName : "Elon ", secondName : "Musk", age:25}
]
let fullName = users.map((x)=>{
 return x.firstName + x.secondName
})
console.log(fullName);

let sameAge = users.reduce((acc,curr)=>{
  
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }else{
    acc[curr.age] = 1
  }
  return acc
},{})
console.log(sameAge);

let filterAge = users.filter((x)=>{
  return x.age>20
}).map((y)=>{
  return y.firstName
})
console.log(filterAge);

let filterAgeReduce = users.reduce((acc,curr)=>{
  if(curr.age>20){
   acc.push(curr.firstName)
  }
  return acc
},[])
console.log(filterAgeReduce);
