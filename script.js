var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
var imageContainer = document.querySelector("#container");

imageContainer.addEventListener("mouseenter", () => {
    // cursor.style.display = "block";
    cursor.style.opacity = "100%";
});

imageContainer.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0%";
});

console.log(cursor);
console.log(image.getBoundingClientRect());

window.addEventListener("mousemove", (e) => {
    var imgDecallageX = image.getBoundingClientRect().x;
    var imgDecallageY = image.getBoundingClientRect().y;
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    cursor.style.backgroundPosition =
        "" +
        (imgDecallageX + 75 - e.pageX) +
        "px " +
        (imgDecallageY + 75 - e.pageY) +
        "px";
});

// var conteneurMomie = document.querySelector("#momie-container");
// var imageMomie = document.querySelector("#momie-container img");

// conteneurMomie.addEventListener("mousemove", (e) => {
//     let xAxis =
//         (conteneurMomie.offsetWidth / 2 -
//             (e.pageX - conteneurMomie.offsetLeft)) /
//         20;
//     let yAxis =
//         (conteneurMomie.offsetHeight / 2 -
//             (e.pageY - conteneurMomie.offsetTop)) /
//         20;
//     console.log(xAxis, yAxis);
//     imageMomie.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) rotateZ(5deg)`;
// });

// conteneurMomie.addEventListener("mouseenter", (e) => {
//     console.log(e);
//     console.log(conteneurMomie.offsetWidth, conteneurMomie.offsetLeft);
//     imageMomie.style.transition = "none";
// });

// conteneurMomie.addEventListener("mouseleave", (e) => {
//     imageMomie.style.transition = "all 0.4s ease";
//     imageMomie.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(5deg)`;
// });
