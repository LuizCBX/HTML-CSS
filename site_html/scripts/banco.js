/**
 * Banco Cédulas
 * @author Luiz
 * 
 */

function sacarDinheiro() {

    let n, valor, n100 = 0, n50 = 0, n20 = 0, n10 = 0, n5 = 0, n2 = 0, n1 = 1, cont = 0

    n = parseInt(frmBanco.txtValor.value)
    

    valor = n

    n100 = n / 100
    n %= 100
    cont++

    n50 = n / 50
    n %= 50
    cont++

    n20 = n / 20
    n %= 20
    cont++

    n10 = n / 10
    n %= 10
    cont++

    n5 = n / 5
    n %= 5
    cont++

    n2 = n / 2
    n %= 2
    cont++

    n1 = n
    cont++

    document.write("<h1>"+"Valor Solicitado: R$ "+ valor +"</h1>"+n100 + " nota(s) de R$ 100,00<br>"+
    n50 + " nota(s) de R$ 50,00<br>"+
    n20 + " nota(s) de R$ 20,00<br>"+
    n10 + " nota(s) de R$ 10,00<br>"+
    n5 + " nota(s) de R$ 5,00<br>"+
    n2 + " nota(s) de R$ 2,00<br>")
    
}
