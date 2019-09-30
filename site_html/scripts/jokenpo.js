/**
 * @author Luiz Henrique 
 */

function jogar() {

    let aleatorio

    if (document.getElementById("pedra").checked == false & document.getElementById("papel").checked == false
        && document.getElementById("tesoura").checked == false) {
        alert("Selecione uma das opções")
    } else {
        // Segue a lógica.
    }
    aleatorio = Math.round(Math.random() * 3)
    switch (aleatorio) {
        case 0:
            document.getElementById("pc").src = "pcpedra.png"
            break
        case 1:
            document.getElementById("pc").src = "pcpapel.png"
            break
        case 2:
            document.getElementById("pc").src = "pctesoura.png"
            break
    }
    // Resultado
    if ((document.getElementById("pedra").checked == true && aleatorio == 0) || (document.getElementById("papel").checked == true && aleatorio == 1)
        || (document.getElementById("tesoura").checked == true && aleatorio == 2)) {
        //Empate
    } else if ((document.getElementById("pedra").checked == true && aleatorio == 2) || (document.getElementById("papel").checked == true && aleatorio == 0)
        || (document.getElementById("tesoura").checked == true && aleatorio == 1)) {
        //Vitória Jogador
    } else {
        //Vitória Computador
    }

}
function resetar() {
    document.getElementById("pc").src = "pc.png"
    document.getElementById("placar").innerHTML = ""
}





























