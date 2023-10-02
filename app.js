function plusMinus(arr) {
  let positive = 0;
  let cero = 0;
  let negative = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      cero++;
    }
  }
  result.push(positive / arr.length);
  result.push(negative / arr.length);
  result.push(cero / arr.length);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].toFixed(6));
  }
}
function miniMaxSum(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let max = sortedArr
    .slice(1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let min = sortedArr
    .slice(-1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(max, min);
}
