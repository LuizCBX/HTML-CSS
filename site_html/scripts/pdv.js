/**
 *  Ponto de Venda
 *  @author Luiz 
 */
    //variaveis global
    let comDesconto

    function calcularDesconto(){
        let valor, desconto, sobraPorcentagem

        valor = parseFloat(frmPdv.txtValor.value.replace(",","."))
        desconto = parseFloat(frmPdv.txtDesconto.value.replace(",","."))

        sobraPorcentagem = (valor * desconto) / 100
        comDesconto = (valor - sobraPorcentagem)
        //Outra maneira mais pratica "comDesconto = valor - ((valor * desconto) / 100)"

        frmPdv.txtComDesconto.value = comDesconto.toFixed(2)
    }
    function calcularTroco(){
        let valorPago, troco

        valorPago = parseFloat(frmPdv.txtValorPago.value.replace(",","."))
        troco = valorPago - comDesconto

        frmPdv.txtTroco.value = troco.toFixed(2)

    }
