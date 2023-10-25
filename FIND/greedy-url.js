function getURL(str){
    let regexp= /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return str.match(regexp);
}
function greedyQuery(str){
    let url = getURL(str);
    let res =[];
    for (let i=0;i<url.length;i++){
        let greedyUrl = url[i].split('&');
        if (greedyUrl.length>=3){
            res.push(url[i]);
        }
    }
    return res;
}
function notSoGreedy(str){
    let url = getURL(str);
    let res =[];
    for (let i=0;i<url.length;i++){
        let greedyUrl = url[i].split('&');
        if (greedyUrl.length<=3&&greedyUrl.length>=2){
            res.push(url[i]);
        }
    }
    return res;
}