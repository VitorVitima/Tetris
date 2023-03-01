class Tetris{
    constructor(ctx, teclas, canvas){
        this.ctx = ctx
        this.teclas = teclas
        this.canvas = canvas
        this.x = 0
        this.y = 0

        this.wSize = 35
        this.hSize = 35

        this.vHorizontal = 10
        this.vVertical = 10
        this.limite = this.canvas.height
    }
    desenhar(v){
        if(v == 1){
            this.limite = 35*4 + 15
            this.desenho1()
        } else if(v == 2){
            this.desenho2()
        } else if(v == 3){
            this.desenho3()
        } else if(v == 4){
            this.desenho4()
        } else if(v == 5){
            this.desenho5()
        }
    }
    desenho1(){
        this.ctx.fillStyle='#65B7C3'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'gray'
        this.ctx.fillRect(this.x, this.y, this.wSize*4, this.hSize)
        this.ctx.strokeRect(this.x, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize*2, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize*3, this.y, this.wSize, this.hSize)
    }
    desenho2(){
        this.ctx.fillStyle='#C90A0F'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'gray'
        this.ctx.fillRect(this.x, this.y, this.wSize*2, this.hSize*2)
        this.ctx.strokeRect(this.x, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x, this.y+this.hSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y+this.hSize, this.wSize, this.hSize)
    }
    desenho3(){
        this.ctx.fillStyle='#1464A3'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'gray'
        this.ctx.fillRect(this.x, this.y, this.wSize, this.hSize)
        this.ctx.fillRect(this.x, this.y + this.hSize , this.wSize*3, this.hSize)
        this.ctx.strokeRect(this.x, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x, this.y + this.wSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y + this.wSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize*1, this.y + this.wSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize*2, this.y + this.wSize, this.wSize, this.hSize)
    }
    desenho4(){
        this.ctx.fillStyle='#EBD601'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'gray'
        this.ctx.fillRect(this.x, this.y + this.hSize, this.wSize, this.hSize)
        this.ctx.fillRect(this.x + this.wSize, this.y, this.wSize, this.hSize*3)
        this.ctx.strokeRect(this.x, this.y + this.hSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y + this.hSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y + this.hSize *2, this.wSize, this.hSize)
    }
    desenho5(){
        this.ctx.fillStyle='#8B3E86'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'gray'
        this.ctx.fillRect(this.x+this.wSize, this.y, this.wSize*2, this.hSize)
        this.ctx.fillRect(this.x, this.y + this.hSize, this.wSize*2, this.hSize)
        this.ctx.strokeRect(this.x+this.wSize, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x+this.wSize*2, this.y, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x, this.y+this.hSize, this.wSize, this.hSize)
        this.ctx.strokeRect(this.x + this.wSize, this.y+this.hSize, this.wSize, this.hSize)
    }
    descida(){
        setInterval(()=>{
            this.y += this.vVertical
        }, 200)
    }
    move(){
        if(this.teclas.esquerda){
            if(this.x > 0){
                this.x -= this.vHorizontal
            }
        } else if(this.teclas.direita){
            if(this.x < this.limite){
                this.x += this.vHorizontal
            }
        }
        if(this.teclas.baixo){
            if(this.y < this.limite){
                this.y += this.vVertical
            }
        }
    }
}