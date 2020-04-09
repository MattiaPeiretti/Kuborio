const SCRIPT_NAME = "Assets";

// Texturepacks

// Consts
const TEXTUREPACK_BASE_DIR = "./assets/texturepacks";

class Texturepack {
    constructor(friendlyName) {
        //Name of the folder where the texturepack is contained
        this.friendlyName = friendlyName;

        this.name = null;
        this.assets = {};
        this.textures = [];
    }

    load() {
        this.readData();
    }

    readData() {
        DEBUG && console.log(`[${SCRIPT_NAME}] Loading TexturePack`);

        //Fetching the info .json file located in the texturepack folder
        fetch(`${TEXTUREPACK_BASE_DIR}/${this.friendlyName}/data.json`)
            .then((res) => res.json())
            .then((json) => {
                //Processing the actual data
                this.processData(json);
            })
            .catch(
                (err) =>
                    DEBUG &&
                    console.error(
                        `[${SCRIPT_NAME}] An error occurred while loading the texturepack data: ${err}`
                    )
            );
    }

    processData(data) {
        //The script contains the specs of the texturepack itself but also a complete dict of all the textures: BlockName : Id
        DEBUG && console.log(`[${SCRIPT_NAME}] Processing TexturePack Data`);
        this.name = data.info.name;
        this.assets = data.assets;

        //Load the images into a dict
        this.loadTextures();
    }

    loadTextures() {
        //Loop trough the assets dict
        for (var block in this.assets) {
            //Loading the actual images to the this.textures dict
            this.textures[`${block}_texture`] = loadImage(
                `${TEXTUREPACK_BASE_DIR}/${this.friendlyName}/${this.assets[block]}.png`

                //Callbacks are bugged...
                // //Callback in case of success
                // ,(loadedImg) => {
                //     DEBUG &&
                //         console.log(
                //             `[${SCRIPT_NAME}] Loaded: ${block} texture with id: ${this.assets[block]} successfully!`
                //         );
                // },

                // // callback in case of faliure
                // () => {
                //     DEBUG &&
                //         console.error(
                //             `[${SCRIPT_NAME}] An error occurred while loading the texture: ${block} texture with id: ${this.assets[block]}, with filename: ${this.assets[block]}.png`
                //         );
                // }
            );

            DEBUG &&
                console.log(
                    `[${SCRIPT_NAME}] Loaded: ${block} texture with id: ${this.assets[block]} successfully!`
                );
        }
    }
}
