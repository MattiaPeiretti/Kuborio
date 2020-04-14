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

        //Main Sprite
        this.sprite = createSprite(this.xx, this.yy, this.ww, this.hh);

        objLayer.childrenObjs.push(this);
    }

    //Sprite Functions
    Draw() {
        if (this.visible) {
            rect(this.xx, this.yy, this.ww, this.hh)
        }
    }

    Update() {
        if (this.canUpdate) {
            if (!keyIsPressed) {
                this.state = "IdleState";
            }

            if (keyIsDown(W_KEY) || keyIsDown(A_KEY) || keyIsDown(S_KEY) || keyIsDown(D_KEY)) {
                this.state = "MoveState";
            }
            

            this[this.state]();
        }
    }

    // States

    IdleState() {
        DEBUG && console.log(`Player State: ${this.state}`);
        this.sprite.setSpeed(0, 0);
    }

    JumpState() {
        DEBUG && console.log(`Player State: ${this.state}`);
    }

    MoveState() {
        DEBUG && console.log(`Player State: ${this.state}`);
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
