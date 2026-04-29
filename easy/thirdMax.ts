function thirdMax(arr: number[]) {
    let max1=-Infinity;
    let max2=-Infinity;
    let max3=-Infinity;
    for(let item of arr){

        // Skip duplicate value.
        // we can also use Set but it will take extra space;
        if(item === max1 || item === max2 || item === max3) continue;

        if(item>max1 ){
            max3=max2;
            max2=max1
            max1=item;
        } else if(item >max2) {
            max3=max2;
            max2=item;
        } else if(item >max3) max3 = item;
    }

    // this will handle less than 3 size array
    return max3 === -Infinity? max2:max3
}

console.log('max3 item is ', thirdMax([7,4,12,9,41,3]));

console.log('max3 item is ', thirdMax([1,2]));

console.log('max3 item is ', thirdMax([3,3,2,2, 1]));