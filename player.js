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
        this.playerSpeed = 30;

        //Instance variables
        this.xx = pos[0];
        this.yy = pos[1];
        this.ww = size[0];
        this.hh = size[1];
        this.color = color;
        this.state = state;

        this.visible = true;
        this.canUpdate = true;

        //Main Sprite
        this.sprite = createSprite(this.xx, this.yy, this.ww, this.hh);

        objLayer.childrenObjs.push(this);
    }

    //Sprite Functions
    Draw() {
        if (this.visible) {
            drawSprite(this.sprite);
        }
    }

    Update() {
        if (this.canUpdate) {
            if (!keyIsPressed) {
                this.state = "IdleState";
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
    }

    // --------

    KeyPressed(KeyCode) {
        this.state = "MoveState";
        switch (KeyCode) {
            case W_KEY:
                this.sprite.setSpeed(this.playerSpeed, FORWARD);
                break;
            case A_KEY:
                this.sprite.setSpeed(this.playerSpeed, LEFT);
                break;
            case S_KEY:
                this.sprite.setSpeed(this.playerSpeed, BACKWARDS);
                break;
            case D_KEY:
                this.sprite.setSpeed(this.playerSpeed, RIGHT);
                break;
            default:
                this.sprite.setSpeed(0, 0);
        }
        DEBUG && console.log(`Key Pressed: ${KeyCode}`);
    }
}
