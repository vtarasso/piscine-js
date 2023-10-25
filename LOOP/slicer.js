const slice = (arr, start, end=arr.length) =>{
    if(start < 0){
        start += arr.length
    }
    if (start < -arr.length){
        start = 0
    }
    if (end < 0){
        end += arr.length
    }
    if (end >= arr.length){
        end = arr.length
    }
    if (end <= start){
        return
    }
    
    if(Array.isArray(arr)){
        let result=[];
        for(let i=start; i<end; i++){
            result.push(arr[i])
        }
        return result
    }
    if (typeof arr == "string"){
        let result="";
        for(let i=start; i<end; i++){
            result += arr[i]
        }
        return result
    }
   
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, -1))
/*
const slice = (slc, n1, n2) => {
    if (n1 < 0) {
        n1 = slc.length + n1
    }
    if ((n2 < 0) && (n2 != null)) {
        n2 = slc.length + n2
    }

    let upto = slc.length

    if (n2 != null) {
        upto = n2
    }

    if (Array.isArray(slc)) {

        //create an empty slice to return the new value
        let res = [];
        //Loop through the array until the end, with i as num initially
        for (let i = n1; i < upto; i++) {
            res.push(slc[i])
        }
        return res

    } else {
        let res = '';
        //Loop through the array until the end, with i as num initially
        for (let i = n1; i < upto; i++) {
            res += slc[i]
        }
        return res
    }
}
*/
