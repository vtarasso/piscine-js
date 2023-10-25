function pyramid(str, num) {
    let newStr = "";
    num *= 2
    for (let i = 0; i < num; i++) {
        let space = (num - i - 2) / 2;
        
        for (let l = 0; l < space * str.length; l++) {
            newStr += " "
        }
        for (let j = 0; j <= i; j++) {
            newStr += str;
        }
        newStr += "\n"
        i++;
    }
    return newStr.slice(0, newStr.length - 1);
}