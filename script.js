const conteiner = document.querySelector('#conteiner')
const colorBorder = 'gray'
const vHorizontal = 10
const vVertical = 10
const marginLeftDiv = 85
function modelo1(){
    const modelo = document.createElement('div')
    for(let v1 = 0; v1 < 4 ; v1++){
        const m = document.createElement('div')
        m.style.border = `1px solid ${colorBorder}`
        m.style.width = '25%'
        m.style.height = '100%'
        m.style.backgroundColor = '#58B0BA'
        modelo.appendChild(m)
    }
    modelo.style.width = '130px'
    modelo.style.height = `30px`
    modelo.style.transform = 'translate(0px, -7px)'
    modelo.style.display = 'flex'
    modelo.style.margin = `0px ${marginLeftDiv}px`
    return (modelo)

}
function modelo2(){
    const modelo = document.createElement('div')
    for(let v1 = 0; v1 < 4 ; v1++){
        const m = document.createElement('div')
        m.style.border = `1px solid ${colorBorder}`
        m.style.width = '33px'
        m.style.height = '30px'
        m.style.backgroundColor = 'red'
        modelo.appendChild(m)
    }
    modelo.style.width = '70px'
    modelo.style.height = `65px`
    modelo.style.display = 'flex'
    modelo.style.flexWrap = 'wrap'
    modelo.style.margin = `0px ${marginLeftDiv}px`
    return (modelo)
}
function modelo3(){
    const modelo = document.createElement('div')
    const colorBoxs = '#1464A3'
    for(let v1 = 0; v1 < 4 ; v1++){
        const m = document.createElement('div')
        m.style.border = `1px solid ${colorBorder}`
        m.style.width = '33px'
        m.style.height = '30px'
        m.style.backgroundColor = colorBoxs

        modelo.appendChild(m)
    }
    const con = document.createElement('div')
    modelo.firstChild.style.width = `${70*2}px`
    modelo.firstChild.style.backgroundColor = 'transparent'
    modelo.firstChild.style.border = `0px solid ${colorBorder}`
    modelo.firstChild.appendChild(con)
    con.style.backgroundColor = colorBoxs
    con.style.width = '33px'
    con.style.height = `30px`
    con.style.border = `1px solid ${colorBorder}`
    modelo.style.width = `${70 + 37}px`
    modelo.style.height = `65px`
    modelo.style.display = 'flex'
    modelo.style.flexWrap = 'wrap'
    modelo.style.margin = `0px ${marginLeftDiv}px`
    return (modelo)
}
function modelo4(){
    const modelo = document.createElement('div')
    const colorBoxs = 'yellow'
    for(let v1 = 0; v1 < 4 ; v1++){
        const m = document.createElement('div')
        m.style.border = `1px solid ${colorBorder}`
        m.style.width = '33px'
        m.style.height = '30px'
        m.style.backgroundColor = colorBoxs

        modelo.appendChild(m)
    }
    const con = document.createElement('div')
    modelo.firstChild.style.width = `${70*2}px`
    modelo.firstChild.style.backgroundColor = 'transparent'
    modelo.firstChild.style.border = `0px solid ${colorBorder}`
    modelo.firstChild.style.display = 'flex'
    modelo.firstChild.style.justifyContent = 'center'
    modelo.firstChild.appendChild(con)
    con.style.backgroundColor = colorBoxs
    con.style.width = '33px'
    con.style.height = `30px`
    con.style.border = `1px solid ${colorBorder}`
    modelo.style.width = `${70 + 35}px`
    modelo.style.height = `65px`
    modelo.style.display = 'flex'
    modelo.style.flexWrap = 'wrap'
    modelo.style.margin = `0px ${marginLeftDiv}px`
    return (modelo)
}
function modelo5(){
    const modelo = document.createElement('div')
    const colorBoxs = '#8a3e86'
    for(let v1 = 0; v1 < 4 ; v1++){
        const m = document.createElement('div')
        m.style.border = `1px solid ${colorBorder}`
        m.style.width = '33px'
        m.style.height = '30px'
        m.style.backgroundColor = colorBoxs
        modelo.appendChild(m)
    }
    const con = document.createElement('div')
    modelo.firstChild.style.width = `${70}px`
    modelo.firstChild.style.backgroundColor = 'transparent'
    modelo.firstChild.style.border = `0px solid ${colorBorder}`
    modelo.firstChild.style.display = 'flex'
    modelo.firstChild.style.justifyContent = 'right'
    modelo.firstChild.appendChild(con)
    con.style.backgroundColor = colorBoxs
    con.style.width = '33px'
    con.style.height = `30px`
    con.style.border = `1px solid ${colorBorder}`
    modelo.style.width = `${70 + 35}px`
    modelo.style.height = `65px`
    modelo.style.display = 'flex'
    modelo.style.flexWrap = 'wrap'
    modelo.style.margin = `0px ${marginLeftDiv}px`
    return (modelo)
}
window.addEventListener('keydown', (e)=>{
    const p = conteiner.childNodes[1]
    if(e.key == 'd'){
        let pLeft = Number(p.style.marginLeft.split('px')[0])
        p.style.marginLeft = `${pLeft += vHorizontal}px`
    } else if(e.key == 'a'){
        let pRight = Number(p.style.marginLeft.split('px')[0])
        p.style.marginLeft = `${pRight -= vHorizontal}px`
    }
})
const descendo = () =>{
    setInterval(()=>{
        const p = conteiner.childNodes[1]
        let pTop = Number(p.style.marginTop.split('px')[0])
        let limite = 90 / 100 * window.innerHeight - p.clientHeight
        if(pTop <= limite){

            p.style.marginTop = `${ pTop +=vVertical}px`
        }
    }, 10)
}
conteiner.appendChild(modelo2())
descendo()