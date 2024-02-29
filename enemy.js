
class Enemy {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = 0;
        this.lastShotTime = 0;
        this.cooldown = 4500;
        this.isDashing = false;
        this.dashDuration = 250;
        this.dashStartTime = 0;
    }
    draw() {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x, -this.position.y);
        ctx.beginPath();
        ctx.moveTo(this.position.x+30, this.position.y);
        ctx.lineTo(this.position.x-15, this.position.y-5);
        ctx.lineTo(this.position.x-15, this.position.y+5);
        ctx.lineTo(this.position.x+30, this.position.y);
        ctx.moveTo(this.position.x-15, this.position.y);
        ctx.lineTo(this.position.x-15, this.position.y-3);
        ctx.lineTo(this.position.x-20, this.position.y-3);
        ctx.lineTo(this.position.x-20, this.position.y+3);
        ctx.lineTo(this.position.x-15, this.position.y+3)
        ctx.closePath();

        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.restore();
    }
    update() {
        const distanceToPlayer = Math.sqrt(
            Math.pow(player.position.x - this.position.x, 2) +
            Math.pow(player.position.y - this.position.y, 2)
        );

        const angleToPlayer = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);

        if (distanceToPlayer < 150) {
            this.velocity.x = -Math.cos(angleToPlayer);
            this.velocity.y = -Math.sin(angleToPlayer);
        }
        else {
            this.velocity.x = Math.cos(angleToPlayer) * 0.5;
            this.velocity.y = Math.sin(angleToPlayer) * 0.5;
        }
        const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        this.rotation = angle;

        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (Math.abs(this.position.x - canvas.width / 2) < 1) this.velocity.x = 0;
        if (Math.abs(this.position.y - canvas.height / 2) < 1) this.velocity.y = 0;
        if (this.isDashing && new Date().getTime() - this.dashStartTime > this.dashDuration) {
            this.velocity.x /= 3; 
            this.velocity.y /= 3; 
            this.isDashing = false;
        }
        this.shootProjectile();
    }
    dash () {
        if (!this.isDashing) {
            const dashDirection = Math.random() * Math.PI * 2;
            const dashSpeed = 4;

            this.velocity.x = Math.cos(dashDirection) * dashSpeed;
            this.velocity.y = Math.sin(dashDirection) * dashSpeed;

            this.isDashing = true;
            this.dashStartTime = new Date().getTime();
        }
    }
    shootProjectile() {
        
        const currentTime = new Date().getTime();
        if (currentTime - this.lastShotTime > this.cooldown) {
            enemyProjectiles.push(
                new EnemyProjectile({
                    position: { x: this.position.x, y: this.position.y },
                    velocity: {
                        x: Math.cos(this.rotation) * ENEMY_PROJECTILE_SPEED,
                        y: Math.sin(this.rotation) * ENEMY_PROJECTILE_SPEED,
                    },
                })
            );
            this.lastShotTime = currentTime;
        }
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