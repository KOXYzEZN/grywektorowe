class Projectile {
    constructor({position, velocity}) {
        this.velocity = velocity;
        this.position = position;
        this.radius = 5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
class EnemyProjectile {
    constructor({position, velocity}) {
        this.velocity = velocity;
        this.position = position;
        this.radius = 5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
class Asteroid {
    constructor({position, velocity, radius}) {
        this.velocity = velocity;
        this.position = position;
        this.radius = radius;

    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
    /*update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }*/
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.velocity.x += (Math.random() - 0.5) * 0.1;
        this.velocity.y += (Math.random() - 0.5) * 0.1;

        for (let j = asteroids.length - 1; j >= 0; j--) {
            const otherAsteroid = asteroids[j];

            if (this !== otherAsteroid && circleCircleCollision(this, otherAsteroid)) {
                const collisionAngle = Math.atan2(
                    otherAsteroid.position.y - this.position.y,
                    otherAsteroid.position.x - this.position.x
                );

                const thisNewVelocity = rotateVector(this.velocity, collisionAngle);
                const otherNewVelocity = rotateVector(otherAsteroid.velocity, collisionAngle);
                [this.velocity, otherAsteroid.velocity] = [otherNewVelocity, thisNewVelocity];

                const overlap = this.radius + otherAsteroid.radius - distance(this.position, otherAsteroid.position);
                const moveX = Math.cos(collisionAngle) * (overlap / 2);
                const moveY = Math.sin(collisionAngle) * (overlap / 2);

                this.position.x -= moveX;
                this.position.y -= moveY;
                otherAsteroid.position.x += moveX;
                otherAsteroid.position.y += moveY;
            }
        }

        for (let j = projectiles.length - 1; j >= 0; j--) {
            const projectile = projectiles[j];
            if (circleCircleCollision(this, projectile)) {
                projectiles.splice(j, 1);

                for (let i = 0; i < 3; i++) {
                    const newRadius = this.radius / 2;
                    if (newRadius > 10) { 
                        const angle = (Math.PI * 2 / 3) * i; 
                        const newVelocity = {
                            x: Math.cos(angle) * 2, 
                            y: Math.sin(angle) * 2,
                        };
                        points+=Math.round(10/3);
                        asteroids.push(new Asteroid({
                            position: {
                                x: this.position.x,
                                y: this.position.y,
                            },
                            velocity: newVelocity,
                            radius: newRadius,
                        }));
                    }
                    else {
                        points+=Math.round(25/3);
                    }
                }

                asteroids.splice(asteroids.indexOf(this), 1);
            }
        }
        for (let j = enemyProjectiles.length - 1; j >= 0; j--) {
            const enemyProjectile = enemyProjectiles[j];
            if (circleCircleCollision(this, enemyProjectile)) {
                enemyProjectiles.splice(j, 1);

                for (let i = 0; i < 3; i++) {
                    const newRadius = this.radius / 2;
                    if (newRadius > 10) {
                        const angle = (Math.PI * 2 / 3) * i; 
                        const newVelocity = {
                            x: Math.cos(angle) * 2, 
                            y: Math.sin(angle) * 2,
                        };

                        asteroids.push(new Asteroid({
                            position: {
                                x: this.position.x,
                                y: this.position.y,
                            },
                            velocity: newVelocity,
                            radius: newRadius,
                        }));
                    }
                }

                asteroids.splice(asteroids.indexOf(this), 1);
            }
        }
    }
}


function rotateVector(vector, angle) {
    const x = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
    const y = vector.x * Math.sin(angle) + vector.y * Math.cos(angle);
    return { x, y };
}

function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}