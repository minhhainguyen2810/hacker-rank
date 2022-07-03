/**
 * @see https://www.hackerrank.com/challenges/magic-square-forming/problem
 */

// result from test.js
const magicSquares = [
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
];

/**
 * calculate sum of all element in array
 * @param two dimension array s
 */
function calculateDiff(a1, a2) {
  let result = 0;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a1[i].length; j++) {
      result += Math.abs(a1[i][j] - a2[i][j]);
    }
  }

  return result;
}

function formingMagicSquare(s) {
  let min = 1000;

  for (let index = 0; index < magicSquares.length; index++) {
    const diff = calculateDiff(magicSquares[index], s);

    if (diff < min) {
      min = diff;
    }
  }

  return min;
}

function main() {
  console.log(formingMagicSquare([4, 9, 2, 3, 5, 7, 8, 1, 5]));
}

main();
