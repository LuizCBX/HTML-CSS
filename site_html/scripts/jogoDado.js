/**
 * Estudo da estrutura switch acse
 * @author Luiz Henrique 
 */
// a linha abaixo gera um numero aleatório entre 0 e 5
// Math.floor (converte para numero inteiro)

let face = Math.floor(Math.random() * 6) + 1

switch (face){
    case 1:
        //a linha abaixo "captura"o id do documento .html (DOM)
        document.getElementById("dado").src = "../imagens/face1.png"
        break
    case 2:
        document.getElementById("dado").src = "../imagens/face2.png"
        break
    case 3:
        document.getElementById("dado").src = "../imagens/face3.png"
        break
    case 4:
        document.getElementById("dado").src = "../imagens/face4.png"
        break
    case 5:
        document.getElementById("dado").src = "../imagens/face5.png"
        break
    case 6:
        document.getElementById("dado").src = "../imagens/face6.png"
        break
}
alert(face)