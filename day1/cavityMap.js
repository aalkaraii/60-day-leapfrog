function cavityMap(grid) {
  let result = [...grid];

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      let curr = grid[i][j];
      if (
        curr > grid[i - 1][j] &&
        curr > grid[i + 1][j] &&
        curr > grid[i][j - 1] &&
        curr > grid[i][j + 1]
      ) {
        let row = result[i].split("");
        row[j] = "X";
        result[i] = row.join("");
      }
    }
  }

  return result;
}

let grid = ["989", "191", "111"];
console.log(cavityMap(grid));
