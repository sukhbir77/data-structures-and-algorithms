/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
*/

function findPlayer(matches) {
  let winners = new Map();
  let loosers = new Map();

  for (let i of matches) {
    winners.set(i[0], (winners.get(i[0]) || 0) + 1);
    loosers.set(i[1], (loosers.get(i[1]) || 0) + 1);
  }

  let ans = [[], []];

  for (let [key, value] of winners) {
    if (!loosers.has(key)) {
      ans[0].push(key);
    }
  }

  for (let [key, value] of loosers) {
    if (value === 1) {
      ans[1].push(key);
    }
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
}

console.log(
  findPlayer([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
