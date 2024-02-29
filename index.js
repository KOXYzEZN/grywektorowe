

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "black";

window.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        keys.a.pressed = true;
    }
});
window.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        keys.a.pressed = false;
    }
});

window.addEventListener("keydown", function (event) {
    if (event.key === "d") {
        keys.d.pressed = true;
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "d") {
        keys.d.pressed = false;
    }
});
window.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        keys.w.pressed = true;
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "w") {
        keys.w.pressed = false;
    }
});

window.addEventListener('mousedown', (event) => {
    const currentTime = new Date().getTime();
    switch (event.button) { 
        case 0:
            if (currentTime - lastProjectileTime > COOLDOWN_TIME) {
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + Math.cos(player.rotation) * 40,
                        y: player.position.y + Math.sin(player.rotation) * 40, 
                    },
                    velocity: {
                        x: Math.cos(player.rotation) * PROJECTILE_SPEED,
                        y: Math.sin(player.rotation) * PROJECTILE_SPEED,
                    }
                })
                )
                lastProjectileTime = currentTime;
            }
                break;
    }
})
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}
window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW':
            keys.w.pressed = false;
            break;
        case 'KeyA':
            keys.a.pressed = false;
            break;
        case 'KeyD':
            keys.d.pressed = false;
            break;
    }
})


const intervalEnemyId = window.setInterval(() => {
    const index = Math.floor(Math.random() * 4);
    //let tempEnemyAmount = levels.find(e=>e.level==currentLevel);
    //let enemyAmount = tempEnemyAmount.levelEnemyAmount;
    let x, y;
    let vx, vy;
    let radius = 25 * Math.random() + 5;
    switch (index) {
        case 0:
            x = 0 - radius;
            y = Math.random() * canvas.height;
            vx = 2;
            vy = 0;
            break;
        case 1:
            x = Math.random() * canvas.width;
            y = canvas.height + radius;
            vx = 0;
            vy = -2;
            break;
        case 2:
            x = canvas.width + radius;
            y = Math.random() * canvas.height;
            vx = -2;
            vy = 0;
            break;
        case 3:
            x = Math.random() * canvas.width;
            y = 0 - radius;
            vx = 0;
            vy = 2;
            break;
    }
    //if (enemies.length<=enemyAmount) {
    enemies.push(
        new Enemy({
        position: {
            x: x,
            y: y,
        },
        velocity: {
            x: vx,
            y: vy,
        },
        radius,
    })
    );
//}
}, 18000)
const intervalTankEnemyId = window.setInterval(() => {
    const index = Math.floor(Math.random() * 4);
    //let tempTankEnemyAmount = levels.find(e=>e.level==currentLevel);
    //let tankEnemyAmount = tempTankEnemyAmount.levelTankEnemyAmount;
    let x, y;
    let vx, vy;
    let radius = 25 * Math.random() + 5;
    switch (index) {
        case 0:
            x = 0 - radius;
            y = Math.random() * canvas.height;
            vx = 2;
            vy = 0;
            break;
        case 1:
            x = Math.random() * canvas.width;
            y = canvas.height + radius;
            vx = 0;
            vy = -2;
            break;
        case 2:
            x = canvas.width + radius;
            y = Math.random() * canvas.height;
            vx = -2;
            vy = 0;
            break;
        case 3:
            x = Math.random() * canvas.width;
            y = 0 - radius;
            vx = 0;
            vy = 2;
            break;
    }
    //if (tankEnemies.length<=tankEnemyAmount) {
    tankEnemies.push(
        new TankEnemy({
        position: {
            x: x,
            y: y,
        },
        velocity: {
            x: vx,
            y: vy,
        },
        radius,
    })
    );
//}
}, 30000)


const player = new Player({
    position: {x: canvas.width/2, y: canvas.height/2}, 
    velocity: {x: 0, y: 0},
});
/*const player1 = new Player({
    position: {x: canvas.width/2, y: canvas.height/2}, 
    velocity: {x: 0, y: 0},
});*/
/*const levels = [
    {
        level: 0,
        levelAsteroidAmount: 0,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 0 //0
    },
    {
        level: 1,
        levelAsteroidAmount: 4,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 0 //100
    },
    {
        level: 2,
        levelAsteroidAmount: 8,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 1 //400
    },
    {
        level: 3,
        levelAsteroidAmount: 12,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 2 //900
    },
    {
        level: 4,
        levelAsteroidAmount: 12,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 3 //1500
    },
    {
        level: 5,
        levelAsteroidAmount: 20,
        levelTankEnemyAmount: 0,
        levelEnemyAmount: 5 //2500
    },
    {
        level: 6,
        levelAsteroidAmount: 20,
        levelTankEnemyAmount: 1,
        levelEnemyAmount: 10 //4000
    },
    {
        level: 7,
        levelAsteroidAmount: 20,
        levelTankEnemyAmount: 2,
        levelEnemyAmount: 11 //4100
    },
    {
        level: 8,
        levelAsteroidAmount: 28,
        levelTankEnemyAmount: 4,
        levelEnemyAmount: 10 //4200
    },
    {
        level: 9,
        levelAsteroidAmount: 28,
        levelTankEnemyAmount: 6,
        levelEnemyAmount: 11 //4300
    },
    {
        level: 10,
        levelAsteroidAmount: 40,
        levelTankEnemyAmount: 10,
        levelEnemyAmount: 15 //5000
    },
]*/

