// // pattern printing
// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i);
//     let hashes = "#".repeat(i);
//     console.log(spaces + hashes);
//   }
// }
// staircase(5);
function fullPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "#".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

fullPyramid(5);
function invertedStaircase(n) {
  for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

// Example
invertedStaircase(4);
