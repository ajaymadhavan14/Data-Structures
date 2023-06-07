
console.log('hello');
function duplicatesDelete() {
  
  let arr = [1,1,2,2,3]

  for (let i = 0; i < arr.length; i++) {
      if(arr[i]==arr[i+1]){
      arr.splice(i,1)
    }
    
  }
  return arr.length
}

console.log(duplicatesDelete());