import {Request, Response} from "express"
import connection from "./connection"
import app from "./app"

app.get("/ping", (req:Request, res:Response)=>{
    res.send("Pong! 🏓")
})

app.get("/user/:id", async (req:Request, res:Response)=>{

    try {
        
    } catch (error:any) {
        
    }
})

app.get("/task/:id", async ( req:Request, res:Response)=>{

    

    try {
        
    } catch (error:any) {
        
    }
})

app.post("/useres", async (req:Request, res:Response)=>{

    const {name, nickname, email} = req.body
  
    try {

        if (!name || !nickname ||!email){
            throw new Error("Obrigatorio informar Name, Nickname e Email")
        }
        if(typeof name !== "string") {
            throw new Error("O campo name tem que ser uma string");
            
        }
        if(typeof nickname !== "string") {
            throw new Error(" O campo nickname tem que ser uma string")
        }

        if(typeof email !== "string"){
            throw new Error(" O campo email tem que ser uma string")
        }

        await connection.raw(`

        INSERT INTO Useres (name, nickname, email)
        VALUES(
            "${name}", 
            "${nickname}",
            "${email}"
        );
        
        `);
            res.send("Usuario Cadatrado com sucesso")
        
    } catch (error:any) {
        
        return res.status(500).send(error.message || error.sqlMessage)
    }
   

});

app.post("/task", async(req:Request, res:Response)=>{

    try {
        
    } catch (error:any) {
        
    }
})


app.put("/user/:id", async (req:Request, res:Response)=>{

    try {
        
    } catch (error:any) {
        
    }
})



