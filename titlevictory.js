class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('titleLetters', 'rolypolytitleletters.png');
        this.load.image('titleBackground', 'sluggamebackground.png');
        this.load.image('rolypoly', 'rolypoly.png');
        this.load.image('playButton', 'playbutton.png');
    }

    create() {
        this.titleBackground = this.add.image(400, 300, 'titleBackground');
        this.titleLetters = this.add.image(250, 150, 'titleLetters');
        this.titleLetters.alpha = 0;
        this.rolypoly = this.add.image(0, 450, 'rolypoly');
        this.playButton = this.add.image(600, 300, 'playButton').setInteractive();
        this.playButton.setScale(0.15);

        this.playButton.on('pointerdown', () => {
            this.goToScene('gameplayScene');
        });
        
        this.titleLetters.setScale(0.1);
        this.rolypoly.setScale(0.2);  

        this.tweens.add({
            targets: this.titleLetters,
            alpha: 1,
            duration: 1000,
        });


        this.tweens.add({
            targets: this.rolypoly,
            x: 200,
            y: 450,
            duration: 2000,
            ease: 'Power2',
        });    
}

    update() {}
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
    scene: [ Title, GameplayScene ]
}

let game = new Phaser.Game(config);