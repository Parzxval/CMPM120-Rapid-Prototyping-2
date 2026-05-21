class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('titleLetters', 'rolypolytitleletters.png');
        this.load.image('titleBackground', 'sluggamebackground.png');
        this.load.image('rolypoly', 'rolypoly.png');
    }

    create() {
        this.titleBackground = this.add.image(400, 300, 'titleBackground');
        this.titleLetters = this.add.image(250, 150, 'titleLetters');
        this.rolypoly = this.add.image(200, 450, 'rolypoly');

        this.titleLetters.setScale(0.1);
        this.rolypoly.setScale(0.2);    
    }

    update() {}

    sceneTransition() {
        this.cameras.main.fade(1000, 0, 0, 0);
    }
}

class GameplayScene extends Phaser.Scene {
    constructor() {
        super('gameplayScene');
    }

    preload() {}
    create() {
        this.add.text(400, 300, 'Gameplay Scene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    }
    update() {}
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title]
}

let game = new Phaser.Game(config);