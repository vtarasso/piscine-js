export function createCircle() {
    document.addEventListener('mousedown', event => {
        const newCirc = document.createElement('div')
        newCirc.setAttribute('class', 'circle')
        newCirc.setAttribute('id', 'Tester')
        let x = event.clientX - 25
        let y = event.clientY - 25
        newCirc.setAttribute('style', 'left: ' + x.toString() + 'px; top: ' + y.toString() + 'px; background: white;')
        document.body.appendChild(newCirc);
    })
}

export function moveCircle() {

    document.addEventListener('mousemove', event => {
        const lastCircle = document.querySelector('div:last-child')
        lastCircle.style.left = `${event.clientX - 25}px`
        lastCircle.style.top = `${event.clientY - 25}px`
        document.body.append(lastCircle)
        let midBox = document.querySelector('div.box')
        let dims = midBox.getBoundingClientRect()


        if (lastCircle.getAttribute('class') !== 'box') {
            if ((+lastCircle.style.left.replace('px', '') > (dims.x)) && (+lastCircle.style.left.replace('px', '') < (dims.right - 50)) && (+lastCircle.style.top.replace('px', '') > (dims.top)) && (+lastCircle.style.top.replace('px', '') < (dims.bottom - 50))) {
                lastCircle.style.background = 'var(--purple)'
            }
        }

        if (event.clientX - 25 < (dims.x) && lastCircle.style.background === 'var(--purple)') {
            console.log(lastCircle.style.left)
            lastCircle.style.left = (dims.x).toString() + 'px'

            if (event.clientY - 25 < (dims.top)) {
                lastCircle.style.top = (dims.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(dims.bottom)

            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastCircle.style.top = (dims.bottom - 50).toString() + 'px'
            }
        } else if (event.clientX - 25 > (dims.right - 50) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.left = (dims.right - 50).toString() + 'px'

            if (event.clientY - 25 < (dims.top)) {
                lastCircle.style.top = (dims.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(dims.bottom)

            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastCircle.style.top = (dims.bottom - 50).toString() + 'px'
            }
        } else if ((event.clientY - 25 > (dims.bottom - 50)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.bottom - 50).toString() + 'px'

        } else if ((event.clientY - 25 < (dims.top)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.top).toString() + 'px'

        }

    })
}

export function setBox() {
    const centerBox = document.createElement('div')
    centerBox.setAttribute('class', 'box')
    document.body.append(centerBox)
}

/*
let box;
let flag = true;
let x;
let y;
let circle;
export function createCircle() {
  addEventListener("click", function () {
    circle = document.createElement("div");
    circle.className = "circle";
    if (flag) {
      circle.style.background = "white";
      circle.style.left = x;
      circle.style.top = y;
    } else {
      circle.style.background = "var(--purple)";
      circle.style.left = x;
      circle.style.top = y;
    }
    document.body.appendChild(circle);
    flag = true;
  });
}
export function moveCircle() {
  addEventListener("mousemove", (e) => {
    document.querySelectorAll(".circleRem").forEach((elem) => {
      elem.remove();
    });
    x = e.clientX - 25 + "px";
    y = e.clientY - 25 + "px";
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.classList.add("circleRem");
    if (flag) {
      circle.style.background = "white";
    } else {
      circle.style.background = "var(--purple)";
    }
    circle.style.left = e.clientX - 25 + "px";
    circle.style.top = e.clientY - 25 + "px";
    document.body.appendChild(circle);
    if (
      e.clientX >= box.getBoundingClientRect().left + 25 &&
      e.clientX <= box.getBoundingClientRect().right - 25 &&
      e.clientY >= box.getBoundingClientRect().top + 25 &&
      e.clientY <= box.getBoundingClientRect().bottom - 25
    ) {
      document.querySelector(".circle").style.background = "var(--purple)";
      flag = false;
    }
    if (!flag) {
      if (e.clientX - 25 < box.getBoundingClientRect().left) {
        circle.style.left = box.getBoundingClientRect().left + "px";
        document.querySelector(".circle").style.background = "var(--purple)";
      }
      if (e.clientX + 25 > box.getBoundingClientRect().right) {
        circle.style.left = box.getBoundingClientRect().right - 50 + "px";
        document.querySelector(".circle").style.background = "var(--purple)";
      }
      if (e.clientY - 25 < box.getBoundingClientRect().top) {
        circle.style.top = box.getBoundingClientRect().top + "px";
        document.querySelector(".circle").style.background = "var(--purple)";
      }
      if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
        circle.style.top = box.getBoundingClientRect().bottom - 50 + "px";
        document.querySelector(".circle").style.background = "var(--purple)";
      }
    }
  });
}
export function setBox() {
  box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);
  console.log(box.getBoundingClientRect().bottom);
}
*/