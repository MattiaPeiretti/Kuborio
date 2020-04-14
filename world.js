const BLOCK_SIZE = 64;

class World {
    constructor(Texturepack) {
        this.debugName = "World";

        this.isLoaded = false;

        this.Texturepack = Texturepack;

        this.Texturepack.load();
        this.textures = Texturepack.textures;

        // FIX THISSS

        setTimeout(() => {
            this.isLoaded = true;
        }, 1000);

        // ---------

        // Old map with Id system, which we kinda hate a lil bit, so it is not in use anymore...
        // this.map = [
        //     // 1  2  3  4  5  6  7  8  9  10
        //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 0, 2, 2, 2, 2, 2],
        //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        // ];

        //The test map with word ids..

        this.map = [
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Sand",
                "Sand",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Dirt",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Stone",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
            ],
            [
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Gasdrass",
                "Gasdsrass",
            ],
        ];
    }

    Draw() {
        this.renderMap();
    }

    LoadMap(map) {
        //read some json.. But that comes later ;)
    }

    renderMap() {
        let tileImg, mapRow;

        //DEBUG && console.log(`[${this.debugName}] Starting world render`);

        if (this.textures) {
            for (var i = 0; i < this.map.length; i++) {
                mapRow = this.map[i];
                for (var j = 0; j < mapRow.length; j++) {
                    let imgName = mapRow[j] + "_texture";

                    if (imgName in this.textures) {
                        tileImg = this.textures[imgName];
                    } else {
                        tileImg = this.Texturepack.undefinedTexture;
                    }

                    noSmooth(); //Removing pixel interpolation
                    image(
                        tileImg,
                        j * BLOCK_SIZE,
                        i * BLOCK_SIZE,
                        BLOCK_SIZE,
                        BLOCK_SIZE
                    );
                    smooth();
                }
            }
        }

        //DEBUG && console.log(`[${this.debugName}] World rendered`);

        this.isLoaded = true;
    }

    checkCollisions() {
        let  mapRow, blockX, blockY;

        for (var i = 0; i < this.map.length; i++) {
            mapRow = this.map[i];
            for (var j = 0; j < mapRow.length; j++) {
                blockX = j * BLOCK_SIZE;
                blockY = i * BLOCK_SIZE;



                if (
                    player.xx < blockX + BLOCK_SIZE &&
                    player.xx + player.ww > blockX &&
                    player.yy< blockY + BLOCK_SIZE &&
                    player.yy+ player.hh > blockY
                ) {
                    if (this.map[i][j] == "Stone") {
                        console.log('stone');
                        
                        player.state = "IdleState"
                        player.xx = player.xx + 10 * (player.directionX * -1)
                        player.yy = player.yy + 10 * (player.directionY * -1)
                        
                    }
                }
            }
        }
    }
}
