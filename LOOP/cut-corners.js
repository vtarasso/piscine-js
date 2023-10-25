function round(num) {
    let f = fraction(num);
    let res = 0;
    let check = true;
    if (num < 0) {
        num = -num;
        check = false;
    }
    if (f >= 0.5) {
        res = num - f + 1;
    } else {
        res = num - f;
    }
    if (!check) {
        res = -res;
    }
    return res;
}

function ceil(num) {
    let f = fraction(num);
    let res = 0;
    let check = true;
    if (num < 0) {
        num = -num;
        check = false;
    }
    if (f > 0 && check) {
        res = num - f + 1;
    } else if (f > 0 && !check) {
        if (f === 1) { res = num }
        else { res = num - f; }
    }
    if (!check) {
        res = -res;
    }
    return res;
}

function floor(num) {
    let f = fraction(num);
    let res = 0;
    let check = true;
    if (num < 0) {
        num = -num;
        check = false;
    }
    if (check) {
        res = num - f;
    } else if (!check) {
        res = num - f + 1;
    }
    if (!check) {
        res = -res;
    }
    return res;
}

function trunc(num) {
    let f = fraction(num);
    let res = 0;
    let check = true;
    if (num < 0) {
        num = -num;
        check = false;
    }
    res = num - f;
    if (!check) {
        res = -res;
    }
    return res;
}

function fraction(num) {
    if (num < 0) { num = -num }
    while (num > 10000000) {
        num -= 10000000;
    }
    while (num > 10) {
        num -= 10
    }
    while (num > 1) {
        num--;
    }
    return num;
}