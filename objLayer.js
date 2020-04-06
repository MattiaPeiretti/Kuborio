class objLayer{
    constructor() {
        this.childrenObjs = [];
    }

    Draw() {
        for (var i = 0; i < this.childrenObjs.length; i++) {
            this.childrenObjs[i].Draw();
        }
    }
}