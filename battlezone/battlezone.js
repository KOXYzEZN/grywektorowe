var czyA = false;
var czyD = false;
var czyW = false;
var czyS = false;
var czySpacja = false;
var czyCzolg = true;
var czyCzolg2 = true;
var czyCzolg3 = true;
var punkty = 0;

function czolgi(){
    if(!czyCzolg && !czyCzolg2 && !czyCzolg3){
        punkty += 3;
        czyCzolg = true;
        czyCzolg2 = true;
        czyCzolg3 = true;
        tank = [
            [[200, 430], [350, 430]], // -
            [[200, 430], [200, 375]], // |
            [[350, 430], [350, 375]], // |
            [[200, 375], [350, 375]], // -
        
            [[200, 375], [279, 325]], // /
            [[350, 375], [405, 320]], // /
            [[355, 320], [405, 320]], // -
            [[350, 430], [405, 365]], // /
            [[405, 320], [405, 365]], // |
            
            [[275, 345], [285, 295]], // /
            [[360, 345], [350, 295]], // \
            [[285, 295], [350, 295]], // -
        ];
        tank2 = [
            [[200, 430], [350, 430]], // -
            [[200, 430], [200, 375]], // |
            [[350, 430], [350, 375]], // |
            [[200, 375], [350, 375]], // -
        
            [[200, 375], [279, 325]], // /
            [[350, 375], [405, 320]], // /
            [[355, 320], [405, 320]], // -
            [[350, 430], [405, 365]], // /
            [[405, 320], [405, 365]], // |
            
            [[275, 345], [285, 295]], // /
            [[360, 345], [350, 295]], // \
            [[285, 295], [350, 295]], // -
        ];
        tank3 = [
            [[200, 430], [350, 430]], // -
            [[200, 430], [200, 375]], // |
            [[350, 430], [350, 375]], // |
            [[200, 375], [350, 375]], // -
        
            [[200, 375], [279, 325]], // /
            [[350, 375], [405, 320]], // /
            [[355, 320], [405, 320]], // -
            [[350, 430], [405, 365]], // /
            [[405, 320], [405, 365]], // |
            
            [[275, 345], [285, 295]], // /
            [[360, 345], [350, 295]], // \
            [[285, 295], [350, 295]], // -
        ];


        rect  = [[[310,315],[-125,10]]];
        rect2 = [[[610,315],[-125,10]]];
        rect3 = [[[910,315],[-125,10]]];

    }
}



//sterowanie
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        czyA = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        czyA = false;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "d") {
        czyD = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "d") {
        czyD = false;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        czyW = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "w") {
        czyW = false;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "s") {
        czyS = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "s") {
        czyS = false;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        czySpacja = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === " ") {
        czySpacja = false;
    }
});


window.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        if(!cooldown){
            console.log("pocisk");
                pociski.push(
                    new Projectile({
                        position: {
                            x: canvas.width/2,
                            y: canvas.height, 
                        },
                        velocity: {
                            x: 0,
                            y: -10,
                        }
                    })
                    )
                }
    }
})

var cooldown = false;
function opoznienie(){
    cooldown = false;
}

//horyzont
var t1 = [[[1500, 270], [1800, 10], [2000, 270]],
    [[2000, 270], [2250, 95], [2500, 270]],
    [[2500, 270], [2750, 30], [3000, 270]]];

//podłoga
var t2 = [[[0, 720], [200, 300]], [[200, 720], [400, 300]], [[400, 720], [600, 300]], [[600, 720], [800, 300]], [[800, 720], [1000, 300]], [[1000, 720], [1200, 300]], [[1200, 720], [1400, 300]],
[[0, 300], [1500, 300]], [[0, 510], [1500, 510]]];

/*var tank3 = [[[200, 450], [300, 450]],
          [[200, 450], [200, 350]],
          [[300, 450], [300, 350]],
          [[200, 350], [300, 350]],
          [[200, 350], [230, 320]],
          [[300, 350], [330, 320]],
          [[230, 320], [330, 320]],
          [[300, 450], [330, 405]],
          [[330, 405], [330, 320]]];*/

var tank = [
    [[200, 430], [350, 430]], // -
    [[200, 430], [200, 375]], // |
    [[350, 430], [350, 375]], // |
    [[200, 375], [350, 375]], // -

    [[200, 375], [279, 325]], // /
    [[350, 375], [405, 320]], // /
    [[355, 320], [405, 320]], // -
    [[350, 430], [405, 365]], // /
    [[405, 320], [405, 365]], // |
    
    [[275, 345], [285, 295]], // /
    [[360, 345], [350, 295]], // \
    [[285, 295], [350, 295]], // -
];

