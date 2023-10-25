function first(argument) {
    return argument[0]
}

function last(argument) {
    let lastEl = argument.length
    return argument[lastEl - 1]
}

function kiss(argument) {
    let f = first(argument)
    let l = last(argument)
    let res = [l, f]
    return res
}