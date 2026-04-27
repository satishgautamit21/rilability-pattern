// Good solution - For technical interview
// Time complexity O(n)
// Space complexity O(n)
function reverseSol1(str: string) {
    const strArr = [...str]
    let start = 0;
    let end = strArr.length-1;

    while(start < end){
        const temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }

    let finalStr = '';
    for(let char of strArr) finalStr += char;
    return finalStr
}

// Good solution - For production
// Time complexity O(n)
// Space complexity O(n)
function reverseSol2(str: string) {
    return [...str].reverse().join('');
}

// Poor solution 
// Time complexity O(n^2)
// Space complexity O(n)
function reverseSol3(str: string) {
    if(str.length<=1) return str;
    const finalStr: string = reverseSol3(str.slice(1)) + str[0]
    return finalStr;
}

console.log('solution using rec ', reverseSol1('mango'))
console.log('solution using rec ', reverseSol2('mango'))
console.log('solution using rec ', reverseSol3('mango'))