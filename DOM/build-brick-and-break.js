export function build(x){
    let i = 1
    let block = ''
    let counterFoundation = 2
    let interval = setInterval(function(){
        block = document.createElement('div')
        document.body.append(block)
        block.innerHTML = i
        block.id = 'brick-'+i
        ++i
        if(counterFoundation === 3){
        block.dataset.foundation = true
        counterFoundation = 0
        }
        ++counterFoundation
        console.log(block)
        if(i===x+1){
            clearInterval(interval)
        }
    },100,i)
    return block
}
export function repair(...repairs){
    for (let i = 0; i < repairs.length; i++) {
        let elem = document.getElementById(repairs[i])
        // console.log(elem.getAttribute("foundation"))
        let n = repairs[i].replace('brick-', '')
        if(n%3===2){
            elem.setAttribute('data-repaired',"in progress")
            elem.innerHTML = n
        }else{
            elem.setAttribute("data-repaired","true")
            elem.innerHTML = n
        }
        // console.log(Number(repairs[i]))
    }
}
export function destroy(){
    let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
}

// //Create a variable to use for a unique id and one to track the position
// let value = 1
// let pos = 0


// export const build = (x) => {


//     function buildBrick() {
//         const newDiv = document.createElement("div");
//         newDiv.setAttribute('id', 'brick-' + value.toString())
//         value++

//         if (pos === 1) newDiv.setAttribute('data-foundation', 'true')
//         pos++
//         if (pos === 3) pos = 0

//         // add the newly created element and its content into the DOM
//         const currentDiv = document.getElementById('brick-' + (value - 1).toString());
//         document.body.insertBefore(newDiv, currentDiv);
//     }
//     const start = setInterval(buildBrick, 100)

//     setTimeout(stop_interval, x * 100);
//     function stop_interval() {
//         clearInterval(start);
//     }
// }



// export const destroy = () => {
//     const lastBrick = document.querySelector('div:last-child')
//     lastBrick.remove();
    
// }

// export const repair = (...htmlIds) => {

//     let ids = Array.from(htmlIds)
//     console.log(Array.isArray(ids))

//     function repairer(ids) {
//         const curr = document.getElementById(ids)
//         console.log(curr)
//         console.log(curr.hasAttribute('data-foundation'))

//         if (curr.hasAttribute('data-foundation')) {
//             curr.setAttribute('data-repaired', 'in progress')
//         } else {
//             curr.setAttribute('data-repaired', 'true')
//         }
//         console.log(curr.getAttribute('data-repaired'))
//     }

//     ids.forEach(element => {
//         repairer(element)
//     })
// }