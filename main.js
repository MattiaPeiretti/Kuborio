
const backgroundColor = (50)

let playerLayer;
let player;

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(backgroundColor);

    // *** layers ***
    //Creating the main player layer
    playerLayer = new objLayer();

    //Creating the actual player
    player = new Player(playerLayer, [50, 50], [20, 20], "IdleState");

}

function draw() {
    playerLayer.Draw();
}