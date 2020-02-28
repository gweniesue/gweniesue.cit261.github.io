function drawSquare() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

function drawPattern() {
    let canvas = document.getElementById("myCanvas2");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";

    let img = new Image();
    img.src = "../images/dog.png";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100)
    };
}

function drawGradient() {
    let canvas = document.getElementById("myCanvas3");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

function drawCircle(myCanvas4) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 

}

function saveDrawing() {
    let canvas5 = document.getElementById("myCanvas5");
    window.open(canvas5.toDataURL("image/png"));
}

let button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("myCanvas6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 50, 50); 
}

