function search() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let target = 2;
  let end = arr.length - 1;
  let head = 0;

  while (head <= end) {
    let midle = Math.floor((head + end) / 2);
    if (arr[midle] === target) {
      return midle;
    }
    if (arr[midle] < target) {
      head = midle + 1;
    } else {
      end = midle - 1;
    }
  }
  return -1;
}

console.log(search());
