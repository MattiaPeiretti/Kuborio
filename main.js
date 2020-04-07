
const backgroundColor = (50)

let playerLayer;
let player;

function setup() {
    createCanvas(windowWidth, windowHeight)
    

    // *** layers ***
    //Creating the main player layer
    playerLayer = new objLayer();

    //Creating the actual player
    player = new Player(playerLayer, [50, 50], [20, 20], "IdleState");
    //player.visible = false;
    player.canUpdate =true;

}

function draw() {
    StaticRender(); //For rendering backgrounds and static stuff
    FixedUpdate(); //Physics
    Update(); //Game Logic
    LateUpdate(); //Late updates, after movement and such
    Render(); //Render the actual things
    
    // playerLayer.Draw();
}

const FixedUpdate = () => {
    
}

const Update = () => {
    playerLayer.Update()
}

const LateUpdate = () => {

}

const Render = () => {
    playerLayer.Draw();
}

const StaticRender = () => {
    background(backgroundColor);
}