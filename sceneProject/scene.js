const canvas = document.getElementById("scene");
const canvasContext = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "Images/pexels-szaboviktor-3227984.jpg";

const ballImage = new Image();
ballImage.src = "Images/168833918216354192314521-128.png";

const netImage = new Image();
netImage.src = "Images/3663487961636048492-128.png";


backgroundImage.onload = function(){
    canvasContext.drawImage(backgroundImage,0,0,canvas.width, canvas.height);
};

ballImage.onload = function(){canvasContext.drawImage(ballImage, 0, 34, 20, 20);
}

netImage.onload = function(){canvasContext.drawImage(netImage, 900, 0, 40, 80 );
}

canvasContext.font = "24px Verdana";

canvasContext.fillStyle ="yellow";

canvasContext.fillText("Futbol!!!!", 200,150);


