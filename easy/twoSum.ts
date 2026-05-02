// when array is not sorted
function twoSum(arr: number[], target: number): number[]{
    const map = new Map();
    let index = 0;
    for(let item of arr){
        const res = target - item;
        if(map.has(res)) return [index, map.get(res)];
        map.set(item, index);
        index++
    }
    return [-1, -1]
}

console.log('two sum index are ', twoSum([5,2,9,1,4,3], 12));