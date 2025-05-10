const canvas = document.getElementById("scene");
const canvasContext = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "Images/pexels-szaboviktor-3227984.jpg";

const ballImage = new Image();
ballImage.src = "Images/168833918216354192314521-128.png";

const netImage = new Image();
netImage.src = "Images/3663487961636048492-128.png";

// drawImage(image, dx, dy, dwidth, dHeight);
// fillText(text, x, y) or  fillText(text, x, y, maxWidth)
function drawSCENE(){
    canvasContext.drawImage(backgroundImage,0,0,canvas.width, canvas.height);

    canvasContext.drawImage(ballImage, 50, 350, 50, 50); // (image, foward/backwards, up/down, width, height)
    canvasContext.drawImage(ballImage, 200, 200, 50, 50);
    canvasContext.drawImage(ballImage, 550, 150, 50, 50);
    canvasContext.drawImage(ballImage, 820, 100, 60, 75);

    canvasContext.drawImage(netImage, 900, 70, 100, 150 );

    canvasContext.font = "18px Verdana"; // size of text and styling of text
    canvasContext.fillStyle ="yellow";
    canvasContext.textAlign = "center";

    canvasContext.fillText("GOAL!!!!", canvas.width/2,110);
    canvasContext.fillText("What a strike from the boy wonder PT, You can still see the after images of the ball on replay", canvas.width/2,300);

};

let imagesLoaded = 0;
//making sure that all the images are loaded before drawing the scene
function isAllImagesLoaded(){
    imagesLoaded++;
    if(imagesLoaded === 3)
        drawSCENE();
}

backgroundImage.onload = isAllImagesLoaded;
ballImage.onload = isAllImagesLoaded;
netImage.onload = isAllImagesLoaded;



