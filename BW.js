//Convert array to a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayLink(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
}

let arr = [1, 2, 3, 4, 5];
const link = arrayLink(arr);
console.log(link);

//Binery Search

function BS(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middelIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middelIndex]) {
      return middelIndex;
    }

    if (target < arr[middelIndex]) {
      rightIndex = middelIndex - 1;
    } else {
      leftIndex = middelIndex + 1;
    }
  }
  return null;
}

let array = [1, 2, 3, 4, 5, 6];

const findT = BS(array, 2);
console.log(findT);

function Sample(arr1) {
  let sum = 0;
  let i = 1;
  let len = arr1.length;
  for (; i < len; ) {
    sum = sum + arr1[i];
    i = i + i;
  }
  return sum;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Sample(arr1));
