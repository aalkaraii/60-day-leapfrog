// The different types of birds occur in the following frequencies:

// Type :  bird
// Type :  birds
// Type :  bird
// Type :  birds
// Type :  bird
// The type number that occurs at the highest frequency is type , so we print  as our answer.
function migratoryBirds(arr) {
  // Write your code here
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 0;
    }
    count[arr[i]]++;
  }

  let currentNumber = 0;
  let max = 0;
  const array = Object.entries(count);
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] > max) {
      max = array[i][1];
      currentNumber = array[i][0];
    }
  }
  return currentNumber;
}

let arr = [1, 1, 2, 2, 3, 4, 4, 4];

console.log(migratoryBirds(arr));

// palindrome
function palindrome(number) {
  let rem = 0;
  let reverse = 0;
  let num = number;
  while (num != 0) {
    rem = num % 10;
    //last element
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (reverse === number) {
    return true;
  } else {
    return false;
  }
}
number = 1232;
//12321->12321
//1232->2321
console.log(palindrome(number));

//Find All Divisors of a Number and then prime number
function prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
let n = 4;
console.log(prime(n));
