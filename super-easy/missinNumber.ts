function missingSol1(arr: number[]){
    const n = arr.length;
    const sum = (n*(n+1))/2;
    return arr.reduce((ac,cv)=> ac - cv ,sum)
}

function missingSol2(arr: number[]){
    const n = arr.length;
    const sum = (n*(n+1))/2;
    let arrSum = 0;
    for(let num of arr) arrSum +=num;
    return sum - arrSum
}