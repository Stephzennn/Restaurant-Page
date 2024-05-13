function leg() {
    console.log("THis is the about page")
}

function content() {
    let homeDiv = document.createElement("div")
    homeDiv.classList.add("card")
    let p1 = document.createElement("p")
    p1.textContent = "About Us"
    p1.classList.add("Head_Title")
    let p1_1 = document.createElement("p")
    let part1 = document.createTextNode("Welcome to ")
    let part2 = document.createTextNode(", your number one source for all things jam!")
    let p2 = document.createElement("span")
    p2.textContent = "Jam Delights"
    p2.classList.add("Head_Title")
    p2.style.fontSize = "15px"
    p1_1.appendChild(part1)
    p1_1.appendChild(p2)
    p1_1.appendChild(part2)
    //let p3 = document.createElement("p")
    //p3.textContent = ", your number one source for all things jam!"
    let p4 = document.createElement("p")
    p4.textContent = "We're dedicated to giving you the very best of jams, with a focus on quality, flavor, and uniqueness. Our jams are made from the freshest fruits, sourced from local farmers and prepared with love and care."
    let p5 = document.createElement("p")
    p5.textContent = "Founded in 2020, Jam Delights has come a long way from its beginnings. When we first started out, our passion for creating the most delicious and unique jams drove us to start our own business."
    let p6 = document.createElement("p")
    p6.textContent = "We now serve customers all over the world, and are thrilled to be a part of the quirky, eco-friendly, fair-trade wing of the food industry."
    let p7 = document.createElement("p")
    p7.textContent = "We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us."
    let p8 = document.createElement("p")
    p8.textContent = "Sincerely,"
    p8.classList.add("Head_Title")
    p8.style.fontSize = "15px"
    let p9 = document.createElement("p")
    p9.textContent = "The Jam Delights Team"
    p9.classList.add("Head_Title")
    p9.style.fontSize = "15px"
    homeDiv.appendChild(p1)
    homeDiv.appendChild(p1_1)
    //homeDiv.appendChild(p2)
    //homeDiv.appendChild(p3)
    homeDiv.appendChild(p4)
    homeDiv.appendChild(p5)
    homeDiv.appendChild(p6)
    homeDiv.appendChild(p7)
    homeDiv.appendChild(p8)
    homeDiv.appendChild(p9)
    
    
    return homeDiv;
}

export {leg , content};