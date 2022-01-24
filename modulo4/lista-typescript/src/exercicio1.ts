/*Crie um função que receba uma string com o nome e outra string com uma data de nascimento
 (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
 
"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" */

function dadosUsuario (nome: string, dataDeNascimento: string) : string{

    const separaData: string[] = dataDeNascimento.split("/")
 
    return  (`Olá, me chamo ${nome}, nasci no dia ${separaData[0]} do mês  ${separaData[1]} do ano  ${separaData[2]}.`)
 }
 console.log(dadosUsuario("Luciana", "10/04/1989"))

 
