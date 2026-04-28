function validPalindrome(str: string){
    let start = 0;
    let end = str.length -1;

    while(start<end){
        while(start<end && !isAlphanumeric(str[start]))  start++;
        while(start<end && !isAlphanumeric(str[end]))  end--;
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

function isAlphanumeric(char: string){
    const testChar = char.toLowerCase();
    return ((testChar <='a' && testChar >= 'z') || (testChar <='0' && testChar >= '9'))
}