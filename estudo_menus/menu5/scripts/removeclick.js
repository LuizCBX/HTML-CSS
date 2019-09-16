/**
 * Função jQuery para remover a ação do click
 * @author Luiz
 * 04/09/2019
 */
 //caso utilize somente a biblioteca jQuery, simplificar o código (+ desempenho)
 $(document).ready(function(){
	// .click(function(){}); -> quando clicar no objeto "<a>"
	$(".Detalhes").click(function(){
		return false;//sem ação
	});
 });
