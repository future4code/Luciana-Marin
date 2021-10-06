/Faça um programa que pergunte ao usuário
// seu nome e seu e-mail. Em seguida, 
//Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. 
//Seja bem-vinda(o), `nomeDoUsuario`!

/*const nome = prompt ("qual e o seu nome?")
const email = prompt ("qual e seu email?")
const fraseTemplateString = `O email ${email} foi cadastrado com sucesso Seja bem vinda(o) ${nome} `
console.log(fraseTemplateString)*/

/*const comidasPreferidas = [ "lasanha", "churrasco", "feijao", "risotto", "strogonoff" ]
console.log(comidasPreferidas)
const primeiroItem = comidasPreferidas[0]
const segundoItem = comidasPreferidas[1]
const terceiroItem = comidasPreferidas[2]
const quartoItem = comidasPreferidas[3]
const quintoItem = comidasPreferidas[4]

console.log("Essas são as minhas comidas preferidas:  ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])*/






//Exercicio1//

/*const nome = prompt ("qual e o seu nome?")
const email = prompt ("qual e seu email?")
const fraseTemplateString = `O email ${email} foi cadastrado com sucesso Seja bem vinda(o) ${nome} `
console.log(fraseTemplateString)*/

//Exercicio2//

/*const comidasPreferidas = [ "lasanha", "churrasco", "feijao", "risotto", "strogonoff" ]
console.log(comidasPreferidas)
const primeiroItem = comidasPreferidas[0]
const segundoItem = comidasPreferidas[1]
const terceiroItem = comidasPreferidas[2]
const quartoItem = comidasPreferidas[3]
const quintoItem = comidasPreferidas[4]
const comidaPreferidaDoUsuario = prompt ("qual e sua comida preferida")
const comidasPreferidasDois = [ "lasanha", "comidaPreferidaDoUsuario", "feijao", "risotto", "strogonoff" ]

console.log("Essas são as minhas comidas preferidas:  ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
console.log(comidasPreferidasDois)*/

//Exercicio3//
let listaDeTarefas = []
listaDeTarefas [0] = prompt ("digite uma tarefa:")
listaDeTarefas [1] = prompt ("digite uma segunda tarefa:")
listaDeTarefas [2] = prompt ("digite uma terceira tarefa:")
const novaListaDeTarefas = listaDeTarefas.splice("indice de uma tarefa ja realizada",1)
const indice = prompt ("digite o indice de uma tarefa ja realizada")

console.log(listaDeTarefas)
console.log("indice de uma tarefa ja realizada:",indice)
console.log(novaListaDeTarefas)

/*Exercicios de interpretacao de codigo. 
1. mensagens impresas a.undefined b.null c.11 d.3 e.(11) [3,19,5,6,7,8,9,10,11,12,..]
Exercicio2 
O valor impresso será "SUBI NUM ONIBUS EM MARROCOS"? 30
vai imprimir a frase em maiuscula e o numero 30 que refere a quantidade de items do arrey