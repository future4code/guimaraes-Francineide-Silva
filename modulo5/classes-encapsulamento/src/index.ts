import app from "./app";
import express, {Request, Response} from "express";
import { userDataBase } from "./data/userDataBase";
import { UserAccount} from "./data/user";

// // testando a comunicação com o servidor
// app.get("/", (req: Request, res: Response) => {
//     res.send("Servidor Ok")
// })

/////////////////////////////

// 1 -A Um construtor serve para instanciar objetos da classe na qual esse 
//construtor foi definido. A inicialização de objetos por meio de construtores é 
//necessária para evitar erro de referência nula quando usando objetos que foram declarados mas não inicializados

//1-B 

app.get("/user", async (req: Request, res: Response) => {

    try {

        const userDB = new userDataBase()
        const result = await userDB.getAll()

        res.status(200).send(result)
        
        
    } catch (error:any) {

        res.status(400).send(error.sqlMessage || error.message)
        
    }
  
})

app.post('/user', async (req: Request, res: Response) => {
    try {
        const {cpf, name, age} = req.body
        

        const newUser :UserAccount = new UserAccount( cpf,name, age)
        const characterDB = new userDataBase()

        await characterDB.create(newUser)

        res.status(200).send("Usuário Criado!")

    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})