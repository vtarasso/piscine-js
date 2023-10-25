// export function geвnerateLetters(){
//     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     for(let i=1;i<=120;i++){
//         let char = ''
//         char += possible.charAt(Math.floor(Math.random()*possible.length))
//         let elem = document.createElement('div')
//         elem.innerHTML = char
//         elem.style.fontSize = (i+10)+'px';
//         if (i <= 40 ){
//             elem.style.fontWeight = "300";
//         } else if (i <= 80) {
//             elem.style.fontWeight = "400";
//         } else {
//             elem.style.fontWeight = "600";
//         }
//         document.body.append(elem)
//         console.log(i)
//     }
// }

export const generateLetters = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 1; i <= 120; i++) {
        const letters = alphabet[Math.floor(Math.random()*alphabet.length)]
        let newDiv = document.createElement('div')
        newDiv.append(letters)

        //newDiv.innerHTML = letters

        newDiv.style.fontSize = i + 10 + 'px'

        if (i <= 40) {
            newDiv.style.fontWeight = 300
        } else if (i > 40 && i <= 80) {
            newDiv.style.fontWeight = 400
        } else {
            newDiv.style.fontWeight = 600
        }
        document.body.append(newDiv)
        //console.log(i)
    }
}

