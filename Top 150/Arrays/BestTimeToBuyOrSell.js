var maxProfit = function(prices) {
    let max = -Infinity;
    let left = 0;
    let right = prices.length - 1;
    let min = Infinity;

    while(left <= right){
        max = Math.max(max, prices[right]);
        min = Math.min(min, prices[left]);
        left++;
        right--;
    }
    console.log(max , min)

    return max - min <= 0 ? 0 : max - min;
};

console.log(maxProfit([3,2,6,5,0,3]))