import  express  from "express";
import cors from 'cors';
import { Request, Response } from "express";
import { users, post } from "./data"



const app = express()


app .use(express.json())
app .use(cors())


app.get ("/" , (req:Request, res:Response) =>{
    res.status(200),res.send("Hello from Express")
})




app.get("/users", (req:Request, res:Response)=>{

    try{

        const listaUsers = users
        const userNew = listaUsers.map((usuario)=>{
            return users

        })
        
        res.status(200).send(users)

    }
   catch(error){
       res.status(400).end("Erro na requisição")
   };
   

})

app.get("/users/name", (req:Request, res:Response)=>{

    try{

        const listaUsers = users
        const userNew = listaUsers.map((usuario)=>{
            return usuario.name

        })
        const result = userNew.flat(1)
        
        res.status(200).send(result)

    }
   catch(error){
       res.status(400).end("usuario não encontrado")
   };
   

})


app.get('/post/:id',(req:Request, res:Response)=>{

    if(req.query.id){
        const userPost = post.filter((post)=>{
            return post.id ===Number(req.query.id)
        })
    

        res.status(200).send(post)
    } 
    

})


app. listen(3003, ()=>{
    console.log("servidor ok")
})