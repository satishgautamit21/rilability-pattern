function reverseVowelSol1(str: string){
    let strArr = [...str]
    let left = 0;
    let right = str.length-1;
    const vowel: string[] = ['a','e','i','o','u']
    while(left < right){
        while(left < right && vowel.indexOf(strArr[left].toLocaleLowerCase()) === -1) left++;
        while(left < right && vowel.indexOf(strArr[right].toLocaleLowerCase()) === -1) right--;
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++;
        right--
    }
    return strArr.join('');
}

// Optimized
// Searching on set is much efficient that index of;
function reverseVowelSol2(str: string){
    let strArr = [...str]
    let left = 0;
    let right = str.length-1;
    const vowel: Set<string> = new Set(['a','e','i','o','u'])
    while(left < right){
        while(left < right && !vowel.has(strArr[left].toLocaleLowerCase())) left++;
        while(left < right && !vowel.has(strArr[right].toLocaleLowerCase())) right--;
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++;
        right--
    }
    return strArr.join('');
}