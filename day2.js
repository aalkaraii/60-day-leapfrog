//Print the sum of the array's elements: 1+2+3+4+10+11=31
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar));

//Compare the Triplets
function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

//Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let total = arr.length;

  for (let i = 0; i < total; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / total).toFixed(6));
  console.log((negative / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
