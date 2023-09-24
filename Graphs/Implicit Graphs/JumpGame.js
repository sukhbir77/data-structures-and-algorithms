/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let isValid = (node) => {
    return node >= 0 && node < arr.length;
  };
  let queue = [start];
  let seen = new Set([]);
  seen.add(start);

  while (queue.length) {
    let newQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      let next = node + arr[node];
      let prev = node - arr[node];

      if (arr[node] == 0) {
        return true;
      }

      if (isValid(next) && !seen.has(next)) {
        seen.add(next);
        newQueue.push(next);
      }

      if (isValid(prev) && !seen.has(prev)) {
        seen.add(prev);
        newQueue.push(prev);
      }
    }

    queue = newQueue;
  }

  return false;
};

console.log(canReach([4, 4, 1, 3, 0, 3], 2));
