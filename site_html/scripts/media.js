/**
 * Cálculo da média
 * @author Professor José de Assis
 */

function calcularMedia() {
    let nota1, nota2, media //variáveis do mesmo tipo
    /*
        parseFloat converte a String da caixa de texto
        do formulário para um tipo numérico
        Float (números reais, casas decimais)
        Int (números inteiros)
        .replace(",",".") (troca um caractere por outro)
    */
    nota1 = parseFloat(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = parseFloat(frmMedia.txtNota2.value.replace(",", "."))
    media = (nota1 + nota2) / 2
    //toFixed(2) -> formatar o resultado em 2 casas decimais
    frmMedia.txtResultado.value = media.toFixed(2)
    if (media < 2) {
        frmMedia.txtStatus.value = "REPROVADO"
    } else if (media >= 2 && media < 5){
        frmMedia.txtStatus.value = "RECUPERAÇÃO"
    } else {
        frmMedia.txtStatus.value = "APROVADO"
    }
}