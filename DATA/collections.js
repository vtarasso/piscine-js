function arrToSet(arr) {
    return new Set(arr);
}
function arrToStr(arr) {
    return arr.join("");
}
function setToArr(set) {
    return Array.from(set);
}
function setToStr(set) {
    return Array.from(set).join("");
}
function strToArr(str) {
    return str.split("");
}
function strToSet(str) {
    return new Set(strToArr(str));
}
function mapToObj(map) {
    return Object.fromEntries(map);
}
function objToArr(obj) {
    return Object.values(obj);
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
function arrToObj(arr) {
    return Object.assign({}, arr);
}
function strToObj(str) {
    return arrToObj(strToArr(str));
}
function superTypeOf(type) {
    if (type instanceof Map) {
        return "Map";
    } else if (type instanceof Set) {
        return "Set";
    } else if (type instanceof Array) {
        return "Array";
    } else if (type === null) {
        return "null";
    } else if (typeof (type) === "undefined") {
        return "undefined"
    } else {
        return capitalize(typeof (type));
    }
}
function capitalize(str) {
    return str.charAt().toUpperCase() + str.slice(1).toLowerCase();
}