var tank2 = [
    [[200, 430], [350, 430]], // -
    [[200, 430], [200, 375]], // |
    [[350, 430], [350, 375]], // |
    [[200, 375], [350, 375]], // -

    [[200, 375], [279, 325]], // /
    [[350, 375], [405, 320]], // /
    [[355, 320], [405, 320]], // -
    [[350, 430], [405, 365]], // /
    [[405, 320], [405, 365]], // |
    
    [[275, 345], [285, 295]], // /
    [[360, 345], [350, 295]], // \
    [[285, 295], [350, 295]], // -
];

var tank3 = [
    [[200, 430], [350, 430]], // -
    [[200, 430], [200, 375]], // |
    [[350, 430], [350, 375]], // |
    [[200, 375], [350, 375]], // -

    [[200, 375], [279, 325]], // /
    [[350, 375], [405, 320]], // /
    [[355, 320], [405, 320]], // -
    [[350, 430], [405, 365]], // /
    [[405, 320], [405, 365]], // |
    
    [[275, 345], [285, 295]], // /
    [[360, 345], [350, 295]], // \
    [[285, 295], [350, 295]], // -
];

const pociski = [];

var rect  = [[[310,315],[-125,10]]];
var rect2 = [[[610,315],[-125,10]]];
var rect3 = [[[910,315],[-125,10]]];

var z = 0;
var s = 1;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

setInterval('move(), move2(), move3(), move4(), ruszaj(), shoot()', 1000 / 240);
setInterval('random(), random2(), random3(), opoznienie(), czolgi()', 1000);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//rysowanie planszy
class Horizon {
    constructor({ position }) {
        this.position = position;
    }
    draw() {
        ctx.beginPath();
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length - 1; j++) {
                ctx.moveTo(t1[i][j][0], t1[i][j][1]);
                ctx.lineTo(t1[i][j + 1][0], t1[i][j + 1][1]);
            }
        }
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length - 1; j++) {
                ctx.moveTo(t1[i][j][0]+1500, t1[i][j][1]);
                ctx.lineTo(t1[i][j + 1][0]+1500, t1[i][j + 1][1]);
            }
        }
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length - 1; j++) {
                ctx.moveTo(t1[i][j][0]-1500, t1[i][j][1]);
                ctx.lineTo(t1[i][j + 1][0]-1500, t1[i][j + 1][1]);
            }
        }
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();
    }
    floor(){
        ctx.beginPath();
        for(let i = 0; i < t2.length; i++){
            for(let j = 0; j < t2[0].length - 1; j++){
                ctx.moveTo(t2[i][j][0]+1500, t2[i][j][1]);
                ctx.lineTo(t2[i][j + 1][0]+1500, t2[i][j + 1][1]);
            }
        }
        for(let i = 0; i < t2.length; i++){
            for(let j = 0; j < t2[0].length - 1; j++){
                ctx.moveTo(t2[i][j][0], t2[i][j][1]);
                ctx.lineTo(t2[i][j + 1][0], t2[i][j + 1][1]);
            }
        }
        for(let i = 0; i < t2.length; i++){
            for(let j = 0; j < t2[0].length - 1; j++){
                ctx.moveTo(t2[i][j][0]-1500, t2[i][j][1]);
                ctx.lineTo(t2[i][j + 1][0]-1500, t2[i][j + 1][1]);
            }
        }
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();
    }
    tank(){
        if(czyCzolg){
            ctx.beginPath();
            for(let i = 0; i < tank.length; i++){
                for(let j = 0; j < tank[0].length - 1; j++){
                    ctx.moveTo(tank[i][j][0], tank[i][j][1]);
                    ctx.lineTo(tank[i][j + 1][0], tank[i][j + 1][1]);
                }
            }
            ctx.rect(rect[0][0][0],rect[0][0][1],rect[0][1][0],rect[0][1][1]);
            ctx.strokeStyle= "blue";
            ctx.stroke();
            ctx.closePath();
        }
    }
    tank2(){
        if(czyCzolg2){
            console.log("drugi czołg");
            ctx.beginPath();
            for(let i = 0; i < tank2.length; i++){
                for(let j = 0; j < tank2[0].length - 1; j++){
                    ctx.moveTo(tank2[i][j][0]+300, tank2[i][j][1]);
                    ctx.lineTo(tank2[i][j + 1][0]+300, tank2[i][j + 1][1]);
                }
            }
            ctx.rect(rect2[0][0][0],rect2[0][0][1],rect2[0][1][0],rect2[0][1][1]);
            ctx.strokeStyle = "blue";
            ctx.stroke();
            ctx.closePath();
        }
    }
    tank3(){
        if(czyCzolg3){
            ctx.beginPath();
            for(let i = 0; i < tank3.length; i++){
                for(let j = 0; j < tank3[0].length - 1; j++){
                    ctx.moveTo(tank3[i][j][0]+600, tank3[i][j][1]);
                    ctx.lineTo(tank3[i][j + 1][0]+600, tank3[i][j + 1][1]);
                }
            }
            ctx.rect(rect3[0][0][0],rect3[0][0][1],rect3[0][1][0],rect3[0][1][1]);
            ctx.strokeStyle = "blue";
            ctx.stroke();
            ctx.closePath();
        }
    }
    update() {
        if(punkty < 30){
            this.draw();
            this.floor();
            this.tank();
            this.tank2();
            this.tank3();
        }else{
            ctx.strokeStyle = "black";
            ctx.strokeStyle = "green";
            ctx.font = "bold 50px sans-serif";
            ctx.strokeText("Wygrałeś!", (canvas.width/2)-100, canvas.height/2);
        }
    }
}


