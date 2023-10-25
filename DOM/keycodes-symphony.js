document.addEventListener("keydown", function (event) {
    compose(event);
  });
  function compose(e) {
    if (e === undefined) {
      return;
    }
    if ([...Array(26).keys()].map((i) => i + 97).includes(e.key.charCodeAt(0))) {
      let div = document.createElement("div");
      div.classList.add("note");
      div.style.backgroundColor = `rgb(${
        (255 / 26) * (e.key.charCodeAt(0) - 97)
      }, ${(255 / 26) * (e.key.charCodeAt(0) - 97)}, ${
        (255 / 26) * (e.key.charCodeAt(0) - 97)
      })`;
      div.innerHTML = e.key;
      document.body.appendChild(div);
    } else if (e.key === "Backspace") {
      let notes = document.getElementsByClassName("note");
      notes[notes.length - 1].remove();
    } else if (e.key === "Escape") {
      let notes = document.getElementsByClassName("note");
      while (notes.length > 0) {
        notes[0].remove();
      }
    }
  }
  export { compose };
  
  /*
  export function compose() {
    document.addEventListener('keydown', event => {
        let lowercase = 'abcaadefghijklmnopqrstuvwxyz'
        if (lowercase.includes(event.key)) {
            const newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'note')
            newDiv.setAttribute('style', 'background-color: '+ colors[lowercase.indexOf(event.key)] + ';')


            const newContent = document.createTextNode(event.key);
            newDiv.appendChild(newContent); 
            document.body.append(newDiv);

        } else if (event.key == 'Backspace') {
            const lastBrick = document.querySelector('div:last-child')
            lastBrick.remove();
        } else if (event.key == 'Escape') {
            let createdDivs = document.querySelectorAll('div')
            for (let i = 0; i < createdDivs.length; i++) {
                createdDivs[i].remove()
            }

        }
    })
}

export const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip'
]
  */