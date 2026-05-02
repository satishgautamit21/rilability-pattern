// This Solution works where in place insertion is criteria
const arrwithZero = [1,2,5,8,9,0,0,0,0,0];
const arrwithNoZero = [3,4,7,10,11];


function mergeInPlace(arr1: number[], m: number, arr2: number[], n: number){
    let i=m -1;
    let j=n -1;
    let k = m + n -1
    while(i>=0 && j>=0) {
        if(arr1[i]>arr2[j]) {
            arr1[k] = arr1[i];
            i--;
            k--
        } else {
            arr1[k] = arr2[j];
            j--;
            k--
        }
    }

    // We are handling J only because we get out of 1st loop only
    // when either i or j is less than condition met.
    // let say j met this condition then arr1 is already in correct position
    // we don't explicitly need to iterate on arr1 then reinsert in arr1 only.

    // But if j left then we need to update arr1 with arr2 element
    while(j>=0){
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    return arr1;
}

console.log('result is ', mergeInPlace(arrwithZero,5, arrwithNoZero, 5));