function odd(a) {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function fairRations(B) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < B.length - 1; i++) {
    if (odd(B[i])) {
      B[i] = B[i] + 1;
      count++;

      B[i + 1] = B[i + 1] + 1;
      count++;
    }
  }
  if (odd(B[B.length - 1])) {
    return "NO";
  } else {
    return count;
  }
}
B = [2, 3, 4, 5, 6];

console.log(fairRations(B));
