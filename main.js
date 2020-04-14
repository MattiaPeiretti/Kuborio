const DEBUG = true;
const backgroundColor = 50;

let playerLayer;
let player;
let world;
let texturepack;

function preload() {
    texturepack = new Texturepack("test");
    
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    // *** layers ***

    world = new World(texturepack);

    //Creating the main player layer
    playerLayer = new objLayer();

    //Creating the actual player
    player = new Player(playerLayer, [50, 50], [20, 20], "IdleState");
    this.state = "IdleState";
    //player.visible = false;
    player.canUpdate = true;
}

function draw() {
    if (world.isLoaded) {
    StaticRender(); //For rendering backgrounds and static stuff
    FixedUpdate(); //Physics
    Update(); //Game Logic
    LateUpdate(); //Late updates, after movement and such
    Render(); //Render the actual things

    // playerLayer.Draw();
    }

    
}

const FixedUpdate = () => {};

const Update = () => {
    world.checkCollisions();
    playerLayer.Update();
    
};

const LateUpdate = () => {};

const Render = () => {
    playerLayer.Draw();
};

const StaticRender = () => {
    world.Draw();
};

function keyPressed() {
    playerLayer.KeyPressed(keyCode);
}
