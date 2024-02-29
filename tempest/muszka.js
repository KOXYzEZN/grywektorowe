class muszka {
    constructor(poz,pos, fps,gracz) {
        this.vel = 30 / (fps / 60)
        this.przyspieszenie = this.vel*1,5
        this.poz = poz
        this.pos = pos
        this.zew = poz.getZewPnkt()
        this.wew = poz.getWewPnkt()
        this.posx = (this.wew[this.pos][0] + this.wew[this.pos + 1][0]) / 2
        this.posy = (this.wew[this.pos][1] + this.wew[this.pos + 1][1]) / 2
        this.gorx = (this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2
        this.gory = (this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2
        this.gorOdl = odlegloscOdPunktu(this.zew[this.pos], this.zew[this.pos + 1]) / 2;
        this.dolx = this.posx;
        this.doly = this.posy;
        this.wiel = odlegloscOdPunktu(this.wew[this.pos], this.wew[this.pos + 1])/24;
        this.skal = (odlegloscOdPunktu(this.wew[this.pos], this.wew[this.pos + 1])/2)/(odlegloscOdPunktu(this.zew[this.pos], this.zew[this.pos + 1])/2);
        this.czyDotarl = false;
        this.czyZabil = false;
        this.gracz = gracz;
        this.fps = fps;
        this.czyZabil
        //console.log(this.skal);
       // console.log(this.pos)
        //console.log(this.posx,this.posy);
        this.ratio = [2, 0]
        //console.log(this.zew[this.pos][0] / this.zew[this.pos + 1][0], this.zew[this.pos][1] / this.zew[this.pos + 1][1])
    }

    rysuj() {
        if(!this.czyZabil){
        ctx.strokeStyle = "red";
        ctx.beginPath();
        //console.log(this.gorx,this.gory," ",this.dolx,this.doly);
        ctx.arc(this.posx, this.posy, this.wiel, 0, 2 * Math.PI);
        ctx.stroke();
        }
    }

    ruszaj(z) {
        if (!this.czyDotarl) {
            this.ratio[0] -= (this.vel +(Math.pow(this.przyspieszenie,2) * this.ratio[1])) / 100000
            this.ratio[1] += (this.vel +(Math.pow(this.przyspieszenie,2) * this.ratio[1])) / 100000   
            let temp = losuj(0,300)-2
            if(temp<=1){
                this.pos -= temp
                this.posx = (this.wew[this.pos][0] + this.wew[this.pos + 1][0]) / 2
            this.posy = (this.wew[this.pos][1] + this.wew[this.pos + 1][1]) / 2
         this.gorx = (this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2
        this.gory = (this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2
        //this.gorOdl = odlegloscOdPunktu(this.zew[this.pos], this.zew[this.pos + 1]) / 2;
        this.dolx = this.posx;
        this.doly = this.posy;
            }
            //console.log(this.wiel);
            this.wiel = 100 * ((this.skal)*(this.ratio[1]))
            this.posx = (this.gorx * this.ratio[1] + this.dolx * this.ratio[0]) / 2
            this.posy = (this.gory * this.ratio[1] + this.doly * this.ratio[0]) / 2
            if (this.ratio[1] >= 2){
                this.czyDotarl = true
            }
        }else if(!this.czyZabil){
            if(this.gracz.getPos()==this.pos){
                this.czyZabil = true
            }else{
            if (z%60/(60*this.fps)==0)
           this.update()
            }
        }
    }

    update(){
        //console.log(ktoraStrona(this.pos,this.zew.length,this.gracz.getPos()))
            this.pos += ktoraStrona(this.pos,this.zew.length,this.gracz.getPos());  
            if(this.pos == -1)
                this.pos = this.zew.length-1
            if(this.pos == this.zew.length)
                this.pos =0;
            //console.log(this.pos)
            if (this.pos == this.zew.length-1) {
                this.posx = (this.zew[this.pos][0] + this.zew[0][0]) / 2
                this.posy = (this.zew[this.pos][1] + this.zew[0][1]) / 2
    
            } else {
                this.posx = (this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2
                this.posy = (this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2
    
            }
    }


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

function ktoraStrona(pos,maxPos,pPos){
    let lew = 0
    let pra = 0
    let kon = 0
    let i = pos;
    while (i != pPos) {
        pra++;
        i++
        if(i == maxPos)
         i = 0
    }
    i = pos;
    while (i != pPos) {
        i--;
        if(i == -1)
         i = maxPos-1
        lew++;
        //console.log(i,pPos)
    }


    if(lew>=pra){
        kon = 1;
    }else if(lew<pra){
        kon = -1;
    }
    return kon;
     //console.log(kon)
}

function losuj(a,b){
    return Math.floor(Math.random()*b-a+1)
}