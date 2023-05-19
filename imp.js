// let getUser = (x)=>x

// let numbers = [10,20,30,40,50]
// let numbers1 = [60,70,80,90,100]
// let newNumbers = [...numbers, ...numbers1]
// console.log(newNumbers)

// let number = [10,80,40,30,50]

let greet = 'hello'
greet= greet.split('')
greet= greet.reverse()

console.log(greet.join(''));
// for (let i = greet.length; i >=0 ; i--) {
//     console.log(greet[i]);
// }

let numbers = [10,20,30,40,50]
let numbers1 = [60,70,80,10, 20, 90,100]
let numbers2 = []
for (let i = 0; i < numbers.length-1; i++) {
    for (let j = 0; j < numbers1.length-1; j++) {
        if(numbers[i]==numbers1[j]){
          numbers2.push(numbers[i])
        }
    }
}

