class Camera {
    constructor(target, world) {
        this.world = world;
        this.target = target;

        this.offsetX = 0;
        this.offsetY = 0;

        this.vision = new Vision(this.world);
    }

    render() {
        const PADDING_RANGE = BLOCK_SIZE;
        const OFFSET_UPDATE = 6.4;

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
        if (this.offsetX < 0) {
            this.offsetX = 0;
        }
        if (this.offsetY < 0) {
            this.offsetY = 0;
        }

        this.vision.updateOffset(this.offsetX, this.offsetY);
    }

    getOffset() {
        return [this.offsetX, this.offsetY];
    }
}

class Vision {
    constructor(baseMap) {
        this.map = baseMap;
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
        console.log(this.offsetX, this.offsetY);

        let currentBlock;

        for (var i = 0; i < this.map.length; i++) {
            for (var j = 0; j < this.map[i].length; j++) {
                currentBlock = this.map[i][j]; // assigning current block

                currentBlock.Draw(
                    //calculating the position where the block should be displayed, subtracting the offsets
                    j * currentBlock.size - this.offsetX,
                    i * currentBlock.size - this.offsetY
                );
            }
        }
    }
}
