function swapTwoImage() {
    var image1, image2;
    image1 = document.getElementById('img1').src;
    image2 = document.getElementById('img2').src;
    document.getElementById('img2').src = image1;
    document.getElementById('img1').src = image2;
}

function swapThreeImage() {
    var image1, image2, image3, image4;
    image1 = document.getElementById('img1').src;
    image4 = document.getElementById('img4').src;
    image2 = document.getElementById('img2').src;
    image3 = document.getElementById('img3').src;
    document.getElementById('img4').src = image1;
    document.getElementById('img1').src = image4;
    document.getElementById('img2').src = image3;
    document.getElementById('img3').src = image2;
}