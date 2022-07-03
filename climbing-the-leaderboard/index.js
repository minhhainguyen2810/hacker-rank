/**
 * @see https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 */

const result = [];

/**
 * return the rank
 * @param {Array} array
 * @param {*} value
 * @returns
 */
function binaryFind(array, value, start = 0, end = array.length - 1) {
  const middle = Math.floor((end + start) / 2);

  if (array[start].score <= value) {
    return array[start].rank;
  }
  if (array[middle].score === value) {
    return array[middle].rank;
  }
  if (array[end].score > value) {
    return array[end].rank + 1;
  }
  if (array[end].score === value) {
    return array[end].rank;
  }
  if (start === end - 1) {
    return array[end].rank;
  }

  if (array[middle].score > value) {
    return binaryFind(array, value, middle + 1, end);
  }
  if (array[middle].score < value) {
    return binaryFind(array, value, start, middle - 1);
  }
}

function climbingLeaderboard(ranked, player) {
  let rank = 1;
  const scoresWithRanked = ranked.map((score, index) => {
    if (index > 0 && score < ranked[index - 1]) {
      rank += 1;
    }
    return {
      rank,
      score,
    };
  });

  return player.map((score) => binaryFind(scoresWithRanked, score));
}

function main() {
  console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [50]));
}

main();
