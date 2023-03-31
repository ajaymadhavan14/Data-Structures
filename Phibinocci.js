// 0,1,1,2,3,5,8

let n = 10
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if(i<=j){
        console.log(i+j);
        break;
        }
    }
}

// function Re(n1) {
//     if (n1 <= 1) {
//         return n1;
//       }
//     Re(n1-1)
//     console.log(n1);
// }
