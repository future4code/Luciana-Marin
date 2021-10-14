//Exercicios de interpretacao
/* Exercicios1 
O resultado impresso no console e 10, o codigo para valores de i menores que 5 vai adicionando o
 mesmo numero e somando o anterior se o valor for 2 por exemplo soma 1 que  e o anterior dando um total de 3, ahi
 o seguinte e 3 somando o valor anterior daria 6 e o ultimo valor e 4 mais o 6, da o resultado de 10 que e o que 
 o console imprimiu. 


Exercicio2
a. no console vai ser impreso todos os numeros maiores de 18. 
*/

//Exercicios de escrita de codigo//
let quantidaDeBichinhosDeEstimacao = Number(prompt("quantos bichinhos de estimacao voce tem?"))
const bichinhosDeEstimacao = []
if(quantidaDeBichinhosDeEstimacao > 0){
  for (let i = 0; i < quantidaDeBichinhosDeEstimacao; i++){
    let nomeDosBichinhosDeEstimacao = prompt("Digite o nome de um do seus bichinhos")
  bichinhosDeEstimacao.push(nomeDosBichinhosDeEstimacao);
  console.log(bichinhosDeEstimacao);
  }
}else {
  console.log("Que pena! Voce pode adotar um pet!")
}

//Exercicio2//
const arrayOriginal = [10, 04, 89, 32, 22]
function imprimeValores(arrayOriginal)
let i = 0
while(i<5){
  console.log(arrayOriginal[i])
  i++
}
imprimeValores(arrayOriginal)


