//flyttemenn
class TankEnemy {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = 0;
        this.lastShotTime = 0;
        this.cooldown = 4500;
        this.initialDashDelay = 30000;
        this.dashCooldown = 10000;
        this.dashStartTime = new Date().getTime() + this.initialDashDelay;
        this.lastDashTime = 0;
        this.dashDuration = 1000;
        this.dodgeSpeedTime = 0;
        this.dodgeSpeedBoost = 10;
        this.hasAppliedDodgeBoost = false;
        this.isDashing = false;
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
        if (this.isDashing == false) {
        ctx.strokeStyle = "purple";
        } else {
        ctx.strokeStyle = "orange";
        }
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
        const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        if (!this.isDashing) {
            this.rotation = angle;
        }
        this.dodgeProjectiles();
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (new Date().getTime() - this.dashStartTime > 0 && new Date().getTime() - this.lastDashTime > this.dashCooldown) {
            this.dash();
            this.lastDashTime = new Date().getTime();
        }
        
        this.shootProjectile();
    }
    dash() {
        this.isDashing = true;
        const dashDirection = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        const dashSpeed = 20;
        

        this.velocity.x = Math.cos(dashDirection) * dashSpeed;
        this.velocity.y = Math.sin(dashDirection) * dashSpeed;
        this.dashStartTime = new Date().getTime(); 
    }
    
    dodgeProjectiles() {
        if (this.isDashing == false) {
        for (let i = 0; i < projectiles.length; i++) {
            const projectile = projectiles[i];
            const distance = Math.sqrt((projectile.position.x - this.position.x) ** 2 + (projectile.position.y - this.position.y) ** 2);
    
            if (distance < 200 && new Date().getTime() - this.dodgeSpeedTime > this.dodgeSpeedBoost) {
                const relativeAngle = Math.atan2(projectile.position.y - this.position.y, projectile.position.x - this.position.x) - this.rotation;
                const dodgeDirection = relativeAngle > 0 ? -Math.PI / 2 : Math.PI / 2;
    
                const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
                this.velocity.x = Math.cos(this.rotation + dodgeDirection) * speed * 10;
                this.velocity.y = Math.sin(this.rotation + dodgeDirection) * speed * 10;
    
                this.dodgeSpeedTime = new Date().getTime();
                setTimeout(() => {
                    this.velocity.x /= 10;
                    this.velocity.y /= 10;
                }, this.dodgeSpeedBoost);
            }
        }
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
