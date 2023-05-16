function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        
      }
    }
  } while (swapped);
}

const arr = [31, 9, 3, 100];
BubbleSort(arr);
console.log(arr);

function insertionSort(arr3) {
  for (let i = 1; i < arr3.length; i++) {
    let current = arr3[i];
    let j = i - 1;
    while (j >= 0 && arr3[j] > current) {
      arr3[j + 1] = arr3[j];
      j--;
    }
    arr3[j + 1] = current;
  }
}

const arr3 = [10, 5, 6, 90, 1, 2];
insertionSort(arr3);
console.log(arr3);

function swap(arr4, i, j) {
  temp = arr4[i];
  arr4[i] = arr4[j];
  arr4[j] = temp;
}

function selectionSort(arr4) {
  for (let i = 0; i < arr4.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr4.length; j++) {
      if (arr4[min] > arr4[j]) {
        min = j;
      }
    }
    swap(arr4, min, i);
  }
}

const arr4 = [10, 11, 2, 6, 8, 1];
selectionSort(arr4);
console.log(arr4);
