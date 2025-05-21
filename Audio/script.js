const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

document.getElementById("playButton1").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("audioPlayer1").play();
});

document.getElementById("playButton2").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("audioPlayer2").play();
});

document.getElementById("playButton3").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("audioPlayer3").play();
});


const images = {
    item1: new Image(),
    item2: new Image(),
    item3: new Image(),
};

images.item1.src = "elephant.png";  
images.item2.src = "wolf.png";  
images.item3.src = "gorilla.png";  

const backgrounds = {
    background1: new Image(),
    background2: new Image(),
    background3: new Image(),
};

backgrounds.background1.src = "Background/Elephant.jpg";  
backgrounds.background2.src = "Background/Gorilla.jpg";  
backgrounds.background3.src = "Background/wolf.jpg";  

images.item1.onload = drawScene;
images.item2.onload = drawScene;
images.item3.onload = drawScene;

backgrounds.background1.onload = drawScene;
backgrounds.background2.onload = drawScene;
backgrounds.background3.onload = drawScene;

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   const selectedBackground = document.querySelector('input[name="background"]:checked');

    if (selectedBackground && backgrounds[selectedBackground.value]) {
        ctx.drawImage(backgrounds[selectedBackground.value], 0, 0, canvas.width, canvas.height);
    }

    const xPos = document.getElementById("xSlider").value;
    const yPos = document.getElementById("ySlider").value;

    ctx.drawImage(images.item1, xPos, yPos, 50, 50);

  
    if (document.getElementById("item2").checked) {
        ctx.drawImage(images.item2, 200, 200, 50, 50);
    }
    if (document.getElementById("item3").checked) {
        ctx.drawImage(images.item3, 300, 300, 50, 50);
    }
}

document.getElementById("controls").addEventListener("input", drawScene);
drawScene();
