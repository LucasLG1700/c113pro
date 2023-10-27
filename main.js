function preload(){}
function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(300, 250);
    video = createCapture(VIDEO);
    video.hide();
    
   
}

function draw() {
    image(video, 0, 0, 640, 480);
    
    rect(55, 20, 30, 365);
    rect(540, 20, 30, 365);
    rect(55, 20, 500, 20);
    rect(55, 400, 500, 20);
    circle(70, 30, 50);
    circle(70, 400, 50);
    circle(560, 30, 50);
    circle(560, 400, 50);
}
function takeSnapshot(){
    
        save('studentName.png');
}