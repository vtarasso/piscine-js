function findExpression(number, start=1, history="1"){
    if (number == start) {
        return history
    } else if (start > number) {
        return undefined
    } else {
        return findExpression(number, start + 4, history + " " + add4) || findExpression(number, start * 2, history + " " + mul2)
    }
}