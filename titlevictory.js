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
        this.playButton = this.add.image(600, 300, 'playButton');
        this.playButton.setScale(0.15);

        this.playButton.setInteractive({ useHandCursor: true });

        this.playButton.on('pointerdown', () => {
            this.scene.start('gameplayScene');
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
        this.add.text(400, 300, 'Gameplay Scene\nClick w to simulate victory', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        this.input.keyboard.on('keydown-W', () => {
            this.scene.start('victoryScene');
        });
    }
    update() {}
}

class VictoryScene extends Phaser.Scene {
    constructor() {
        super('victoryScene');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('victoryBackground', 'victoryBackground.png');
        this.load.image('rolypolyVictory', 'rolypolyVictory.png');
        this.load.image('sparkles', 'sparkles.png');
    }
    create() {
        this.cameras.main.fadeIn();
        this.background = this.add.image(400, 300, 'victoryBackground');
        this.rolypoly = this.add.image(400, 300, 'rolypolyVictory').setScale(0.7);
        this.sparkles1 = this.add.image(375, 225, 'sparkles').setScale(0.15).setAlpha(0);
        this.tweens.add({
            targets: this.sparkles1,
            alpha: 1,
            duration: 1500,
            yoyo: true,
            repeat: -1,
        });
        this.sparkles2 = this.add.image(475, 325, 'sparkles').setScale(0.15);
        this.tweens.add({
            targets: this.sparkles2,
            alpha: 0,
            duration: 1500,
            yoyo: true,
            repeat: -1,
        });

        this.input.once('pointerdown', () => {
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000, () => {
                this.scene.start('title');
            })
        })
    }
    update() {}
}   


let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title, GameplayScene, VictoryScene ]
}

let game = new Phaser.Game(config);