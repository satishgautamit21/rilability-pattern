function searchInsertPos(arr: number[], target: number){
    let start = 0;
    let end = arr.length -1;
    while(start<=end){
        const mid = Math.floor((start+end)/2);
        if(target === arr[mid]) return mid;
        if(arr[mid] > target) end = mid -1 ;
        else start = mid+1;
    }
    return start;
}

console.log('searchInsertPos is ', searchInsertPos([1,3,4, 5,7,9], 5));
