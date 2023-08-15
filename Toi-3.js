function arrS(array) {
  for (i = 0; i < array.length - 1; i++) {
    let min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
function sumFun(array1) {
  let array = [6, 1, 2, 3, 4, 5];
  let arr = array1(array);
  let sum = 0;
  let secondL = arr[arr.length - 2];
  let secondS = arr[1];
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - secondL - secondS;
}

console.log(sumFun(arrS));
