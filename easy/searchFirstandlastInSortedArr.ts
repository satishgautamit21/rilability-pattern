function searchFirstandLast(arr: number[], target: number){
    let start =0;
    let end = arr.length -1;

    while(start<=end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            if(arr[mid-1]=== target) return [mid-1, mid];
            else if(arr[mid+1]===target) return [mid, mid+1];
            else return [mid, mid]
        }
        if(arr[mid]> target) end = mid -1;
        else start = mid+1;
    }
    return [-1, -1]
}

console.log('first and last is ', searchFirstandLast([1,3,5,6,9], 6));
console.log('first and last is ', searchFirstandLast([1,3,5,6,6,9], 6));
console.log('first and last is ', searchFirstandLast([], 6));