// const MAX = 5;

// function getallpath(matrix, n, row, col, ans, cur) {
// if (row >= n || col >= n || row < 0 || col < 0 || matrix[row][col] === 0) {
// 	return;
// }

// if (row === n - 1 && col === n - 1) {
// 	ans.push(cur);
// 	return;
// }

// matrix[row][col] = 0;

// getallpath(matrix, n, row - 1, col, ans, cur + "U");
// getallpath(matrix, n, row, col + 1, ans, cur + "R");
// getallpath(matrix, n, row, col - 1, ans, cur + "L");
// getallpath(matrix, n, row + 1, col, ans, cur + "D");

// matrix[row][col] = 1;

// return;
// }

// function findPath(matrix, n) {
// let ans = [];
// getallpath(matrix, n, 0, 0, ans, "");
// return ans;
// }

// let m = [
// [1, 0, 0, 0, 0],
// [1, 1, 1, 1, 1],
// [1, 1, 1, 0, 1],
// [0, 0, 0, 0, 1],
// [0, 0, 0, 0, 1],
// ];
// let n = m.length;
// let ans = findPath(m, n);
// for (let i of ans) {
// console.log(i + " ");
// }

// =================================================================

const getallpath = (matrix, x, y, row, column, ans, c) => {
  if (
    row >= y ||
    column >= x ||
    row < 0 ||
    column < 0 ||
    matrix[row][column] !== c
  ) {
    return;
  }

  if (row === y - 1 && column === x - 1) {
    ans.push();
    return;
  }

  matrix[row][column] = 0;

  getallpath(matrix, x, y, row - 1, col, ans, c);
  getallpath(matrix, x, y, row, col + 1, ans, c);
  getallpath(matrix, x, y, row, col - 1, ans, c);
  getallpath(matrix, x, y, row + 1, col, ans, c);

  matrix[row][column] = 1;

  return;
};

// Call func getaiiPath
const findPath = (matrix, x, y, a, b) => {
  let ans = [];
  getallpath(matrix, x, y, a, b, ans, (c = { ele }));
  return ans;
};

// Call func findPath
let ans = findPath(elements, x, y, a, b);
for (let i of ans) {
  console.log(i + " ");
}

// =================================================================

// function getallpath(matrix, row, col, ans, cur,a=1) {
//   if ( matrix[row][col] !== a) {
//     return;
//   }

//   if (row === n - 1 && col === n - 1) {
//     ans.push(cur);
//     return;
//   }

//   matrix[row][col] = 0;

//   getallpath(matrix, n, row - 1, col, ans, cur + "U");
//   getallpath(matrix, n, row, col + 1, ans, cur + "R");
//   getallpath(matrix, n, row, col - 1, ans, cur + "L");
//   getallpath(matrix, n, row + 1, col, ans, cur + "D");

//   matrix[row][col] = 1;

//   return;
//   }

//   function findPath(matrix, n) {
//   let ans = [];
//   getallpath(matrix, n, 0, 2, ans, "");
//   return ans;
//   }

//   let m = [
//   [1, 2, 2, 0, 0],
//   [1, 1, 1, 1, 1],
//   [2, 1, 1, 0, 1],
//   [2, 2, 2, 2, 1],
//   [0, 0, 0, 0, 1],
//   ];
//   let n = m.length;
//   let ans = findPath(m, n);
//   for (let i of ans) {
//   console.log(i + " ");
//   }
