/**
 * Cálculo IMC
 * @author Luiz Henrique
 */

function calcularImc() {
    let altura, peso, imc // variaveis do mesmo tipo
    /*
        parseFloat converte a String da caixa de texto 
        do formulario para um numerico.
        Float (numeros reais, casas decimais)
        Int (numeros inteiros)
        .replace (",",";") (troca um caractere por outro)
    */
    peso = parseFloat(frmImc.txtPeso.value.replace(",", "."))
    altura = parseFloat(frmImc.txtAltura.value.replace(",", "."))
    imc = peso / (altura * altura)
    //toFixed(2) -> formatar o resultado em 2 casas decimais
    frmImc.txtImc.value = imc.toFixed(2)

    if (imc < 17) {
        frmImc.txtStatus.value = "Muito abaixo do peso"
        document.getElementById("imc").src = "../imagens/imc1.png"

    } else if (imc >= 17 && imc <= 18.49) {
        frmImc.txtStatus.value = "Abaixo do peso"
        document.getElementById("imc").src = "../imagens/imc2.png"

    } else if (imc >= 18.5 && imc <= 24.99) {
        frmImc.txtStatus.value = "Peso normal"
        document.getElementById("imc").src = "../imagens/imc3.png"

    } else if (imc >= 25 && imc <= 29.99) {
        frmImc.txtStatus.value = "Acima do peso"
        document.getElementById("imc").src = "../imagens/imc4.png"

    } else if (imc >= 30 && imc <= 34.99) {
        frmImc.txtStatus.value = "Obesidade I"
        document.getElementById("imc").src = "../imagens/imc5.png"

    } else if (imc >= 35 && imc <= 39.99) {
        frmImc.txtStatus.value = "Obesidade II (severa)"
        document.getElementById("imc").src = "../imagens/imc6.png"

    } else {
        frmImc.txtStatus.value = "Obesidade III (mórbida)"
        document.getElementById("imc").src = "../imagens/imc7.png"

    }

}




