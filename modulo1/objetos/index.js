//Exercicios de Interpretacao de codigo
//Exercicio1,No console vai ser impresso Matheus Nachtergaele
                                        //Virginia Cavendish
                                        //{canal: "Globo",horario:"14h"}
//Exercicio2,a.{nome:"Juca",idade:3,raca"SRD"}
             //{nome:"Juba",idade:3,raca"SRD"}
             //{nome:"Jubo",idade:3,raca"SRD"}
             //b. Espalhamento ou spread significa que se realizou uma copia inteira de um objeto a outro.
             //ou simplemente neste caso acessar a algumas propiedades como nome e idade. 

//Exercicio3 false undefinded,acredito que é porque "altura" nao foi definida, 
//por isso ao dar console.log, imprime undefined.Se mudarmos os dados e adicionarmos 
//altura e o valor ao imprimir vai imprimir altura e o valor asignado.             
 
//Exercicios escrita de codigo
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
//(um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função
// que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo
const pessoa = {
    nome: "Luciana", 
    apelidos: ["Luli", "Luluzinha", "Lu"]
 }
 function exercicio1(objeto) {
return (`Eu sou ${pessoa.nome},
mas pode me chamar de: ${pessoa.apelidos}.`)
 }
console.log(exercicio1(pessoa))
 
 /*const copia = {
 ...pessoa,
 apelidos2: ["lulinha", "Bananinha", "Lucianinha" ]
 
}
return(editaApelidoPessoa(pessoa))/*
}

//Exercicio2
const dadosPessoais1 = {
    nome: "Luciana",
    idade: 32,
    profissao: "Estudante"
}
const dadosPessoais2 = {
    nome: "Bruno",
    idade: 23,
    profissao: "Instrutor"
}

minhafuncao(dadosPessoais1,dadosPessoais2) {
    return dadosPessoais1.nome, nome.lenght, dadosPessoais1.profissao, profissao.lenght
    //return dadosPessoais2.nome, nome.lenght, dadosPessoais1.profissao, profissao.lenght

}
