import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express ()
app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
    
    try {
        //validar as entradas da req
        //consultar ou alterar a base de dados
        const {name, CPF, dateOfBirthAsString} = req.body

        const [day, month,year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []

        })
        
        //validar os resultados da consulta
        //enviar a resposta
        res.status(201).send("Conta criada com sucesso")

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
app.get("/users/all", (req:Request, res:Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)

    }
})
app.listen(3003, ()=> {
    console.log("servidor rodando na porta 3003")
})