// Directions
const forward = 270;
const left = 180;
const backwards = 90;
const right = 0;

//Keys
const W = 87;
const A = 65;
const S = 83;
const D = 68;

class Player {
    constructor(objLayer, pos, size, state) {
        this.playerSpeed = 3;

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
            case W:
                this.sprite.setSpeed(this.playerSpeed, forward);
                break;
            case A:
                this.sprite.setSpeed(this.playerSpeed, left);
                break;
            case S:
                this.sprite.setSpeed(this.playerSpeed, backwards);
                break;
            case D:
                this.sprite.setSpeed(this.playerSpeed, right);
                break;
            default:
                this.sprite.setSpeed(0, 0);
        }
        DEBUG && console.log(`Key Pressed: ${KeyCode}`);
    }
}