class Projectile {
    
    constructor({position, velocity}) {
        this.velocity = velocity;
        this.position = position;
        this.radius = 10;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    }
    update() {
        if(punkty < 30){
            this.radius *= 0.994;
            this.draw();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }else{
            ctx.strokeStyle = "black";
            document.getElementById("p").style.visibility = "visible";
        }
    }
}


const horizon = new Horizon({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
});
function rysuj() {
    
        for (let i = pociski.length-1; i >= 0; i--) {
            const projectile = pociski[i];
            //console.log(projectile.x + " " + projectile.y);
            projectile.update();
            cooldown = true;
        
            if (projectile.position.y + projectile.radius < 0) pociski.splice(i, 1);
        }
    
    horizon.update();
}

var rand = 0;
var los = 0;
var rand2 = 0;
var los2 = 0;
var rand3 = 0;
var los3 = 0;

function random(){
    rand = losuj(0, 10);
    los = losuj(0, 2);
}

function random2(){
    rand2 = losuj(0, 10);
    los2 = losuj(0, 2);
}

function random3(){
    rand3 = losuj(0, 10);
    los3 = losuj(0, 2);
}

function ruszaj(){
        for (let i = 0; i < tank.length; i++) {
            for (let j = 0; j < tank[0].length; j++) {
                if(los == 1){
                    tank[i][j][0] += rand;
                }else{
                    tank[i][j][0] -= rand;
                }
            }
        }
        for(let i = 0; i < rect.length; i++){
            for(let j = 0; j < rect[0].length; j++){
                if(rect[i][j][0] != rect[i][1][0]){
                    if(los == 1){
                        rect[i][j][0] += rand;
                    }else{
                        rect[i][j][0] -= rand;
                    }
                }
            }
        }

        for (let i = 0; i < tank2.length; i++) {
            for (let j = 0; j < tank2[0].length; j++) {
                if(los2 == 1){
                    tank2[i][j][0] += rand2;
                }else{
                    tank2[i][j][0] -= rand2;
                }
            }
        }
        for(let i = 0; i < rect2.length; i++){
            for(let j = 0; j < rect2[0].length; j++){
                if(rect2[i][j][0] != rect2[i][1][0]){
                    if(los2 == 1){
                        rect2[i][j][0] += rand2;
                    }else{
                        rect2[i][j][0] -= rand2;
                    }
                }
            }
        }

        for (let i = 0; i < tank3.length; i++) {
            for (let j = 0; j < tank3[0].length; j++) {
                if(los3 == 1){
                    tank3[i][j][0] += rand3;
                }else{
                    tank3[i][j][0] -= rand3;
                }
            }
        }
        for(let i = 0; i < rect3.length; i++){
            for(let j = 0; j < rect3[0].length; j++){
                if(rect3[i][j][0] != rect3[i][1][0]){
                    if(los3 == 1){
                        rect3[i][j][0] += rand3;
                    }else{
                        rect3[i][j][0] -= rand3;
                    }
                }
            }
        }
    }

function losuj(a, b){
    return Math.floor(Math.random()*(b-a)+1);
}

