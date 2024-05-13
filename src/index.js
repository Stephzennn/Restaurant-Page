console.log("I am herwdwdwde wdwdw")
import  {content as MenuContent}  from './Menu';
import {content as HomeContent} from './Home';
import {content as AboutContent} from './About';
import Jam1 from './Image/Jam2.jpg';
import './style.css';


//HomeLogg();


const jam = new Image();
jam.src = Jam1;

let body = document.querySelector("body")
body.style.backgroundColor = "#44318D";
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.padding = "30px";
body.style.minHeight = "90vh";
body.style.paddingLeft = "20vh"
body.style.paddingRight = "20vh"
body.style.justifyContent = "space-between"
body.style.backgroundImage = `url(${jam.src})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover"
body.style.paddingBottom = "20px";
let Header = body.querySelector("header")
Header.style.display = "flex"
Header.style.justifyContent = "space-around"
Header.style.flexWrap = "wrap";



let button = body.querySelectorAll("button")
button.forEach(element => {
    element.style.width = "100px"
    element.style.height = "40px"
    element.style.borderRadius = "10px"
    element.style.border = "0px"
    element.style.color = "white"
    element.style.fontWeight = "bold"
    element.style.fontSize = "20px"
    element.style.backgroundColor = "#2A1B3D"
});

let content = body.querySelector("#content")



//content.style.border = "red solid"
content.style.backgroundColor = "#44318D";
content.style.minHeight ="90vh";
content.style.padding = "10vh"
content.style.paddingLeft = "20%"
content.style.paddingRight = "20%"
content.style.borderRadius = "50px";
content.style.paddingBottom = "10vh"
//content.style.backgroundImage = Jam1;
content.style.margin = "0px"

content.style.marginBottom = "20px";
content.style.marginTop = "5%";

/*
content.style.backgroundImage = `url(${jam.src})`;
content.style.backgroundRepeat = "no-repeat";
content.style.backgroundSize = "cover"
*/

let div = document.createElement("div")
div.style.border = "black solid"
div.style.backgroundColor = "white"
div.style.height = "100%"
div.style.minHeight = "70vh"
div.style.padding = "5vh";

//div.appendChild(jam);

let Home = body.querySelector("nav:nth-child(1)>button:nth-child(1)")
Home.addEventListener ("click", () => {
    let g = HomeContent();
    div.replaceChildren();
    div.appendChild(g)
    
    
})

let About = body.querySelector("nav:nth-child(3)>button:nth-child(1)")
About.addEventListener("click", ()=>{
    let g = AboutContent();
    div.replaceChildren();
    div.appendChild(g)
})

let Menu = body.querySelector("nav:nth-child(2)>button:nth-child(1)")
Menu.addEventListener("click", ()=>{
    let g = MenuContent();
    div.replaceChildren();
    div.appendChild(g)
})
let g = HomeContent();
    div.replaceChildren();
    div.appendChild(g)
content.appendChild(div)


