class Porco extends BaseClass {
  constructor(x, y){
    super(x,y,60,60);
    this.image = loadImage("sprites/enemy.png");
    this.visibilidade = 255;
  }
  display() {
    // console.log(this.body.speed);
    if(this.body.speed < 3){
        super.display();
    } else {
        World.remove(world, this.body);
        push();
        this.visibilidade = this.visibilidade - 5;
        tint(255, this.visibilidade);
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y,60,60);
        pop();
    }
  }
  score(){
    if (this.visibilidade<0 && this.visibilidade> -1005){
      pontos++;
    }
    }
}