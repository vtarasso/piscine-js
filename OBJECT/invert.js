// var obj = {
//     name : "Jack",
//     age: 18,
//     std : 12,
//     fees : 5000
// }

function invert(obj) {
    let obj2 = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        let val = obj[key]
        obj2[val] = key
    })
    return obj2
}

// console.log(invert(obj))