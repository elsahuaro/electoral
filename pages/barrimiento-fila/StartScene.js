class StartScene extends Phaser.Scene {
  constructor() {
    super("start");
  }

  create() {
    this.dvl = this.add.image(this.game.config.width/2, this.game.config.height/2, "dvl").setInteractive();
    this.dvl.on("pointerover", pointer => {
      this.dvl.setTint(0xDF2EDB);
    });
    this.dvl.on("pointerout", pointer => {
      this.dvl.clearTint();
    });
    this.dvl.on("pointerdown", pointer => {
      this.tweens.add({
        targets: [this.dvl],
        duration: 500,
        ease: 'Quad.easeInOut',
        alpha: 0.0,
        onComplete: () => {
          this.scene.start("select-missing");
        }
      });
    });
  }
}