function moveZeroSol1(arr: number[]) {
    let nonZeroIndex = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
           arr[nonZeroIndex]=arr[i];
           nonZeroIndex++ 
        }
    }
    for(let i=nonZeroIndex;i<arr.length;i++) arr[i]=0
    return arr;
}

function moveZeroSol2(arr: number[]) {
    let left = 0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]!==0){
           [arr[left], arr[right]] = [arr[right], arr[left]]
           left++ 
        }
    }
    return arr;
}



console.log('arr is ', moveZeroSol1([1,   0,   3,   0,   4,   5,   0,   0,   7,   8]));
                             //  1,   skip 3   skip  4    5   skp  skp   7    8
                             // nz=1 nz=1 nz=2 nz=2  nz=3 nz=4          nz=5  nz6


console.log('arr is ', moveZeroSol2([1,   0,   3,   0,   4,   5,   0,   0,   7,   8]));
                             //  1,   skip 3   skip  4    5   skp  skp   7    8
                             // nz=1 nz=1 nz=2 nz=2  nz=3 nz=4          nz=5  nz6