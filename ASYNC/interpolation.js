function interpolation(obj) {
    let num = 0;
    let interval = setInterval(() => {
        let x = obj.start + num * (obj.end - obj.start) / obj.step
        let y = (num + 1) * obj.duration / obj.step
        obj.callback([x, y])
        num++
        if (num === obj.step) {
            clearInterval(interval)
        }
    }, obj.duration / obj.step)
}