class Particle{
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'friction': 0,
            'restitution': 0.04,
            'density':1.2
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, radius/2, options);
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(this.color);
        noStroke();
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}