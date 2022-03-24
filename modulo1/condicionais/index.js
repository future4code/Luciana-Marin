/*Exercicios de interpretacao de codigo
Exercicio1 a. Se o numero e divisivel por dois passa ou no passa no teste.
b. imprime o console para os numeros divisiveis por dois ou seja para que o numero seja divisilvel o resto
deve ser zero. 
c. para os numeros que nao sao divisiveis por dois ou seja que o resto e diferente de zero.
Exercicio2 a. o codigo serve para saber o preco das frutas 
b. teoricamente deveria ser 2,25 reais. Mas como no default o preco e iguañ a 5 sempre vai imprimir o preco de 5 reais para qualquer fruta digitada.
c. Seria a mesma mensagem tirando o break, o preco da fruta pera e R$5.

Exercicio3 
a. declara uma variavel do tipo const e pede ao usuario que digite um numero
b. a mensagem sera " ese numero passou no teste" se for menos 10 nao sei o que vai fazer
c. Pois e havera erro ja que o console.log(mensagem) esta fora do escopo, e nao tem aceso a ele. se colocarmos o console log dentro do 
escopo vai imprimir a mensagem secreta tambem.

Exercicios de escrita de codigo.*/
//Exercicio1
/*const idade = Number(prompt("Digite sua idade"))
if(idade >= 18){
  console.log("voce pode dirigir")
}else{
  console.log("voce nao pode dirigir")
}*/

//Exercicio2
/*const turno = prompt ("digite a primeira letra do turno que voce estuda").toUpperCase()
if(turno === "M"){
  console.log("Bom Dia!")
}else if(turno === "V"){
  console.log("Boa tarde!")
}else if(turno === "N"){
console.log("Boa noite!")
}else{
  console.log("insira uma letra valida")
}*/
//Exercicio3
 /*const turno = prompt ("digite a primeira letra do turno que estuda").toUpperCase()
switch(turno){
 case "M": 
 console.log("Bom Dia!")
 break;
 case "V":
   console.log("Boa tarde!")
   break;
   case "N":
     console.log("Boa noite!")
     break;
    default:
        console.log("insira uma letra valida")

}*/

//Exercicio4//
const genero = "fantasia"
const valor = Number(prompt ("digite o valor do ingreso"))

if (genero === "fantasia"){
}if (valor < 15){
console.log("Bom Filme!")
}else{
console.log("Escolha outro filme :(")
}

