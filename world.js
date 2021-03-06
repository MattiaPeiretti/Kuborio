const BLOCK_SIZE = 48;

class World {
    constructor(Texturepack) {
        this.debugName = "World";

        this.isLoaded = false;

        this.Texturepack = Texturepack;

        this.Texturepack.load();
        this.textures = Texturepack.textures;

        this.offsetX = 0;
        this.offsetY = 0;

        // Old map with Id system, which we kinda hate a lil bit, so it is not in use anymore...
        // this.mapData = [
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
        this.mapData = [
            [
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
                "Grass",
                "",
                "",
                "Dirt",
                "Dirt",
                "Stone",
                "Stone",
                "Sand",
                "Sand",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
                "Grass",
                "",
                "",
                "Dirt",
                "Dirt",
                "Stone",
                "Stone",
                "Sand",
                "Sand",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
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
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
                "Sand",
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
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
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
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Grass",
                "Bedrock",
            ],
            [
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
                "Bedrock",
            ],
        ];
    }

    renderMap() {
        let mapRow,
            imgName,
            currentTile,
            newRow = [];

        this.map = []; // Creating a empty final map
        for (var i = 0; i < this.mapData.length; i++) {
            mapRow = this.mapData[i]; //assigning the current row
            for (var j = 0; j < mapRow.length; j++) {
                imgName = mapRow[j] + "_texture"; // Assembling current texture name

                // Checking if the texture actually exists
                if (imgName in this.textures) {
                    currentTile = this.textures[imgName];
                } else {
                    currentTile = this.Texturepack.undefinedTexture; // Assignning the undefined texture if needed
                }

                newRow.push(
                    new Block(mapRow[j], currentTile, [j, i], BLOCK_SIZE)
                ); //Pushing newly created block in the current row
            }

            this.map.push(newRow); // Deplyoing the current row after adding all the blocks to it.
            newRow = []; // Clearing the variable thereafter :)
        }

        this.isLoaded = true; // Flagginf that the world is loaded.
    }

    Draw() {
        let currentBlock;

        for (var i = 0; i < this.mapData.length; i++) {
            for (var j = 0; j < this.mapData[i].length; j++) {
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
