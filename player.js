class Player {
    constructor(objLayer, pos, size, state) {

        //Instance variables
        this.xx = pos[0];
        this.yy = pos[1];
        this.ww = size[0];
        this.hh = size[1];
        this.color = color;
        this.state = state;


        this.visible = true;
        this.canUpdate = true

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

            
        }
    }
}