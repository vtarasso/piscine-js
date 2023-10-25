function retry(count, callback) {
    return async function (...arg) {
        while (true) {
            try {
                return await callback(...arg)
            } catch (e) {
                if (count == 0) throw e
                count--
            }
        }
    }
}
function timeout(delay, callback) {
    return async function (...arg) {
        let start = new Date()
        let result = await callback(...arg)
        if (new Date() - start <= delay) return result
        throw new Error('timeout')
    }
}