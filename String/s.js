console.log`hello`;

let a = { name: "ajay" };

console.log(String(a));
console.log(JSON.stringify(a));

// Palindrome
let ab = "MALAYALAM";

let ba = ab.split("").reverse().join("");
console.log(ba);

console.log(ab == ba);

//Anagram

let az = "elbowe";
let ay = "belowe";

console.log(az.split("").sort().join("") === ay.split("").sort().join(""));
