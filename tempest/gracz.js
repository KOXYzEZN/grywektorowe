class gracz {
    constructor(poz,fps) {
        this.vel = 300 / (fps/60)
        this.poz = poz
        this.pos = 0
        this.zew = poz.getZewPnkt()
        this.wew = poz.getWewPnkt()
        this.posx = (this.zew[this.pos][0] + this.zew[this.pos + 1][0]) / 2
        this.posy = (this.zew[this.pos][1] + this.zew[this.pos + 1][1]) / 2
        this.ratio = [1, 1]
        this.pociski = []
        this.fps = fps
        let p = new pocisk(this.poz,this.pos,this.fps)
        this.pociski.push(p)
    
        //console.log(this.zew[this.pos][0] / this.zew[this.pos + 1][0], this.zew[this.pos][1] / this.zew[this.pos + 1][1])
    }
    rysuj() {
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.posx, this.posy, 40, 0, 2 * Math.PI);
        ctx.stroke();
        for (let i = 0; i < this.pociski.length; i++) {
            this.pociski[i].ruszaj()
            this.pociski[i].rysuj()
        }
    }
    prawo() {
        //console.log("hej")
        ctx.strokeStyle = "yellow";
        this.ratio[0] -= this.vel / 1000
        this.ratio[1] += this.vel / 1000

        //console.log(this.pos, this.zew.length)
        if (this.pos == -1)
            this.pos = this.zew.length-1
        if (this.pos > this.zew.length-1)
            this.pos = 0
        if (this.pos == this.zew.length-1) {
            this.posx = (this.zew[this.pos][0] * this.ratio[0] + this.zew[0][0] * this.ratio[1]) / 2
            this.posy = (this.zew[this.pos][1] * this.ratio[0] + this.zew[0][1] * this.ratio[1]) / 2
          
        } else {
            this.posx = (this.zew[this.pos][0] * this.ratio[0] + this.zew[this.pos + 1][0] * this.ratio[1]) / 2
            this.posy = (this.zew[this.pos][1] * this.ratio[0] + this.zew[this.pos + 1][1] * this.ratio[1]) / 2

          
        }


        //onsole.log(this.ratio)
        //console.log(this.posx,this.posy)
    }

    lewo() {
        this.ratio[0] += this.vel / 1000
        this.ratio[1] -= this.vel / 1000

        //console.log(this.pos, this.zew.length)
        if (this.pos == -1)
            this.pos = this.zew.length-1
        if (this.pos > this.zew.length-1)
            this.pos = 0
        if (this.pos == this.zew.length-1) {
            this.posx = (this.zew[this.pos][0] * this.ratio[0] + this.zew[0][0] * this.ratio[1]) / 2
            this.posy = (this.zew[this.pos][1] * this.ratio[0] + this.zew[0][1] * this.ratio[1]) / 2

        } else {
            this.posx = (this.zew[this.pos][0] * this.ratio[0] + this.zew[this.pos + 1][0] * this.ratio[1]) / 2
            this.posy = (this.zew[this.pos][1] * this.ratio[0] + this.zew[this.pos + 1][1] * this.ratio[1]) / 2

        }

        //console.log(this.ratio)
        //console.log(this.posx,this.posy)
    }

    strzel(){
        // let p = new pocisk(this.poz,this.pos,this.fps)
        // this.pociski.push(p)
    }

    zmianPoz() {

        //adadaconsole.log(this.pos, this.zew.length)
        if (this.ratio[0] >= 2) {
            this.pos -= 1;
            this.ratio[0] = this.ratio[0] - 2;
            this.ratio[1] = this.ratio[1] + 2;
        } else if (this.ratio[1] >= 2) {
            this.pos += 1;
            this.ratio[1] = this.ratio[1] - 2;
            this.ratio[0] = this.ratio[0] + 2;
        }
        //console.log(this.pos)
    }

    getPos(){
        return this.pos
    }
}