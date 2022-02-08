// Задание 1 
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i]
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  avg = avg.toFixed(2);

  return { min: min, max: max, avg: +avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  let min = func(arrOfArr[0]);
  for (i = 1; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    } 
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let razn = 0;
  let min = worker(arr[0]);
  let max = worker(arr[0]);
  for (let i =0 ; i < arr.length; i++) {
    if (min > worker(arr[i])) {
      min = worker(arr[i]);
    } else if (max < worker(arr[i])) {
      max = worker(arr[i]);
    } 
  }
  razn = max - min;
  return Math.abs(razn);
}

