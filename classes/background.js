class BG {
    constructor() {
        this.group = new Group();
        // this.group.debug = true;
        this.group.collider = "n";
        this.layers = [];
        for (let i = 0; i < bgImg.length; i++) {
            let a = 3;
            if (i === 0) {
                a = 1;
            }
            this.layers.push(this.getSpriteGroup(i, a))
        }
    }
    getSpriteGroup(index, amount) {
        const gr = new this.group.Group();
        gr.layer = index;
        for (let i = 0; i < amount; i++) {
            const spr = new gr.Sprite();
            spr.x = (i * width) + width / 2;
            // spr.ani = bgImg[index];
            // spr.ani.scale = 0.5;
        }
        gr.ani = bgImg[index];
        gr.scale = 0.5;
        return gr;
    }
    startBackground() {
        let rate = speed / (this.layers.length - 1);
        for (let i = 1; i < this.layers.length; i++) {
            const layerGroup = this.layers[i];
            layerGroup.vel.x = rate * i;
        }
    }
    moveBackground() {
        for (let i = 1; i < this.layers.length; i++) {
            const l = this.layers[i]
            const first = l[0];
            if (first.x <= -width) {
                const lastX = l[l.length - 1].x;
                const newSpr = new l.Sprite();
                newSpr.x = lastX + width;
                newSpr.vel.x = first.vel.x;
                first.remove();
            }
        }
    }
    stopBackground() {
        this.group.vel.x = 0;
    }
    removeAll() {
        this.group.removeAll();
    }
}