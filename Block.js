class Block {
  constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          density: 0.001,
          friction: 1
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display() {
      
      
      if (this.body.speed < 3) {
         var pos = this.body.position;
         var angle = this.angle;
         push();
         translate(pos.x, pos.y);  
         rotate(angle);
         rectMode(CENTER);
         rect(0, 0, this.width, this.height);
          pop();
      }  else {
         World.remove(world, this.body);  
         push();
         this.visibility = this.visibility - 5;
         // tint(255, this.visibility);
          pop();
      }
  }
}
function Score(){
 

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score()
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();   
}