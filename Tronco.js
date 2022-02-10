class Tronco extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.body.friction = 2;
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}