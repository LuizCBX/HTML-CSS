/**
 * Simples slide show
 * @author Luiz  
 * */

let intervalo = 3000

function slide1() {
    document.getElementById('banner').src = 'imagens/banner4.jpg'
    //a linha abaixo "executa" a função após 3 segundos
    setTimeout('slide2()', intervalo)
}

function slide2() {
    document.getElementById('banner').src = 'imagens/banner3.jpg'
    setTimeout('slide3()', intervalo)
}

function slide3() {
    document.getElementById('banner').src = 'imagens/banner2.jpg'
    setTimeout('slide1()', intervalo)
}