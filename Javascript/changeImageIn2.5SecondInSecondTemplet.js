function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function changeImage() {
    setInterval(displayNextImage, 2500);
}
var images = [],
    x = -1;
images[0] = "image/1.jpg";
images[1] = "image/map.png";
images[2] = "image/2.jpg";
images[3] = "image/flex-1.jpg";
images[4] = "image/flex-2.jpg"