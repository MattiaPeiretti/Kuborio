const DEBUG = true;
const backgroundColor = 50;

// let playerLayer;
// let player;
// let world;
// let texturepack;


const game = new p5(() => {

    this.playerLayer = null;
    this.player = null;
    this.world = null;
    this.texturepack = null;



    this.preload = () => {
        texturepack = new Texturepack("test");
    } 

    this.setup = () => {
        createCanvas(windowWidth, windowHeight);
        // *** layers ***

        this.world = new World(texturepack);

        //Creating the main player layer
        this.playerLayer = new objLayer();

        //Creating the actual player
        this.player = new Player(playerLayer, [50, 50], [20, 20], "IdleState");
        //player.visible = false;
        this.player.canUpdate = true;
    }

    this.draw = () => {
        if (world.isLoaded) {
            this.StaticRender(); //For rendering backgrounds and static stuff
            this.FixedUpdate(); //Physics
            this.Update(); //Game Logic
            this.LateUpdate(); //Late updates, after movement and such
            this.Render(); //Render the actual things
        
            // playerLayer.Draw();
            }
    }


    this.StaticRender = () => {
        world.Draw();
    }

    this.FixedUpdate = () =>  {

    }

    this.Update = () => {
        world.checkCollisions();
        playerLayer.Update();
    }

    this.LateUpdate= () =>  {

    }

    this.Render = () =>  {
        playerLayer.Draw();
    }

    this.keyPressed = () =>  {
        playerLayer.KeyPressed(keyCode);
    }
});


