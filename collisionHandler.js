// Collision handler

class collisionHandler {
    constructor(baseLayer) {
        // Defining some variables
        this.offsetX = null;
        this.offsetY = null;

        this.layer = null;

        this.baseLayer = baseLayer;
    }

    checkCollisions(layer, offset) {
        //Declaring the layer of which the collision will be checked...
        this.layer = layer;

        //Getting the offset of the playerCamera (Will be changed in the fututre..)
        this.offsetX = offset[0];
        this.offsetY = offset[1];

        //Defining some variables
        let blockX, blockY, baseColliderUnit, ColliderEntity, currentBlock;

        for (var c = 0; c < this.layer.childrenObjs.length; c++) {
            //ColliderEntity is the entity of which the collision against the baseColliders
            //will be checked, this entity could be, for example, the player...
            ColliderEntity = this.layer.childrenObjs[c];

            for (var i = 0; i < this.baseLayer.length; i++) {
                for (var j = 0; j < this.baseLayer[i].length; j++) {
                    baseColliderUnit = this.baseLayer[i][j];
                    currentBlock = baseColliderUnit.id;

                    //Calculating the baseColliderUnit real position, in px..
                    blockX =
                        baseColliderUnit.xx * baseColliderUnit.size -
                        this.offsetX;
                    blockY =
                        baseColliderUnit.yy * baseColliderUnit.size -
                        this.offsetY;

                    //Checking if the player is colliding...
                    if (
                        player.xx < blockX + baseColliderUnit.size &&
                        player.xx + player.ww > blockX &&
                        player.yy < blockY + baseColliderUnit.size &&
                        player.yy + player.hh > blockY
                    ) {
                        if (
                            currentBlock == "Stone" ||
                            currentBlock == "Bedrock"
                        ) {
                            player.state = "IdleState";
                            player.xx =
                                player.xx + 10 * (player.directionX * -1);
                            player.yy =
                                player.yy + 10 * (player.directionY * -1);
                        }
                    }
                }
            }
        }
    }
}
