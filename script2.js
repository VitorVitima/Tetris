const canvas = document.querySelector('#conteiner')
const ctx = canvas.getContext('2d')
const teclas = {
    direita: false,
    esquerda: false,
    baixo: false,
    space: false
}
const moldes = [
    'tetris.desenho1()',
    'tetris.desenho2()',
    'tetris.desenho3()',
    'tetris.desenho4()',
    'tetris.desenho5()'
]
const tetris = new Tetris(ctx, teclas, canvas)
window.addEventListener('keydown', (e)=>{
    if(e.key == 'a'){
        teclas.esquerda = true
    }
    if(e.key == 'd'){
        teclas.direita = true
    }
    if(e.key == 's'){
        teclas.baixo = true
    }
    if(e.key == ' '){
        teclas.space=true
    }
    tetris.move()
})
window.addEventListener('keyup', ()=>{
    if(teclas.esquerda){
        teclas.esquerda = false
    }
    if(teclas.direita){
        teclas.direita = false
    }
    if(teclas.baixo){
        teclas.baixo = false
    }
    if(teclas.space){
        teclas.space=false
        
    }
})
const aleatorio = () =>{
    const aleatorio = Math.floor(Math.random() * 6)
    return 5
}
const animacao = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //eval(moldes[aleatorio()])
    tetris.desenhar(aleatorio())
    requestAnimationFrame(animacao)
}
animacao()