var audio = new Audio('EX.wav');
const SPEED = 3;
const ROTATIONAL_SPEED = 0.075;
const FRICTION = 0.965;
const PROJECTILE_SPEED = 5;
const ENEMY_PROJECTILE_SPEED = 6;
const COOLDOWN_TIME = 250; 
var lastProjectileTime = 0;
var health = 3;
/*var healthText = "";
    for (let i = 0; i < health; i++) {
        healthText =+ "❤";
    }*/
var points = 0;
var click=audio.cloneNode();
var asteroidSize;
//var currentLevel = 0;
const asteroidSizes = [2, 3, 4];
const projectiles = [];
const asteroids = [];
const enemies = [];
const tankEnemies = [];
const explosions = [];
const enemyProjectiles = [];
const intervalAsteroidId = window.setInterval(() => {
    //let tempAsteroidAmount = levels.find(e=>e.level==currentLevel);
    //let asteroidAmount = tempAsteroidAmount.levelAsteroidAmount;
    const index = Math.floor(Math.random() * 4);
    let x, y;
    let vx, vy;
    let min = Math.min(... asteroidSizes);
    let max = Math.max(... asteroidSizes);
    asteroidSize = Math.floor(Math.random() * (+max + 1 - min)) + +min;
    let radius = 15 * asteroidSizes[asteroidSize-1];
    switch (index) {
        case 0:
            x = 0 - radius;
            y = Math.random() * canvas.height;
            vx = 1;
            vy = 0;
            break;
        case 1:
            x = Math.random() * canvas.width;
            y = canvas.height + radius;
            vx = 0;
            vy = -1;
            break;
        case 2:
            x = canvas.width + radius;
            y = Math.random() * canvas.height;
            vx = -1;
            vy = 0;
            break;
        case 3:
            x = Math.random() * canvas.width;
            y = 0 - radius;
            vx = 0;
            vy = 1;
            break;
    }
    //if (asteroids.length<=asteroidAmount) {
    asteroids.push(
        new Asteroid({
        position: {
            x: x,
            y: y,
        },
        velocity: {
            x: vx,
            y: vy,
        },
        radius,
    })
    )
//}
}, 12000)


