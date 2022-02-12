function compareArrays(arr1, arr2) {
  let result;
 for(let i = 0; i < arr1.lenght; i++){
  result = arr1.every(item => item === arr2[i]);
 }
  return result; // boolean
}

function advancedFilter(arr) {
let resultArr;
resultArr = arr.filter(function(num) {
 return num > 0;
});
resultArr = arr.filter(function(num) {
  return num % 3 === 0;
});
resultArr = arr.map(num => num * 10 );
 return resultArr; // array
}

