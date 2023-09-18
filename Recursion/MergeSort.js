function mergeSort(nums, start, end){
    if(start < end){
        let mid = parseInt((start + end) / 2);
        mergeSort(nums, start, mid);
        mergeSort(nums, mid + 1, end);
        merge(nums, start, mid, end); 
    }
}

function merge(nums, start, mid, end){
    let temp = new Array(end - start + 1);

    let i  = start;
    let k = 0;
    let j = mid + 1;

    while(i <= mid && j <= end){
        if(nums[i] < nums[j]){
            temp[k] = nums[i];
            i++;
            k++;
        }
        else{
            temp[k] = nums[j];
            j++;
            k++;
        }
    }

    // Add remaining elements in the left sub array
    while(i <= mid){
        temp[k] = nums[i];
        i++;
        k++;
    }

    // Add remaining elements in the Right sub array
    while(j <= end){
        temp[k] = nums[j];
        j++;
        k++;
    }

    for(let i = start; i <= end; i++){
        data[i] = temp[i - start];
    }
}

let data = [1,2,65,34,234,43,12,42,431,4,2,1,5];

mergeSort(data, 0, data.length - 1);

console.log(data);