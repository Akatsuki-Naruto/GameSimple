const MAX = 5;

function getallpath(matrix, n, row, col, ans, cur) {
  if (row >= n || col >= n || row < 0 || col < 0 || matrix[row][col] === 0) {
    return;
  }

  if (row === n - 1 && col === n - 1) {
    ans.push(cur);
    return;
  }

  matrix[row][col] = 0;

  getallpath(matrix, n, row - 1, col, ans, cur + "U");
  getallpath(matrix, n, row, col + 1, ans, cur + "R");
  getallpath(matrix, n, row, col - 1, ans, cur + "L");
  getallpath(matrix, n, row + 1, col, ans, cur + "D");

  matrix[row][col] = 1;

  return;
}

function findPath(matrix, n) {
  let ans = [];
  getallpath(matrix, n, 0, 0, ans, "");
  return ans;
}

let m = [
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
];
let n = m.length;
let ans = findPath(m, n);
for (let i of ans) {
  console.log(i + " ");
}
