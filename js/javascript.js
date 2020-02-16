

function salvar(pergunta){
 var resultadoCampo = document.getElementById('ram');
 
 var respostaA = document.getElementById(pergunta+'a');
 var respostaB = document.getElementById(pergunta+'b');
 var respostaC = document.getElementById(pergunta+'c');
 var respostaD = document.getElementById(pergunta+'d');
 
 var resultadoPergunta = '';//valor inicial
 //verifica a pergunta
 if(respostaA.checked){
	resultadoPergunta = pergunta+'a';//adiciona um valor a resposta.. ex: 1a ou 1b ou 1c ou 1d
 }
  if(respostaB.checked){
	resultadoPergunta = pergunta+'b';//adiciona um valor a resposta.. ex: 4a ou 4b ou 4c ou 4d
	
 }
  if(respostaC.checked){
	resultadoPergunta = pergunta+'c';//adiciona um valor a resposta.. ex: 4a ou 4b ou 4c ou 4d
 }
  if(respostaD.checked){
	resultadoPergunta = pergunta+'d';//adiciona um valor a resposta.. ex: 4a ou 4b ou 4c ou 4d
 }

 resultadoCampo.value += resultadoPergunta+',';//salva o resultado separando elas por virgulas para depois comparar com array 

 
 if('pergunta'+pergunta == 'pergunta8'){//pergunta5 ultima pergunta a ser feita antes de exibir o resultado final
	var perguntaN = document.getElementById('pergunta'+pergunta);
	perguntaN.style.display = 'none';

	var resultadoFinal = document.getElementById('resultadoFinal');
	resultadoFinal.style.display = 'block';
	resposta(); //funcao para chamar o resultado final
 }else{
	var perguntaN = document.getElementById('pergunta'+pergunta);
	perguntaN.style.display = 'none';
	pergunta++;

	var perguntaN = document.getElementById('pergunta'+pergunta);
	perguntaN.style.display = 'block';
 }
 
  
}
 
 //converte uma variavel string em um array( como por exemplo as respostas emetidas pelo usuario do jogo, em um array)
function resposta(){
  var respostaCoretta = '1c,2a,3c,4b,5c,6d,7c,8b';// lista com todas as perguntas corretas
  var listaCerta = respostaCoretta.split(',');
  var i = 0;

  var resultadoCampo = document.getElementById('ram').value;//aqui guarda o valor das respostas em um input type text
  var listaResultado = resultadoCampo.split(',');
  var resultadoFinalCorreto = 0;

  
  
  for (var a = 0; a < listaResultado.length; a++) {//pecorre o array e compara as respostas do usuario com as do supremo criador vulgo(eu)
	  for (var i = 0; i < listaCerta.length; i++) {
		if(listaResultado[a] == listaCerta[i]){//aqui compara com o sinal de == se as respostas estão corretas
		resultadoFinalCorreto++;//aqui adiciona um valor que chega ao fim quando o laço for maior que o numero de per/respostas
		}
	  }
  }
document.getElementById('resultadoAcertos').innerHTML = resultadoFinalCorreto+" certas";;
  
//document.getElementById('resultadoErros').innerHTML = 5 - resultadoFinalCorreto;// quando adicionar perguntas deve colocar o numero total de perguntas aqui.. tipo.. se adicionar 10 perguntas altere o valor para 10 e coloque as respostas certas no array
}
 
 
 