function validAnagram(str1: string, str2: string){
    if(str1.length !== str2.length) return false;
    const obj: Record<string, number> = {};
    for(let char of str1){
        obj[char] = (obj[char]|| 0)+ 1;
    }

    for(let char of str2) {
        if(!obj[char])  return false
        obj[char]--;
    }
    return true
}