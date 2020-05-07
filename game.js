const DEBUG = true;

let CANVAS_SIZE_W;
let CANVAS_SIZE_H;

const game = new p5(() => {
    //Constructor
    this.playerLayer = null;
    this.player = null;
    this.world = null;
    this.texturepack = null;
    this.collisionHandler = null;
    this.camera = null;

    this.preload = () => {
        texturepack = new Texturepack("test"); //initializing texturepack
    };

    this.setup = () => {
        CANVAS_SIZE_W = window.innerWidth;
        CANVAS_SIZE_H = window.innerHeight;
        createCanvas(CANVAS_SIZE_W, CANVAS_SIZE_H);

        this.world = new World(texturepack); //Creating the world
        this.world.renderMap(); // Rendering the map

        // *** layers ***
        this.playerLayer = new objLayer(); //Creating the main player layer

        //Creating the player
        this.player = new Player(
            playerLayer,
            [200, 200],
            [52, 80], //Image ratio is 32:21, namely 1.52
            "IdleState"
        );

        this.collisionHandler = new collisionHandler(this.world.map); //Creating a collision handler

        this.Camera = new Camera(this.player, this.world.map); //Creating a camera that will follow the player
    };

    this.draw = () => {
        if (world.isLoaded) {
            this.StaticRender(); //For rendering backgrounds and static stuff
            this.FixedUpdate(); //Physics
            this.Update(); //Game Logic
            this.LateUpdate(); //Late updates, after movement and such
            this.Render(); //Render the actual things
        }
    };

    this.StaticRender = () => {
        //Displaying the world
        this.Camera.render();
        this.Camera.vision.Draw(); //Drawind what the camera has rendered
    };

    this.FixedUpdate = () => {};

    this.Update = () => {
        this.collisionHandler.checkCollisions(
            this.playerLayer,
            this.Camera.getOffset()
        ); //Checking for collisions

        playerLayer.Update(); //Updating player
    };

    this.LateUpdate = () => {};

    this.Render = () => {
        playerLayer.Draw(); //Drawing Player
    };
});
