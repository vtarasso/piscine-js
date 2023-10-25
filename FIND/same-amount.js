const sameAmount = (str, regexpres1, regexpres2) => {
    let times1 = (str.match(new RegExp(regexpres1, 'g'))|| []).length
    let times2 = (str.match(new RegExp(regexpres2, 'g')) || []).length
    return times1 == times2 
}