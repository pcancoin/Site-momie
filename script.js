var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
var imageContainer = document.querySelector("#momie-container");

imageContainer.addEventListener("mouseenter", () => {
    // cursor.style.display = "block";
    cursor.style.opacity = "100%";
});

imageContainer.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0%";
});

window.addEventListener("mousemove", (e) => {
    var imgDecallageX = image.getBoundingClientRect().x;
    var imgDecallageY = image.getBoundingClientRect().y;
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    cursor.style.backgroundPosition =
        "" +
        (imgDecallageX + 75 - e.clientX) +
        "px " +
        (imgDecallageY + 75 - e.clientY) +
        "px";   
    cursor.style.backgroundSize = "auto " + image.height + "px"; 
});