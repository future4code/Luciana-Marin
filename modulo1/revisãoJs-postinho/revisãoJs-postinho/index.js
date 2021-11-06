
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
<<<<<<< revisao-js-postinho

    return `No comparador de igualdade ${a}===${b} é ${a === b}`

}
console.log(checarIgualdade(1, 2));


// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {

    return `No comparador de maior que  ${a} > ${b} é ${a > b}`

}
=======
}

// c-)Faça uma função chamada "verificaSeEMaior"
>>>>>>> master

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
<<<<<<< revisao-js-postinho
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= false
=======
// a-) 1==='1'=
// b-) 1=='1'=
// c-) 'a'==='b'=
// d-) 'b'>'a'=
// e-) 0!==null=
>>>>>>> master


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
<<<<<<< revisao-js-postinho
    const usuarios = []
    const nome = prompt("digite seu nome")

    const anoDeNascimento = Number(prompt("digite seu ano de nascimento"))
    const idade = 2021 - anoDeNascimento
    const nacionalidade = prompt("digite sua nacionalidade").toLowerCase()

    const senha = prompt("digite uma senha, ela deve ter mais de seis digitos")

    if (idade >= 18 && senha.length >= 6 && nacionalidade === "brasileira") {
        console.log(`Usuario ${nome} cadastrado com sucesso!`)
        usuarios.push({ nome, anoDeNascimento, nacionalidade, senha })
        console.log(usuarios)

    }

    else {
        alert("nao foi possivel realizar o cadastro do usuario")

    }
}


=======
    const usuario = []

    //  Sua lógica aqui

}
>>>>>>> master
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
<<<<<<< revisao-js-postinho
    //  Sua lógica aqui
    const senhaValida = "labenu"
    const senhaUsuario = prompt("Digite uma senha").toLowerCase()
    if (senhaValida === senhaUsuario) {
        console.log("Usuario logado")
    }
    else {
        console.log("Senha inválida")
    }
}
git
=======
    const login = "labenu"
    //  Sua lógica aqui

}

>>>>>>> master
console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
<<<<<<< revisao-js-postinho
    let tempo
    data = new Date()
    const nome = prompt("digite seu nome")
    const vacina = prompt("digite o nome da vacina que tomou")

    if (vacina.toLowerCase() === "coronavac") {
        tempo = 28
    } else if (vacina.toLowerCase() === "astrazenica") {
        tempo = 90
    } else if (vacina.toLowerCase() === "pfizer") {
        tempo = 90
    }

    const milissegundos1dia = 86400000
    const hoje = data.getTime()

    const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))

    const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")

    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`
=======

    //  Sua lógica aqui


>>>>>>> master
}
console.log(primeiraDose())


<<<<<<< revisao-js-postinho



=======
>>>>>>> master
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
<<<<<<< revisao-js-postinho
    const procurarPessoa = usuarios.filter((pessoa) => {
        if (pessoa.nome === nomeDoUsuario) {
            pessoa.imunizacao = "completa"
            return pessoa
        }
    })
    console.log(procurarPessoa)
}
const nomePessoa = "Barbara"
segundaDose(nomePessoa)
console.log(segundaDose("Barbara"));


=======

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

>>>>>>> master
// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

<<<<<<< revisao-js-postinho
    const oiSumide = usuarios.filter((pessoa) => {
        if (pessoa.imunizacao === "incompleta") {
            return true
        }
    })
    const enviarMensagem = oiSumide.map((pessoa) => {
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    })
=======
    //  Sua lógica aqui

>>>>>>> master
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

<<<<<<< revisao-js-postinho
const cadastroDesafio = () => {

    const usuarios = [
        {
            nome: prompt ("Digite seu nome"),
            idade: Number(prompt ("digite sua idade")),
            nacionalidade: prompt ("digite sua nacionalidade").toLowerCase(),
            senha: prompt ("digite sua senha ela deve conter no minimo seis digitos"),
        
        }
      ]
      const array = [usuarios]
    if(array[0].usuarios.idade >= 18 && array[0].usuarios.senha.length >= 6 && array[0].usuarios.nacionalidade === "brasileira"){
          console.log(`Usuario ${array[0].usuarios.nome} cadastrado com sucesso!`)
        
              }
              
              else {
          alert("nao foi possivel realizar o cadastro do usuario")
        
        }
         }
    console.log(cadastroDesafio());
    cadastroDesafio()































=======
>>>>>>> master
const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

<<<<<<< revisao-js-postinho



const primeiraDoseDesafio = () => {
    //  Sua lógica aqui
=======
const primeiraDoseDesafio = () => {
//  Sua lógica aqui
>>>>>>> master
}
console.log(primeiraDoseDesafio())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());