/**
 * Exemplo de uso da biblioteca JQUERY
 * @author Luiz Henrique 
 * */

//ESPERA O CARREGAMENTO PRONTO DO DOCUMENTO
$(document).ready(function(){

    //SE o mouse estiver em cima da imagem
    //fade (timer, opacidade)
    //timer em milisegundos
    //fade( (0) transparente a (1)solid )    
    $('ul.Destaque li img').hover(function(){
        $('ul.Destaque li img').not(this).stop().fadeTo(1000,0.2)
    //senao (se o mouse não estiver em cima da imagem)
    },function(){
        $('ul.Destaque li img').stop().fadeTo(1000,1)
    })
})