//przesuwanie w prawo
function move() {
    if (czyA) {
        przesunWPrawo();
        rysuj();
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length; j++) {
                t1[i][j][0] += 5;

            }
        }
        for (let i = 0; i < t2.length; i++) {
            for (let j = 0; j < t2[0].length; j++) {
                t2[i][j][0] += 10;

            }
        }
        for (let i = 0; i < tank.length; i++) {
            for (let j = 0; j < tank[0].length; j++) {
                tank[i][j][0] += 10;
            }
        }
        for(let i = 0; i < rect.length; i++){
            for(let j = 0; j < rect[0].length; j++){
                if(rect[i][j][0] != rect[i][1][0]){
                    rect[i][j][0] += 10;
                }
            }
        }
        for (let i = 0; i < tank2.length; i++) {
            for (let j = 0; j < tank2[0].length; j++) {
                tank2[i][j][0] += 10;
            }
        }
        for(let i = 0; i < rect2.length; i++){
            for(let j = 0; j < rect2[0].length; j++){
                if(rect2[i][j][0] != rect2[i][1][0]){
                    rect2[i][j][0] += 10;
                }
            }
        }
        for (let i = 0; i < tank3.length; i++) {
            for (let j = 0; j < tank3[0].length; j++) {
                tank3[i][j][0] += 10;
            }
        }
        for(let i = 0; i < rect3.length; i++){
            for(let j = 0; j < rect3[0].length; j++){
                if(rect3[i][j][0] != rect3[i][1][0]){
                    rect3[i][j][0] += 10;
                }
            }
        }
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rysuj();
}

function przesunWPrawo() {
    if (t1[t1.length - 1][t1[0].length - 1][0] > 1500) {
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length; j++) {
                t1[i][j][0] -= 1500;
            }
        }
    }
    if (t2[t2.length - 1][t2[0].length - 1][0] > 1500) {
        for (let i = 0; i < t2.length; i++) {
            for (let j = 0; j < t2[0].length; j++) {
                t2[i][j][0] -= 1500;
            }
        }
    }
}
//przesuwanie w lewo
function move2() {
    if (czyD) {
        przesunWLewo();
        rysuj();
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length; j++) {
                t1[i][j][0] -= 5;

            }
        }
        for (let i = 0; i < t2.length; i++) {
            for (let j = 0; j < t2[0].length; j++) {
                t2[i][j][0] -= 10;
 
            }
        }
        for (let i = 0; i < tank.length; i++) {
            for (let j = 0; j < tank[0].length; j++) {
                tank[i][j][0] -= 10;
            }
        }
        for(let i = 0; i < rect.length; i++){
            for(let j = 0; j < rect[0].length; j++){
                if(rect[i][j][0] != rect[i][1][0]){
                    rect[i][j][0] -= 10;
                }
            }
        }
        for (let i = 0; i < tank2.length; i++) {
            for (let j = 0; j < tank2[0].length; j++) {
                tank2[i][j][0] -= 10;
            }
        }
        for(let i = 0; i < rect2.length; i++){
            for(let j = 0; j < rect2[0].length; j++){
                if(rect2[i][j][0] != rect2[i][1][0]){
                    rect2[i][j][0] -= 10;
                }
            }
        }
        for (let i = 0; i < tank3.length; i++) {
            for (let j = 0; j < tank3[0].length; j++) {
                tank3[i][j][0] -= 10;
            }
        }
        for(let i = 0; i < rect3.length; i++){
            for(let j = 0; j < rect3[0].length; j++){
                if(rect3[i][j][0] != rect3[i][1][0]){
                    rect3[i][j][0] -= 10;
                }
            }
        }

    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rysuj();
    }

function przesunWLewo() {
    if (t1[0][0][0] < 0) {
        for (let i = 0; i < t1.length; i++) {
            for (let j = 0; j < t1[0].length; j++) {
                t1[i][j][0] += 1500;
            }
        }
    }
    if (t2[0][0][0] < 0) {
        for (let i = 0; i < t2.length; i++) {
            for (let j = 0; j < t2[0].length; j++) {
                t2[i][j][0] += 1500;
            }
        }
    }
}


