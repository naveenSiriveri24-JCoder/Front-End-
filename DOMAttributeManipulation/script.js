
// Select the button using DOM
const button = document.getElementById("btn");


// Add event listener for click
button.addEventListener("click", function () {

    // Create image element
    const img = document.createElement("img");

    // Set image source
    img.setAttribute("src", "image1.png");

    // Set size + absolute position
    img.style.position = "absolute";
    img.style.width = "8vw";
    img.style.borderRadius="50px";

    // Generate random X and Y positions
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 50;
    const randomZ = Math.random() * 80;
    
    // Using setAttribute to set style
    img.setAttribute("style", `left:${randomX}vw; top:${randomY}vh; bottom:${randomZ}vh; position:absolute; width:10vw`);

    // Add image to body
    document.body.appendChild(img);

});



