// This Solution work great where in place insertion was not criteria
const arr1 = [1,2,5,8,9];
const arr2 = [3,4,7,10,11];


function merge(arr1: number[], arr2: number[]){
    const result = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i]<arr2[j]) {
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
         result.push(arr1[i]);
            i++
    }
    while(j<arr2.length){
         result.push(arr2[j]);
            j++
    }
    return result;
}

console.log('result is ', merge(arr1, arr2));