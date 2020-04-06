
const backgroundColor = (50)

let playerLayer;
let player;

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(backgroundColor);

    //layers
    playerLayer = new objLayer();

    player = new Player("IdleState", [50, 50], [20, 20])
    playerLayer.childrenObjs.push(player);
    
}

function draw() {
    playerLayer.Draw();
}