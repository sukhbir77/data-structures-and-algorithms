function binary(nums, left, right, findNum) {
  if (left > right) {
    return -1;
  }

  let mid = parseInt((left + right) / 2);

  if (findNum == nums[mid]) {
    return mid;
  }

  if (findNum < nums[mid]) {
    return binary(nums, left, mid - 1, findNum);
  }

  return binary(nums, mid + 1, right, findNum);
}


console.log(binary([1,2,3,4,5,6,7,8,9,11,12,13], 0, [1,2,3,4,5,6,7,8,9,11,12,13].length, 9 ))