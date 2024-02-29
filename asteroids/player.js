class Player {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = 0;
    }

    draw() {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x, -this.position.y);
        ctx.beginPath();
        ctx.moveTo(this.position.x+30, this.position.y);
        ctx.lineTo(this.position.x-15, this.position.y-5);
        ctx.lineTo(this.position.x-15, this.position.y+5)
        ctx.closePath();

        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    getVertices() {
        const cos = Math.cos(this.rotation);
        const sin = Math.sin(this.rotation);
    
        return [
          {
            x: this.position.x + cos * 30 - sin * 0,
            y: this.position.y + sin * 30 + cos * 0,
          },
          {
            x: this.position.x + cos * -10 - sin * 10,
            y: this.position.y + sin * -10 + cos * 10,
          },
          {
            x: this.position.x + cos * -10 - sin * -10,
            y: this.position.y + sin * -10 + cos * -10,
          },
        ]
      };
}