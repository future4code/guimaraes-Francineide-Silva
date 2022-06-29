import {Request, Response} from 'express'
import connection from "./connection"
import app from "./app"
import{getAllUsers} from "./getAllUsers"
import {getUserName} from "./getUserName"



app.get('/test' ,(req:Request, res:Response) =>{
    res.send('API ok!')

})

// app.get("/user/name", async (req: Request, res: Response) =>{

//     let statusCode

//     try {
//         let name = req.query.name as string

//         const result = await connection("aula48_exercicio")
//         .where("name", "like", `%${name}%`)
          
            
              
        

        
//     } catch (error: any) {
//         res.status(statusCode || 400).send(error.message)
        
//     }
// })


app.get("/user", getAllUsers)

app.get("/user",getUserName)