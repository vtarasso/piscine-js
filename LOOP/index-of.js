const indexOf = (arr, val, index = 0) => {
    for (let i = index ;i < arr.length; i++) {
        if (arr[i] === val){
            return i;
        }
    }
    return -1;
}

const lastIndexOf = (arr, val, index) => {
    let count = arr.length;
    let res = -1
    if (index != null) {
        count = index;
    }
    for (let i = 0; i <= count; i++) {
        if (arr[i] == val) {
            res = i;
        }
    }
    return res;
}

const includes = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return true;
        }
    }
    return false;
}

console.log(lastIndexOf(["t", 0, 0, "t"], "t", 2))