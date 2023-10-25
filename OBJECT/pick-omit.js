function pick(obj, keys) {
    let res = {}
    if (Array.isArray(keys)) {
        keys.forEach(key => { if (Object.keys(obj).includes(key)) {res[key] = obj[key]}})
    }
    else if (Object.keys(obj).includes(keys)) {
        res[keys] = obj[keys]
    }
    return res
}

function omit(obj, str) {
    let obj2 = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key =>{
        if (!str.includes(key)) {
        obj2[key] = obj[key];
        }
    })
    return obj2
}
