//Exercicio 1//

/*const idade= prompt ("qual e a sua idade?")
const idadeAmigo= prompt ("qual e a idade do seu melhor amigo?")

const diferencaDeIdade = idade - idadeAmigo

console.log("qual e a sua idade", idade)
console.log("qual e a idade do seu melhor amigo", idadeAmigo)
console.log("Sua idade e maior que a do seu melhor amigo?", idade > 32)
console.log("diferenca de idade", diferencaDeIdade)*/

//Exercicio 2//
/*const numeroPar= prompt ("insira um numero par:")
console.log (Number(numeroPar)/2)
const modDenumeroParpor2 = numeroPar % 2
console.log(modDenumeroParpor2)*/

//Exercicio 3//
/*const idadeEmAnos= prompt ("qual e a sua idade em anos?")
const idadeEmMeses = idadeEmAnos*12
const idadeEmDias = idadeEmAnos*365
const idadeEmHoras =idadeEmAnos*8760
console.log("qual e a sua  em anos", idadeEmAnos)
console.log("idade em meses",idadeEmMeses)
console.log("idade em dias",idadeEmDias)
console.log("idade em horas",idadeEmHoras)*/

//Exercicio 4//
//Nesse exercicio nao consegui a parte da divisibilidade, eu entendi que para que um numero seja divisivel entre o outro//
//o resto da divisao deve ser zero, so que na hora de colocar no codigo nao soube como fazer//

const primeiroNumero = prompt("digite um numero:")
const segundoNumero = prompt("digite outro numero:")
const numeroDivisivel = primeiroNumero % segundoNumero === 0
console.log(primeiroNumero)
console.log(segundoNumero)

console.log("O primeiro numero é maior que o segundo?",Number(primeiroNumero)>Number(segundoNumero))
console.log("O primeiro numero é igual que o segundo?",Number(primeiroNumero)===Number(segundoNumero))
console.log("O primeiro numero é maior que segundo?",Number(primeiroNumero)>Number(segundoNumero))
console.log("O primeiro numero é divisivel pelo segundo?",Number(primeiroNumero)/Number(segundoNumero))
console.log("O segundo numero é divisivel pelo primeiro ?",Number(segundoNumero)/Number(primeiroNumero))

//Exercicios de interpretacao de codigo//
//Exercicio1 mensagens impresas:a-false//
                  // b-false//
                  //c-true//
                  //d-boolean//
 //Exercicio2 O problema e que ao imprimir nao realiza a soma, concatena os dois numeros,sem somar//
 //porque adicionou duas strings eo JS une as duas.//
 //Exercicio3 na verdade eu joguei o codigo no codesandbox mas nao consegui "desconcatenar" os numero. tive muita dificuldade//
 //entao optei por deixar assim, mas queria entender melhor o asunto//
                  