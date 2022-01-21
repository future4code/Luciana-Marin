/*O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. 
O que acontece?

b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript
 uma variável que aceite mais de um tipo de valor?

c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string.

Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. 
Utilize um enum para isso.*/

//a)
//const minhaString: string = 32 quando atribuimos o nro da erro. Porque declaramos uma string e atribuimos o valor de numero.

//b)
const meuNumero:number | string = 'numero'

//c)
enum Cores {
    VERMELHA = 'vermelho',
    LARANJA = 'laranja',
    AMARELHA = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    VIOLETA = 'violeta'
}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

const luciana:pessoa = {
    nome: 'Luciana',
    idade: 32,
    corFavorita: Cores.AZUL
}

const renan:pessoa = {
    nome: 'Renan',
    idade: 25,
    corFavorita: Cores.VERDE
}

const juan:pessoa = {
    nome: 'Juan',
    idade: 33,
    corFavorita: Cores.LARANJA
}

console.log(juan)
