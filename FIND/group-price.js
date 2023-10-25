function groupPrice(st){
    let rg = /([$]|USD)[\d]*.\d{2}/gi
    let arr = st.match(rg)
    let ans = []
    if (arr == null){
        return []
    }
    for (let i in arr){
        let res = []
        res.push(arr[i])
        let temp = arr[i].split(".")
        if (temp[0][0] == '$'){
            res.push(temp[0].slice(1))
        } else{
            res.push(temp[0].slice(3))
        }
        res.push(temp[1])
        ans.push(res)
    }
    return ans
}