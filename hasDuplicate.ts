// Time complexty O(n) - Each element of array inserted sequentially
// Space complexty O(n) - Each element of array inserted in Set

// One liner and cleaner solution
function hasDuplicateSol1(arr: number[]){
    return arr.length !== new Set(arr).size;
}

// Optimal solution - Offer benefit like early exit
// Time complexty O(n)
// space complexty O(n)
function hasDuplicateSol2(arr: number[]){
    const set = new Set();
    for(let num of arr){
        if(set.has(num)) return true;
        set.add(num)
    }
    return false
}


function hasDuplicateSol3(arr: number[]){
    const obj: Record<number, number> = {};
    for(let num of arr){
       obj[num] = (obj[num] || 0) + 1;
       if(obj[num] === 2) return true;
    }
    return false;   
}