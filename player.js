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

let x = 0;

class Player {
    constructor(objLayer, pos, size, state) {
        this.playerSpeed = 5;

        //Instance variables
        this.xx = pos[0];
        this.yy = pos[1];
        this.ww = size[0];
        this.hh = size[1];
        this.color = color;
        this.state = state;
        this.directionX = 1;
        this.directionY = 1;

        this.visible = true;
        this.canUpdate = true;
        this.isColliding = false;

        //Animation Frames
        this.walkAnimationImages = [
            "/assets/skins/0.png",
            "/assets/skins/1.png",
            "/assets/skins/2.png",
            "/assets/skins/3.png",
        ];

        this.jumpAnimationImages = [
            "/assets/skins/jump.png",
            "/assets/skins/jump.png",
            "/assets/skins/jump.png",
            "/assets/skins/jump.png",
        ];

        this.walkAnimation = [];
        this.jumpAnimation = [];

        //Loading the frame...
        for (var i = 0; i < this.walkAnimationImages.length; i++) {
            this.walkAnimation.push(loadImage(this.walkAnimationImages[i]));
        }
        for (var i = 0; i < this.jumpAnimationImages.length; i++) {
            this.jumpAnimation.push(loadImage(this.jumpAnimationImages[i]));
        }

        this.staticPlayerImage = loadImage("/assets/skins/0.png");

        objLayer.childrenObjs.push(this);
    }

    //Sprite Functions
    Draw() {
        let s = 0;

        if (this.visible) {
            if (this.state == "IdleState") {
                // Printing on screen the static images of the player while in Idle state
                noSmooth();
                image(
                    this.staticPlayerImage,
                    this.xx,
                    this.yy,
                    this.ww,
                    this.hh
                );

                // Playing the walking animation when the player is on MoveState
            } else if (this.state == "MoveState") {
                noSmooth();
                image(
                    this.walkAnimation[x],
                    this.xx,
                    this.yy,
                    this.ww,
                    this.hh
                );

                //Playing the new animation frame every 4 fps
                if (frameCount % 4 === 0) {
                    x += 1;
                    if (x >= this.walkAnimation.length) {
                        x = 0;
                    }
                }

                //Playing the jump animation when the player is on jump state
            } else if (this.state == "JumpState") {
                noSmooth();
                image(
                    this.jumpAnimation[s],
                    this.xx,
                    this.yy,
                    this.ww,
                    this.hh
                );

                //Playing the new animation frame every 4 fps
                if (frameCount % 4 === 0) {
                    s += 1;
                    if (s >= this.jumpAnimation.length) {
                        s = 0;
                    }
                }
            }
        }
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

    // States

    IdleState() {
        DEBUG && console.log(`Player State: ${this.state}`);
    }

    JumpState() {
        DEBUG && console.log(`Player State: ${this.state}`);
    }

    MoveState() {
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

    // --------
}
