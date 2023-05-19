

function value(n) {
    const arr = [1,2,4,5]

    for (let i = 0; i < arr.length; i++) {
    if(arr[i]== n){
        return i
    }
    
    }
}

console.log(value(3));