import './style.css';

function logg() {
    console.log("This is Home");
}

function leg() {
    console.log("Hello")
}


function content() {
    let homeDiv = document.createElement("div")
    homeDiv.classList.add("card")
    let p1 = document.createElement("p")
    p1.textContent = "The Sweet Spread of Health: Unveiling the Benefits and Selection of Fruit Jams"
    p1.classList.add("Head_Title")
    homeDiv.appendChild(p1)
    let p2 = document.createElement("p")
    p2.textContent = "Fruit jams, the vibrant and sweet condiments that grace our breakfast tables and desserts, are more than just a treat for the taste buds. These delightful spreads have been a staple in culinary traditions worldwide, adding a burst of flavor to various dishes. But beyond their delicious taste, fruit jams offer a plethora of health benefits and come in an array of types, each with its unique characteristics."
    homeDiv.appendChild(p2)
    let p3 = document.createElement("p")
    p3.textContent = "Types of Fruit Jam"
    p3.classList.add("Head_Title")
    homeDiv.appendChild(p3)
    let p4 = document.createElement("p")
    p4.textContent = "Marmalade Jam: This type is traditionally made from bitter oranges and includes pieces of citrus rind, giving it a distinctive tangy flavor and texture."
    homeDiv.appendChild(p4)
    let p5 = document.createElement("p")
    p5.textContent = "Fruit Jam: A smoother spread, fruit jam is made from a variety of fruits such as strawberries, apricots, and raspberries, and is known for its versatility."
    homeDiv.appendChild(p5)
    let p6 = document.createElement("p")
    p6.textContent = "Jam Jelly: Created from fruit juice, this type has a firmer, chewier texture and is clear in appearance."
    homeDiv.appendChild(p6)
    let p7 = document.createElement("p")
    p7.textContent = "Compote: A cousin of jam, compote is chunkier, with larger pieces of fruit and a slightly looser, more syrupy texture."
    homeDiv.appendChild(p7)
    let p8 = document.createElement("p")
    p8.textContent = "Benefits of Fruit Jam"
    p8.classList.add("Head_Title")
    homeDiv.appendChild(p8)
    let p9 = document.createElement("p")
    p9.textContent = "Fruit jams are not just delicious; they're also packed with nutrients. They are an excellent source of vitamins and minerals, deriving these essentials from the fruits they are made of. For instance, jams made from citrus fruits are rich in Vitamin C, which is crucial for immune system function and skin health."
    homeDiv.appendChild(p9)
    let p10 = document.createElement("p")
    p10.textContent = "Moreover, fruit jams can be a good source of dietary fiber, especially those that retain the fruit's skin. Fiber aids in digestion and can contribute to a feeling of fullness, which may help in weight management. The natural sugars in fruit jams provide a quick energy boost, making them a great option for a morning meal or a midday snack."
    homeDiv.appendChild(p10)
    return homeDiv;
}
export {logg,leg, content};