function workbook(n, k, arr) {
  let count = 0;
  let chapter = 1;
  let pageno = 1;
  for (let i = 0; i < n; i++) {
    let currentProblem = 1;
    while (currentProblem <= arr[i]) {
      let endProblem = Math.min(currentProblem + k - 1, arr[i]);
      console.log(pageno, currentProblem, endProblem);
      currentProblem = endProblem + 1;
      pageno++;
    }
  }
}
let arr = [4, 2, 6, 1, 10];
let n = 5;
let k = 3;
console.log(workbook(n, k, arr));
