function words(arg) {
    return arg.split(" ")
}

function  sentence(arg) {
    return arg.join(" ")
}

function yell(arg) {
   return arg.toUpperCase()
}

function whisper(arg) {
    return "*" + arg.toLowerCase() + "*"
}

function capitalize(arg) {
    let first = arg[0].toUpperCase()
    let all = arg.slice(1).toLowerCase() 
    return first + all
}
