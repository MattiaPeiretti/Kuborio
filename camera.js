//Class Camera, takes care of showing a precise portion of the world,
//The class itself is more about the rendering of the offset, the subclass of the camera
// Vision, worrys about displaing the would itself rendering and drawing the tiles...
class Camera {
    constructor(target, world) {
        this.world = world; //where the camera is located
        this.target = target; // what the camera follows

        //The offsets
        this.offsetX = 0;
        this.offsetY = 0;

        //Initialization of an instance of the vision class
        this.vision = new Vision(this.world);
    }

    render() {
        const PADDING_RANGE = BLOCK_SIZE;
        const OFFSET_UPDATE = 6.4;

        //Checking when the target is colliding with the margin, if so augmenting the offset of the following direcction...
        if (this.target.xx > CANVAS_SIZE_W - PADDING_RANGE - this.target.ww) {
            this.offsetX += OFFSET_UPDATE;
            this.target.xx = CANVAS_SIZE_W - PADDING_RANGE - this.target.ww;
        }
        if (this.target.xx < PADDING_RANGE) {
            this.offsetX -= OFFSET_UPDATE;
            this.target.xx = PADDING_RANGE;
        }
        if (this.target.yy > CANVAS_SIZE_H - PADDING_RANGE - this.target.hh) {
            this.offsetY += OFFSET_UPDATE;
            this.target.yy = CANVAS_SIZE_H - PADDING_RANGE - this.target.hh;
        }
        if (this.target.yy < PADDING_RANGE) {
            this.offsetY -= OFFSET_UPDATE;
            this.target.yy = PADDING_RANGE;
        }

        //Setting the offsets to 0 if negative ( Just to avoid wierd stuff to happen ;) )
        if (this.offsetX < 0) {
            this.offsetX = 0;
        }
        if (this.offsetY < 0) {
            this.offsetY = 0;
        }

        //Updating the offset in the Vision Class
        this.vision.updateOffset(this.offsetX, this.offsetY);
    }

    getOffset() {
        return [this.offsetX, this.offsetY];
    }
}

class Vision {
    constructor(baseMap) {
        this.map = baseMap; //Where the vision is located

        //The offsets
        this.offsetX = 0;
        this.offsetY = 0;
    }

    update(newMap) {
        this.map = newMap;
    }

    updateOffset(offX, offY) {
        this.offsetX = offX;
        this.offsetY = offY;
    }

    Draw() {
        let currentBlock;

        for (var i = 0; i < this.map.length; i++) {
            for (var j = 0; j < this.map[i].length; j++) {
                //Setting the variable currentBLock as
                currentBlock = this.map[i][j]; // assigning current block in the loop to a handier variable.

                currentBlock.Draw(
                    //calculating the position where the block should be displayed, subtracting the offsets
                    j * currentBlock.size - this.offsetX,
                    i * currentBlock.size - this.offsetY
                );
            }
        }
    }
}
