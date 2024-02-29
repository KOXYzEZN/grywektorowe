class pocisk {
    constructor(poz, pos, fps) {
        this.ratio = [2, 0]
        this.vel = 480 / (fps / 60)
        this.poz = poz
        this.pos = pos
        this.zew = poz.getZewPnkt()
        this.wew = poz.getWewPnkt()
        this.posx = (this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2//(this.wew[this.pos][0] + this.wew[this.pos + 1][0]) / 2
        this.posy = (this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2 //(this.wew[this.pos][1] + this.wew[this.pos + 1][1]) / 2
        this.gorx = (this.wew[this.pos][0] + this.wew[this.pos + 1][0]) / 2//(this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2
        this.gory = (this.wew[this.pos][1] + this.wew[this.pos + 1][1]) / 2//(this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2
        this.gorOdl = odlegloscOdPunktu(this.zew[this.pos], this.zew[this.pos + 1]) / 2;
        this.dolx = this.posx;
        this.doly = this.posy;
        this.wiel = odlegloscOdPunktu(this.wew[this.pos], this.wew[this.pos + 1]) / 24;
        this.skal = (odlegloscOdPunktu(this.wew[this.pos], this.wew[this.pos + 1]) / 2) / (odlegloscOdPunktu(this.zew[this.pos], this.zew[this.pos + 1]) / 2);
    }

    rysuj() {
        if (!this.czyDotarl){
        ctx.strokeStyle = "red";
        ctx.beginPath();
        //console.log(this.gorx,this.gory," ",this.dolx,this.doly);
        ctx.arc(this.posx, this.posy, this.wiel, 0, 2 * Math.PI);
        ctx.stroke();
        }   
    }

    ruszaj() {
        
        if (!this.czyDotarl) {
            
            this.ratio[0] -= (this.vel +  this.ratio[1]) / 100000
            this.ratio[1] += (this.vel +  this.ratio[1]) / 100000

            //console.log(this.wiel);
            // this.wiel = 100 * ((this.skal)*(this.ratio[1]))
            this.posx = (this.gorx * this.ratio[1] + this.dolx * this.ratio[0]) / 2
            this.posy = (this.gory * this.ratio[1] + this.doly * this.ratio[0]) / 2
            if (this.ratio[1] >= 2) {
                this.czyDotarl = true
            }
            
            //console.log(this.ratio[1],this.ratio[0]);
        }
    }
}