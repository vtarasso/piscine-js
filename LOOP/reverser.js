const reverse = (val) => {
    if (Array.isArray(val)) {
        let res = [];
        for (let i = val.length - 1; i >= 0; i--) {
            res.push(val[i]);
        }
        return res;
    } else {
        let res = "";
        for (let i = val.length - 1; i >= 0; i--) {
            res += val[i];
        }
        return res;
    }
};
/*
function reverse(strArr) {
    if (typeof (strArr) === "string") {
        let res = "";
        for (let i = strArr.length - 1; i >= 0; i--) {
            res += strArr[i];
        }
        return res
    } else {
        let res = [];
        for (let i = strArr.length - 1; i >= 0; i--) {
            res.push(strArr[i]);
        }
        return res
    }
}
*/