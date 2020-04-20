// Texturepacks

// Consts
const TEXTUREPACK_BASE_DIR = "./assets/texturepacks";
const UNDEFINED_TEXTURE_PATH = "/assets/undefined.png";

class Texturepack {
    constructor(friendlyName) {
        this.debugName = "Assets";

        //Name of the folder where the texturepack is contained
        this.friendlyName = friendlyName;

        this.name = null;
        this.assets = {};
        this.textures = [];
    }

    load() {
        let jsonData;

        jsonData = loadJson(
            `${TEXTUREPACK_BASE_DIR}/${this.friendlyName}/data.json`
        );

        if (jsonData) {
            this.name = jsonData.info.name;
            this.assets = jsonData.assets;
        }

        if (this.assets) {
            this.undefinedTexture = loadImage(UNDEFINED_TEXTURE_PATH);

            for (var block in this.assets) {
                //Loading the actual images to the this.textures dict
                this.textures[`${block}_texture`] = loadImage(
                    `${TEXTUREPACK_BASE_DIR}/${this.friendlyName}/${this.assets[block]}.png`

                    //Callbacks are bugged...
                    // //Callback in case of success
                    // ,(loadedImg) => {
                    //     DEBUG &&
                    //         console.log(
                    //             `[${this.debugName}] Loaded: ${block} texture with id: ${this.assets[block]} successfully!`
                    //         );
                    // },

                    // // callback in case of faliure
                    // () => {
                    //     DEBUG &&
                    //         console.error(
                    //             `[${this.debugName}] An error occurred while loading the texture: ${block} texture with id: ${this.assets[block]}, with filename: ${this.assets[block]}.png`
                    //         );
                    // }
                );

                DEBUG &&
                    console.log(
                        `[${this.debugName}] Loaded: ${block} texture with id: ${this.assets[block]} successfully!`
                    );
            }
        }
    }
}

//Default block Class

class Block {
    constructor(texture, pos, size) {
        this.tile = texture;
        this.xx = pos[0];
        this.yy = pos[1];
        this.size = size;
    }

    Draw(xx, yy) {
        noSmooth();
        image(this.tile, xx, yy, this.size, this.size);
        smooth();
    }
}
