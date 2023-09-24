/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  let queue = [startGene];
  let seen = new Set([]);
  seen.add(startGene);

  let steps = 0;
  while (queue.length) {
    let nextQueue = [];
    let currLength = queue.length;
    steps++;

    for (let i = 0; i < currLength; i++) {
      let node = queue[i];
      if (node == endGene) {
        return steps;
      }
      for (let c of "ACGT") {
        for (let j = 0; j < node.length; j++) {
          let neighbor = node.slice(0, j) + c + node.slice(j + 1);
          if (!seen.has(neighbor) && bank.includes(neighbor)) {
            seen.add(neighbor);
            nextQueue.push(neighbor);
          }
        }
      }
    }

    queue = nextQueue;
  }

  return -1;
};

console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
