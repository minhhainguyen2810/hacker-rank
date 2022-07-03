/**
 * @see https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true
 */

/**
 * minimum distance between Queen and obstacles in 8 direction
 * -k, -k
 * 0, -k,
 * k, -k
 * k, 0
 * k, k
 * 0, k
 * -k, k
 * -k, 0
 */
function initializeDistanceArray(n, queenX, queenY) {
  const distance = new Array(8);
  distance[0] = Math.min(queenX - 1, queenY - 1);
  distance[1] = queenY - 1;
  distance[2] = Math.min(n - queenX, queenY - 1);
  distance[3] = n - queenX;
  distance[4] = Math.min(n - queenX, n - queenY);
  distance[5] = n - queenY;
  distance[6] = Math.min(queenX - 1, n - queenY);
  distance[7] = queenX - 1;

  return distance;
}

const getDirection = (first, last) => {
  switch (true) {
    case first === last && first < 0:
      return 0;
    case first === 0 && last < 0:
      return 1;
    case first === -last && last < 0:
      return 2;
    case first > 0 && last === 0:
      return 3;
    case first === last && first > 0:
      return 4;
    case first === 0 && last > 0:
      return 5;
    case first === -last && first < 0:
      return 6;
    case first < 0 && last === 0:
      return 7;
    default:
      return undefined;
  }
};

function queensAttack(n, k, queenX, queenY, obstacles) {
  const distance = initializeDistanceArray(n, queenX, queenY);

  for (let i = 0; i < k; i++) {
    const first = obstacles[i][0] - queenX;
    const last = obstacles[i][1] - queenY;

    // if this is a blocker
    const direction = getDirection(first, last);
    if (direction !== undefined) {
      distance[direction] = Math.min(
        distance[direction],
        Math.max(Math.abs(first), Math.abs(last)) - 1
      );
    }
  }

  return distance.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
