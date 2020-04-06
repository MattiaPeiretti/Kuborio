class Player {
    constructor(state, pos, size) {
        this.xx = pos[0];
        this.yy = pos[1];
        this.ww = size[0];
        this.hh = size[1];
        this.color = color;
        this.state = state;
        this.visible = True;

        this.sprite = createSprite(this.xx, this.yy, this.ww, this.hh);
    }

    Draw() {
        if (this.visible) {
            drawSprite(this.sprite);
        }
        
    }

    Update() {
        
    }
}