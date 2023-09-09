/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/

function checkPathCross(path) {
  let dic = new Map();

  let origin = [0, 0];
  dic.set(origin.join(","));

  for (let p of path) {
    if (p == "N") {
      origin[0] += 1;
    } else if (p == "S") {
      origin[0] -= 1;
    } else if (p == "E") {
      origin[1] += 1;
    } else {
      origin[1] -= 1;
    }
    if (dic.has(origin.join(","))) {
      return true;
    }
    dic.set(origin.join(","), 1);
  }

  return false;
}

console.log(checkPathCross("NESWW"));
