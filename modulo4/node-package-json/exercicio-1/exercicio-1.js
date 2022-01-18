/*a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

```jsx
"Olá, (Nome)! Você tem (sua idade) anos."
```

c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

```jsx
"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
```*/

 /*a)para accessar os  parâmetros passados na linha de comando, devemos usar o array process.argv[] por exemplo na aula o Professor 
 no código deu um console.log(process.argv[3]) como ele no temrinal anteriormente tinha rodado o comando node src/index Clara Bruno Cesar, 
ao colocar no console o process.arg[3], esta pedindo pra mostrar o que tem no indice 3   no 0 está o node, no 1 src/index, no 2 Clara e no 3 Bruno. 
Acho que sería esa a resposta*/   

//b)  

const nome = process.argv[2]  
const idade = process.argv[3]  

let frase = `Olá, ${nome}! Você tem ${idade} anos.`  

console.log(frase)   

frase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7} anos.` 

console.log(frase)