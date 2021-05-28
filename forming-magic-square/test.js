let result = [];
const a = [[], [], []];
let check = new Array(10).fill(false);

function checkSum(a) {
  const cross1 = a[0][0] + a[1][1] + a[2][2];
  const cross2 = a[0][2] + a[1][1] + a[2][0];
  for (let i = 0; i < 3; i++) {
    const row = a[i][0] + a[i][1] + a[i][2];
    const col = a[0][i] + a[1][i] + a[2][i];

    if (!(row === col && row === cross1 && row === cross2)) {
      return false;
    }
  }

  return true;
}

function push() {
  const newArray = a.map((arr) => arr.map((item) => item));

  result.push(newArray);
}

function visit(i, j) {
  if (i === 3) {
    if (checkSum(a)) {
      push();
      return;
    }
  }

  for (let k = 1; k <= 9; k++) {
    if (!check[k]) {
      check[k] = true;
      a[i][j] = k;
      if (j === 2) {
        visit(i + 1, 0);
      } else {
        visit(i, j + 1);
      }
      check[k] = false;
    }
  }
}

function solve() {
  visit(0, 0);
}

function main() {
  solve();

  console.log(result);
}

main();