function animate() {
    const animationId = window.requestAnimationFrame(animate);
    
    if (player.position.x < 0) player.position.x = canvas.width;
    if (player.position.x > canvas.width) player.position.x = 0;
    if (player.position.y < 0) player.position.y = canvas.height;
    if (player.position.y > canvas.height) player.position.y = 0;
    /*switch(points) {
        case 100:
            currentLevel++;
            break;
        case 400:
            currentLevel++;
            break;
        case 900:
            currentLevel++;
            break;
        case 1500:
            currentLevel++;
            break;
        case 2500:
            currentLevel++;
            break;
        case 4000:
            currentLevel++;
            break;
        case 4100:
            currentLevel++;
            break;
        case 4200:
            currentLevel++;
            break;
        case 4300:
            currentLevel++;
            break;
    
    }
    if (currentLevel==0) {
        currentLevel=1;
    }*/
    

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    ctx.font = "26px Arial";
    ctx.fillStyle = "lightblue";
    ctx.fillText("Punkty: " + points, canvas.width - 150, 30);
    //ctx.fillText(healthText, canvas.width + 150, 30);
    //player1.update();

    for (let i = projectiles.length-1; i >= 0; i--) {
        const projectile = projectiles[i];
        projectile.update();

        if (
            projectile.position.x + projectile.radius < 0 ||
            projectile.position.x - projectile.radius > canvas.width ||
            projectile.position.y + projectile.radius < 0 ||
            projectile.position.y - projectile.radius > canvas.height
        ) projectiles.splice(i, 1);
    }
   
    for (let i = enemies.length-1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.update();
        if (Math.random() < 0.005) { 
            enemy.dash();
        }
        for (let j = projectiles.length-1; j >= 0; j--) {
            const projectile = projectiles[j];
            if(circleTriangleCollision(projectile, enemy.getVertices())) {
                points += 100;
                ctx.fillText("Punkty: " + points, canvas.width - 150, 30);
                projectiles.splice(j, 1);
                enemies.splice(i, 1);
                audio.load();
                audio.play();
            }
        }
        if (enemy.position.x < 0) enemy.position.x = canvas.width;
        if (enemy.position.x > canvas.width) enemy.position.x = 0;
        if (enemy.position.y < 0) enemy.position.y = canvas.height;
        if (enemy.position.y > canvas.height) enemy.position.y = 0;

    }
    for (let i = tankEnemies.length-1; i >= 0; i--) {
        const tankEnemy = tankEnemies[i];
        
        tankEnemy.update();
    
        if (new Date().getTime() - tankEnemy.dashStartTime > 0 && new Date().getTime() - tankEnemy.lastDashTime > tankEnemy.dashCooldown) {
            tankEnemy.dash();
            tankEnemy.lastDashTime = new Date().getTime();
        }
    
        if (new Date().getTime() - tankEnemy.dashStartTime > tankEnemy.dashDuration) {
            tankEnemies.splice(i, 1);
        }
        if (tankEnemy.isDashing == false) {
        if (tankEnemy.position.x < 0) tankEnemy.position.x = canvas.width;
        if (tankEnemy.position.x > canvas.width) tankEnemy.position.x = 0;
        if (tankEnemy.position.y < 0) tankEnemy.position.y = canvas.height;
        if (tankEnemy.position.y > canvas.height) tankEnemy.position.y = 0;
        }
        if (tankEnemy.isDashing == true && tankEnemy.position.x < 0 ||
            tankEnemy.position.x > canvas.width ||
            tankEnemy.position.y < 0 ||
            tankEnemy.position.y > canvas.height) {
                tankEnemies.splice(i, 1);
            }
    } 

    
    for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
        const enemyProjectile = enemyProjectiles[i];
        enemyProjectile.update();
        enemyProjectile.draw();

        if (
            enemyProjectile.position.x + enemyProjectile.radius < 0 ||
            enemyProjectile.position.x - enemyProjectile.radius > canvas.width ||
            enemyProjectile.position.y + enemyProjectile.radius < 0 ||
            enemyProjectile.position.y - enemyProjectile.radius > canvas.height
        ) {
            enemyProjectiles.splice(i, 1);
        }

        if (circleTriangleCollision(enemyProjectile, player.getVertices())) {
            health--;

            enemyProjectiles.splice(i, 1);

            if (health === 0) {
                window.cancelAnimationFrame(animationId);
                clearInterval(intervalAsteroidId);
                clearInterval(intervalEnemyId);
            }
        }
    }
    for (let i = asteroids.length-1; i >= 0; i--) {
        const asteroid = asteroids[i];
        asteroid.update();
        for (let j = i + 1; j < asteroids.length; j++) {
            const otherAsteroid = asteroids[j];
            if (circleCircleCollision(asteroid, otherAsteroid)) {
                asteroid.velocity.x *= -1;
                asteroid.velocity.y *= -1;
                otherAsteroid.velocity.x *= -1;
                otherAsteroid.velocity.y *= -1;
            }
        }
        if (circleTriangleCollision(asteroid, player.getVertices())) {
            health--;
            asteroid.velocity.x *= -1;
            asteroid.velocity.y *= -1;
            if (health  ===  0) {
                
                window.cancelAnimationFrame(animationId);
                clearInterval(intervalAsteroidId);
            }
        }
        if (asteroid.position.x + asteroid.radius < 0) asteroid.position.x = canvas.width;
        if (asteroid.position.x - asteroid.radius > canvas.width) asteroid.position.x = 0;
        if (asteroid.position.y + asteroid.radius < 0) asteroid.position.y = canvas.height;
        if (asteroid.position.y - asteroid.radius > canvas.height) asteroid.position.y = 0;
        
        for (let j = projectiles.length-1; j >= 0; j--) {
            const projectile = projectiles[j];
            if(circleCircleCollision(asteroid, projectile)) {
                points+=25;
                ctx.fillText("Punkty: " + points, canvas.width - 150, 30);
                projectiles.splice(j, 1);
                asteroids.splice(i, 1);
                audio.load();
                audio.play();
            }
        }
    }
    if(keys.w.pressed) {
        player.velocity.x = Math.cos(player.rotation) * SPEED;
        player.velocity.y = Math.sin(player.rotation) * SPEED;
    } else if(!keys.w.pressed) {
        player.velocity.x *= FRICTION;
        player.velocity.y *= FRICTION;
    } 
    if(keys.d.pressed) {
        player.rotation += ROTATIONAL_SPEED;
    }
    else if(keys.a.pressed) {
        player.rotation += -ROTATIONAL_SPEED;
    }
 
}
audio.addEventListener("ended", function() {
    document.body.removeChild(this);
  }, false);
  audio.play();
animate()
