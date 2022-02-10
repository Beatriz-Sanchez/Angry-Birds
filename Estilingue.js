class Estilingue{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.imagem1 = loadImage('sprites/sling1.png');
        this.imagem2 = loadImage('sprites/sling2.png');
        this.imagem3 = loadImage('sprites/sling3.png');
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);
    }

    voar(){
        this.estilingue.bodyA = null;
    }

    ligar(){
      this.estilingue.bodyA = this.bodyA;
    }

    display(){
        image(this.imagem1,200,25);
        image(this.imagem2,172,20);
        if (this.estilingue.bodyA) {
          var pointA = this.estilingue.bodyA.position;
          var pointB = this.pointB;
          push();
          stroke(48,22,8);
          if (pointA.x < 220){
            strokeWeight(15);
            if(pointA.x < 170){
              strokeWeight(10);
              if(pointA.x < 100){
                strokeWeight(7);
              }
            }
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+6);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+6);
            image(this.imagem3,pointA.x-30, pointA.y-10,15,30);
          } else {
            strokeWeight(10);
              if(pointA.x > 280){
                strokeWeight(7);
              }
            line(pointA.x+28, pointA.y, pointB.x-15, pointB.y+6);
            line(pointA.x+28, pointA.y, pointB.x+25, pointB.y+6);
            image(this.imagem3,pointA.x+25, pointA.y-10,15,30);
          }
          
          pop();
        }
    }
    
}