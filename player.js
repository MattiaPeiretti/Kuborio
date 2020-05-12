// Directions
const FORWARD = 270;
const LEFT = 180;
const BACKWARDS = 90;
const RIGHT = 0;

//Keys
const W_KEY = 87;
const A_KEY = 65;
const S_KEY = 83;
const D_KEY = 68;
const SPACE_KEY = 32;

const PLAYER_ANIMATIONS_SHEET_PATH =
    "/assets/animations/player/animationSheet.json";
const PLAYER_ANIMATIONS_BASE_PATH = "/assets/animations/player";
const ANIMATION_FILE_FORMAT = ".png";

let x = 0;

class Player {
    constructor(objLayer, pos, size, state = "IdleState") {
        this.playerSpeed = 5;

        //Instance variables
        this.xx = pos[0];
        this.yy = pos[1];
        this.ww = size[0];
        this.hh = size[1];

        this.state = state;

        this.directionX = 1;
        this.directionY = 1;

        //Props
        this.visible = true;
        this.canUpdate = true;
        this.isColliding = false;

        //Sprite Initialization
        this.sprite = new Sprite();
        this.sprite.loadAnimations();
        this.sprite.setSize(this.ww, this.hh);
        this.sprite.setDefaultMesh(loadImage("assets/Player/skins/0.png"));

        objLayer.childrenObjs.push(this); //Adding the player to its gamelayer
    }

    //Sprite Functions
    Draw() {
        this.sprite.Draw(this.xx, this.yy);
    }

    Update() {
        if (this.canUpdate) {
            //Putting the player on Idle if no key is pressed...
            if (!keyIsPressed) {
                this.state = "IdleState";
            }

            //Putting the player on MoveState if one of the WASD key is pressed.
            if (
                keyIsDown(W_KEY) ||
                keyIsDown(A_KEY) ||
                keyIsDown(S_KEY) ||
                keyIsDown(D_KEY)
            ) {
                this.state = "MoveState";
            }

            //Putting the player on JumpState if one of the SPACE key is pressed.
            if (keyIsDown(SPACE_KEY)) {
                this.state = "JumpState";
            }

            //Running whatever state the player is on...
            this[this.state]();
        }
    }

    //* States ------------------------------------------

    IdleState() {
        this.sprite.stopAnimating(); //Stopping whatever animation the sprite is running
        DEBUG && console.log(`Player State: ${this.state}`);
    }

    JumpState() {
        this.sprite.animate("JumpAnimation");
        DEBUG && console.log(`Player State: ${this.state}`);
    }

    MoveState() {
        this.sprite.animate("RunningAnimation");
        DEBUG && console.log(`Player State: ${this.state}`);

        //Keyboard controls for moving the players...

        if (keyIsDown(W_KEY)) {
            this.directionY = -1;
            this.directionX = 0;
        }
        if (keyIsDown(A_KEY)) {
            this.directionX = -1;
            this.directionY = 0;
        }
        if (keyIsDown(S_KEY)) {
            this.directionY = 1;
            this.directionX = 0;
        }
        if (keyIsDown(D_KEY)) {
            this.directionX = 1;
            this.directionY = 0;
        }
        if (keyIsDown(D_KEY)) {
            this.directionX = 1;
            this.directionY = 0;
        }

        if (keyIsDown(S_KEY) && keyIsDown(D_KEY)) {
            this.directionX = 1;
            this.directionY = 1;
        }
        if (keyIsDown(S_KEY) && keyIsDown(A_KEY)) {
            this.directionX = -1;
            this.directionY = 1;
        }
        if (keyIsDown(W_KEY) && keyIsDown(D_KEY)) {
            this.directionX = 1;
            this.directionY = -1;
        }
        if (keyIsDown(W_KEY) && keyIsDown(A_KEY)) {
            this.directionX = -1;
            this.directionY = -1;
        }

        this.yy = this.yy + this.playerSpeed * this.directionY;
        this.xx = this.xx + this.playerSpeed * this.directionX;
    }

    //* -------------------------------------------------
}

const PLAYER_ANIMATION_SPEED = 6;

let counter = 0;

class Sprite {
    constructor() {
        this.animations = {};
        this.defaultMesh = null;
        this.toAnimate = null;
        this.size = null;

        this.xx = null;
        this.yy = null;
    }

    loadAnimations() {
        let AnimationData = [],
            currentFolder,
            friendlyPath,
            animationFrames;

        //Loading Datasheet:
        this.data = loadJson(PLAYER_ANIMATIONS_SHEET_PATH);

        //If the data is read correctly, proceed loading the images
        if (this.data) {
            for (let animation in this.data) {
                currentFolder = this.data[animation].folder;
                friendlyPath = `${PLAYER_ANIMATIONS_BASE_PATH}/${currentFolder}`; //Getting the folder where the frames of the animation are located

                animationFrames = this.data[animation].frames; //Getting the names of the frames

                //looping through all the frame names, loading the respective image,
                //and pushing it to the Animation data: an array which contains
                //every frame(loaded image) of the current animation
                for (var frame in animationFrames) {
                    AnimationData.push(
                        loadImage(
                            `${friendlyPath}/${frame}${ANIMATION_FILE_FORMAT}`
                        )
                    );
                }
                this.animations[animation] = AnimationData;
                AnimationData = [];
            }
        } else {
            console.error(
                `Couldn't find animations sheet at ${PLAYER_ANIMATIONS_SHEET_PATH}`
            );
        }
    }

    animate(animation) {
        this.toAnimate = animation;
    }

    stopAnimating() {
        this.toAnimate = null;
    }

    runAnimation(animation) {
        let framesToPlay = this.animations[animation]; //Getting total number of frames of the current animation

        if (frameCount % PLAYER_ANIMATION_SPEED === 0) {
            counter += 1;
        }

        if (counter >= framesToPlay.length) {
            counter = 0;
        }

        noSmooth();
        image(
            framesToPlay[counter],
            this.xx,
            this.yy,
            this.size[0],
            this.size[1]
        );
    }

    Draw(x, y) {
        if (this.size) {
            this.xx = x;
            this.yy = y;

            //Running any animation if present, otherwise displaying the default mesh...
            if (this.toAnimate) {
                this.runAnimation(this.toAnimate);
            } else {
                noSmooth();
                image(
                    this.defaultMesh,
                    this.xx,
                    this.yy,
                    this.size[0],
                    this.size[1]
                );
            }
        } else
            console.error("Size of the sprite is not declared! Cannot Draw()");
    }

    setDefaultMesh(img) {
        this.defaultMesh = img;
    }

    setSize(w, h) {
        this.size = [w, h];
    }
}
