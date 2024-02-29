class plansza {

    constructor(zew, x, y, odl, czyZam, color,srod) {
        this.color = color;

        this.zewPnkt = zew;
        this.wewPnkt = Empty2DArray(this.zewPnkt.length, 2);
        this.czyZam = czyZam;
        for (let i = 0; i < this.zewPnkt.length; i++) {
            //let srd = odlegloscOdSrodka(this.zewPnkt[i][0],this.zewPnkt[i][1])
            let srdx = srod[0] - this.zewPnkt[i][0]
            let srdy = srod[1] - this.zewPnkt[i][1]

            this.wewPnkt[i][0] = Math.round(((srdx * odl) + this.zewPnkt[i][0]) + x);
            this.wewPnkt[i][1] = Math.round(((srdy * odl) + this.zewPnkt[i][1]) + y);
        }
        //console.log(this.zewPnkt);
        //console.log(this.wewPnkt);

    }

    dodajGracza(gracz) {
        this.posG = gracz
    }

    rysuj() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.strokeStyle = this.color;

        for (let i = 0; i < this.zewPnkt.length - 1; i++) {
            if (i == this.posG)
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.zewPnkt[i][0], this.zewPnkt[i][1]);
            ctx.lineTo(this.zewPnkt[i + 1][0], this.zewPnkt[i + 1][1]);
            ctx.stroke();
        }
        if (this.czyZam) {
            if (this.zewPnkt.length - 1 == this.posG)
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.zewPnkt[this.zewPnkt.length - 1][0], this.zewPnkt[this.zewPnkt.length - 1][1]);
            ctx.lineTo(this.zewPnkt[0][0], this.zewPnkt[0][1]);
            ctx.stroke();
        }

        for (let i = 0; i < this.wewPnkt.length - 1; i++) {
            if (i == this.posG)
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.wewPnkt[i][0], this.wewPnkt[i][1]);
            ctx.lineTo(this.wewPnkt[i + 1][0], this.wewPnkt[i + 1][1]);

            ctx.stroke();
        }
        if (this.czyZam) {
            if (this.wewPnkt.length - 1 == this.posG)
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.wewPnkt[this.wewPnkt.length - 1][0], this.wewPnkt[this.wewPnkt.length - 1][1]);
            ctx.lineTo(this.wewPnkt[0][0], this.wewPnkt[0][1]);

            ctx.stroke();
        }

        for (let i = 0; i < this.zewPnkt.length; i++) {
            //console.log(i,this.posG)

            if ((i == this.posG||i-1 == this.posG)||(this.posG==this.wewPnkt.length - 1 && i==0))
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = this.color;

            ctx.beginPath();
            ctx.moveTo(this.zewPnkt[i][0], this.zewPnkt[i][1]);
            ctx.lineTo(this.wewPnkt[i][0], this.wewPnkt[i][1]);

            ctx.stroke();
        }
    }

    getWewPnkt() {
        return this.wewPnkt;
    }
    getZewPnkt() {
        return this.zewPnkt;
    }

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

function odlegloscOdSrodka(x, y) {
    let a = x[0] - y[0];
    let b = x[1] - y[1]
    //console.log(x, y, a, b)

    let odl = Math.sqrt((a * a) + (b * b));
    /*
        if (a>0 && b<0||a<0&&b>0) {
            odl *= -1;
        }
        */
    return odl;
} 