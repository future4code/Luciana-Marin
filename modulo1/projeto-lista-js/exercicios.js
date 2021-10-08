// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}
console.log (soma(5, 7))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
imprimeMensagem ()

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura1 = 3
  const largura1 = 5
  const multiplicacao1 = altura1 * largura1
  console.log(multiplicacao1)
  const altura2 = 2
  const largura2 = 6
  const multiplicacao2 = altura2 * largura2
  console.log(multiplicacao2)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
//Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt ("digite o ano atual")
const anoDeNascimento = prompt ("digite seu ano de nascimento")
const idade = anoAtual - anoDeNascimento
console.log(idade)
}
imprimeIdade ()
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const pesoKilos = prompt ("digite seu peso")
  const alturaMetros = prompt ("digite sua altura")
  const resultado = pesoKilos / (alturaMetros * alturaMetros)
  
  return (resultado)

  }
  calculaIMC ()
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  //Escreva uma função que pede ao usuário seu nome, sua idade e seu email 
  //(nessa ordem), e imprime no console uma mensagem como a seguinte:
nome = prompt ("digite seu nome")
idade = prompt ("digite sua idade")
email = prompt ("digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)

}
imprimeInformacoesUsuario ()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
//Escreva uma função que pergunta ao usuário suas três cores favoritas
// e imprime no console um array que contenha essas três cores.
const coresFavoritas = []
coresFavoritas [0] = prompt ("digite sua cor favorita")
coresFavoritas [1] = prompt ("digite sua segunda cor favorita")
coresFavoritas [2] = prompt ("digite sua terceira cor favorita")
console.log(coresFavoritas)
}
imprimeTresCoresFavoritas ()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  //Escreva uma função que recebe uma string e retorna ela em letra maiúscula.
const frase = prompt ("digite uma frase")
return frase.toUpperCase()
}
retornaStringEmMaiuscula ()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const costos = prompt ("digite los costos del espectaculo")
const valorEntrada = prompt ("digite el valor de la entrada")
const resultado = costos / valorEntrada 
return resultado 
}
calculaIngressosEspetaculo ()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  //Escreva uma função que recebe duas strings e 
  //e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
const frase1 = prompt ("digite uma frase")
const frase2 = prompt ("digite uma segunda frase")
let comparacao = frase1.lenght === frase2.lenght
return comparacao
}
checaStringsMesmoTamanho ()
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}