var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var fps = 120
var srod = [c.width / 2, c.height / 2]

//punkZew = [[100, 100], [100, 800], [600, 850], [1100, 850],[1700, 800], [1700, 100], [1200, 50], [500, 75]];
//punkZew = [[1375, 950], [1375, 100], [525, 100], [525, 950]];
punkZew = [[550, 125],[550, 325],[550, 525],[550, 725], 
[550, 925], [750, 925], [950, 925], [1150, 925], 
[1350, 925], [1350, 725], [1350, 525], [1350, 325], 
[1350, 125],[1150, 125],[950, 125],[750, 125]];
//zarys = dodajPnktZew(punkZew)
// punkWew = [[400, 400], [400, 500], [1400, 500], [1400, 400]];
var poz1 = new plansza(punkZew, 0, 200, 0.9, true, "blue", srod);
var player = new gracz(poz1, fps);
var m1 = new muszka(poz1,0,fps,player)
poz1.rysuj();
//ctx.beginPath();

// Flag to track if the "W" key is pressed
var czyA = false;
var czyD = false;

// Add event listeners for keydown and keyup events
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

setInterval(update, 1000 / fps);
var z = 0;
function update() {
    z++;
    //console.log(czyA);
    ctx.clearRect(0, 0, c.width, c.height);




    if (czyD) {
        player.zmianPoz();
        player.prawo()
    }


    if (czyA) {
        player.zmianPoz();
        player.lewo();
    }

   m1.ruszaj(z)
   player.strzel()

    poz1.dodajGracza(player.getPos());

    poz1.rysuj();
    player.rysuj();
    m1.rysuj();
    
    
    if(z<99999)
        z==0;

}

function dodajPnktZew(zew) {
    var arr = []
    //var dzielnik = []
    var suma = zew.length;
    for (let i = 0; i < zew.length; i++) {
        //arr.push(zew[i]);
        let temp = i + 1;
        if (temp == zew.length)
            temp = 0;
        dzielnik= Math.round(odlegloscOdPunktu(zew[i], zew[temp]) / 100);
        ileOdc = odlegloscOdPunktu(zew[i], zew[temp]) / dzielnik;
        let tempArr = []

        tempArr.push(zew[i]);
        console.log(dzielnik,ileOdc)

        for (let j = 0; j < dzielnik; j++) {
            const element = array[j];
            
        }
    }
    

    return arr;
}

function Empty2DArray(rows, cols) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = null;
        }
    }
    return array;
}

function odlegloscOdPunktu(x, y) {
    
    //console.log(x,y)
    let a = x[0] - y[0];
    let b = x[1] - y[1];

    let odl = Math.sqrt((a * a) + (b * b));
    /*
        if (a>0 && b<0||a<0&&b>0) {
            odl *= -1;
        }
        */
        
    return odl;
} 