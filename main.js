sound = "";

function preload() {
    song = loadSound("newmusic.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    canvas.position(450, 250)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}
