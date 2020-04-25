const DEBUG = true;

let CANVAS_SIZE_W;
let CANVAS_SIZE_H;

// let playerLayer;
// let player;
// let world;
// let texturepack;

const game = new p5(() => {
    //Constructor
    this.playerLayer = null;
    this.player = null;
    this.world = null;
    this.texturepack = null;
    this.collisionHandler = null;

    this.preload = () => {
        texturepack = new Texturepack("test"); //initializing texturepack
    };

    this.setup = () => {
        CANVAS_SIZE_W = window.innerWidth;
        CANVAS_SIZE_H = window.innerHeight;
        createCanvas(CANVAS_SIZE_W, CANVAS_SIZE_H);

        this.world = new World(texturepack); //Creating the world instance
        this.world.renderMap(); // Rendering and loading up the map

        // *** layers ***
        this.playerLayer = new objLayer(); //Creating the main player layer

        //Creating the player
        this.player = new Player(
            playerLayer,
            [200, 200],
            [52, 80], //Image ratio is 32:21, namely 1.52
            "IdleState"
        );

        // Messing around with some player props :)

        //player.visible = false;
        this.player.canUpdate = true;

        this.collisionHandler = new collisionHandler(this.world.map);
    };

    this.draw = () => {
        if (world.isLoaded) {
            this.StaticRender(); //For rendering backgrounds and static stuff
            this.FixedUpdate(); //Physics
            this.Update(); //Game Logic
            this.LateUpdate(); //Late updates, after movement and such
            this.Render(); //Render the actual things

            // playerLayer.Draw();
        }
    };

    this.StaticRender = () => {
        world.Draw();
    };

    this.FixedUpdate = () => {};

    this.Update = () => {
        this.collisionHandler.checkCollisions(
            this.playerLayer,
            world.getOffset()
        );
        world.renderWindow();
        playerLayer.Update();
    };

    this.LateUpdate = () => {};

    this.Render = () => {
        playerLayer.Draw();
    };
});