//przesuwanie w przód
function move3() {
    if (czyW) {
        rysuj();
        for (let i = 0; i < tank.length; i++) {
            for (let j = 0; j < tank[0].length; j++) {
                tank[i][j][0] *= 1.01;
                tank[i][j][1] *= 1.01;
                tank[i][j][0] -= 3;
                tank[i][j][1] -= 3;
            }
        }
        for(let i = 0; i < rect.length; i++){
            for(let j = 0; j < rect[0].length; j++){
                rect[i][j][0] *= 1.01;
                rect[i][j][1] *= 1.01;
                if(rect[i][j][0] != rect[i][1][0]){
                    rect[i][j][0] -= 3;
                    rect[i][j][1] -= 3;
                }
            }
        }
        for (let i = 0; i < tank2.length; i++) {
            for (let j = 0; j < tank2[0].length; j++) {
                tank2[i][j][0] *= 1.01;
                tank2[i][j][1] *= 1.01;
                tank2[i][j][0] -= 3;
                tank2[i][j][1] -= 3;
            }
        }
        for(let i = 0; i < rect2.length; i++){
            for(let j = 0; j < rect2[0].length; j++){
                rect2[i][j][0] *= 1.01;
                rect2[i][j][1] *= 1.01;
                if(rect2[i][j][0] != rect[i][1][0]){
                    rect2[i][j][0] -= 6;
                    rect2[i][j][1] -= 3;
                }
            }
        }
        for (let i = 0; i < tank3.length; i++) {
            for (let j = 0; j < tank3[0].length; j++) {
                tank3[i][j][0] *= 1.01;
                tank3[i][j][1] *= 1.01;
                tank3[i][j][0] -= 3;
                tank3[i][j][1] -= 3;
            }
        }
        for(let i = 0; i < rect3.length; i++){
            for(let j = 0; j < rect3[0].length; j++){
                rect3[i][j][0] *= 1.01;
                rect3[i][j][1] *= 1.01;
                if(rect3[i][j][0] != rect[i][1][0]){
                    rect3[i][j][0] -= 9;
                    rect3[i][j][1] -= 3;
                }
            }
        }
    }
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rysuj();

function move4() {
    if (czyS) {
        rysuj();
    for (let i = 0; i < tank.length; i++) {
        for (let j = 0; j < tank[0].length; j++) {
            tank[i][j][0] *= 0.99;
            tank[i][j][1] *= 0.99;
            tank[i][j][0] += 3;
            tank[i][j][1] += 3; 
        }

    }
    for(let i = 0; i < rect.length; i++){
        for(let j = 0; j < rect[0].length; j++){
            rect[i][j][0] *= 0.99;
            rect[i][j][1] *= 0.99;
            if(rect[i][j][0] != rect[i][1][0]){
                rect[i][j][0] += 3;
                rect[i][j][1] += 3;
            }
        }
    }
    for (let i = 0; i < tank2.length; i++) {
        for (let j = 0; j < tank2[0].length; j++) {
            tank2[i][j][0] *= 0.99;
            tank2[i][j][1] *= 0.99;
            tank2[i][j][0] += 3;
            tank2[i][j][1] += 3; 
        }

    }
    for(let i = 0; i < rect2.length; i++){
        for(let j = 0; j < rect2[0].length; j++){
            rect2[i][j][0] *= 0.99;
            rect2[i][j][1] *= 0.99;
            if(rect2[i][j][0] != rect2[i][1][0]){
                rect2[i][j][0] += 6;
                rect2[i][j][1] += 3;
            }
        }
    }
    for (let i = 0; i < tank3.length; i++) {
        for (let j = 0; j < tank3[0].length; j++) {
            tank3[i][j][0] *= 0.99;
            tank3[i][j][1] *= 0.99;
            tank3[i][j][0] += 3;
            tank3[i][j][1] += 3; 
        }

    }
    for(let i = 0; i < rect3.length; i++){
        for(let j = 0; j < rect3[0].length; j++){
            rect3[i][j][0] *= 0.99;
            rect3[i][j][1] *= 0.99;
            if(rect3[i][j][0] != rect2[i][1][0]){
                rect3[i][j][0] += 9;
                rect3[i][j][1] += 3;
            }
        }
    }
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rysuj();
}


//celownik
function gun() {
    if(punkty < 30){
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 50, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }else{
        ctx.strokeStyle = "black";
        document.getElementById("p").style.visibility = "visible";
    }
}


//strzelanie
function shoot(){
    if(czySpacja){
        rysuj();
        if(tank[1][0][0] < 800 && tank[7][0][0] > 700){
            czyCzolg = false;
        }
        if(tank2[1][0][0] < 500 && tank2[7][0][0] > 400){
            czyCzolg2 = false;
        }
        if(tank3[1][0][0] < 200 && tank3[7][0][0] > 100){
            czyCzolg3 = false;
        }
    }
}
