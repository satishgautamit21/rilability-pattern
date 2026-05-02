function validateParenthesis(str: string): boolean {
    const obj: Record<string, string> = {
         '}': '{',
         ')': '(',
         ']': '['
    }
    const stack: string[] = [];
    for (let char of str){
        if(char === '{' || char === '(' || char === '[') stack.push(char);
        else {
            const poppedItem = stack.pop();
            if(poppedItem !== obj[char]) return false
        }
    }
    return stack.length === 0;
}