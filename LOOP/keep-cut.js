const cutFirst = (arg) => {
    return arg.slice(2);
}

const cutLast = (arg) => {
    return arg.slice(0, arg.length-2);
}

const cutFirstLast = (arg) => {
    return arg.slice(2, arg.length-2);
}

const keepFirst = (arg) => {
    return arg.slice(0, 2);
}
const keepLast = (arg) => {
    return arg.slice(arg.length-2, arg.length)
}

const keepFirstLast = (arg) => {
    if (arg.length < 5) {
        return arg;
    }

    let a = keepFirst(arg);
    let b = keepLast(arg);

    let res = a + b;
    return res
}
