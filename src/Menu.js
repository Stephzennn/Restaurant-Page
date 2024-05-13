
import './style.css';
function logg() {
    console.log("This is the menu")
}

function content() {
    let homeDiv = document.createElement("div")
    homeDiv.style.display = "flex"
    homeDiv.style.flexDirection = "column"
    let titleDiv = document.createElement("div")
    titleDiv.textContent = "Available Jams"
    titleDiv.style.textAlign = "center"
    titleDiv.classList.add("Head_Title")
    homeDiv.appendChild(titleDiv)
    let ul = document.createElement("ul")

    let l1 = document.createElement("li")
    l1.textContent = "Homemade Strawberry Jam."
    let p1 = document.createElement('p')
    p1.appendChild(l1)
    //p1.style.border = "black solid"
    ul.appendChild(p1)
    let l2 = document.createElement("li")
    l2.textContent = "Small Batch Loquat Jam."
    let p2 = document.createElement('p')
    p2.appendChild(l2)
    ul.appendChild(p2)
    let l3 = document.createElement("li")
    l3.textContent = "Rosewater Raspberry Jam."
    let p3 = document.createElement('p')
    p3.appendChild(l3)
    ul.appendChild(p3)
    let l4 = document.createElement("li")
    l4.textContent = "Wild Plum Jam."
    let p4 = document.createElement('p')
    p4.appendChild(l4)
    ul.appendChild(p4)
    let l5 = document.createElement("li")
    l5.textContent = "Rhubarb Jam with Orange and Ginger."
    let p5 = document.createElement('p')
    p5.appendChild(l5)
    ul.appendChild(p5)
    let l6 = document.createElement("li")
    l6.textContent = "Hot Pepper Jam."
    let p6 = document.createElement('p')
    p6.appendChild(l6)
    ul.appendChild(p6)
    let l7 = document.createElement("li")
    l7.textContent = "Carrot Jam."
    let p7 = document.createElement('p')
    p7.appendChild(l7)
    ul.appendChild(p7)
    let l8 = document.createElement("li")
    l8.textContent = "Pomegranate Cranberry Jam."
    let p8 = document.createElement('p')
    p8.appendChild(l8)
    ul.appendChild(p8)
    homeDiv.appendChild(ul)
    return homeDiv
}
export {content};
