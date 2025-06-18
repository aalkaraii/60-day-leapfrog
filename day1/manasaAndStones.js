function stones(n, a, b) {
  // Write your code here
  let number = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    number = i * a + (n - 1 - i) * b;
    arr.push(number);
    console.log(number);
  }

  return arr;
}
let n = 3;
let a = 3;
let b = 4;
console.log(stones(n, a, b));
//a=3 b=4 n=3
//0,4,7
//0,3,6
//0,4,8
//0,3,7
//output 6,7,8
