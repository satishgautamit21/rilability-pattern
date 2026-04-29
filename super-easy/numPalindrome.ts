function numPalindromeSol1(num: number){
    let temp = num;
    let sum = 0;
    while(temp>0){
        sum = sum*10 +temp%10;
        temp = Math.floor(temp/10)
    }

    return sum === num;
}

function numPalindromeSol2(num: number){
    let temp = num;
    let isNegetive = false
    if(num <0) {
        temp = num * -1;
        isNegetive = true;
    }
    let sum = 0;
    while(temp>0){
        sum = sum*10 +temp%10;
        temp = Math.floor(temp/10)
    }

    return isNegetive ? sum*-1 === num: sum === num;
}