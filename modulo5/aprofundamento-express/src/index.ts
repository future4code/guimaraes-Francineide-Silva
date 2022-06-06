import express,{Request, Response} from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import {v4 as generateId} from 'uuid'
import { to_do } from './data'





const app = express ();
app.use(express.json());
app.use(cors())


app.get('/ping', (req:Request, res:Response) =>{
    res.send('Pong!')
})


app.get("/todo", (req:Request , res:Response)=>{

    const getUser= to_do.filter((to_do)=>{
        if(to_do.completed === false)
        return to_do
    })

        res.status(200).send(getUser)

})

app.post("/todo" ,(req:Request, res:Response)=>{
    const{userId, id, title,completed } =req.body 
    

    to_do.push({

        userId: Math.random(),
        id:  Math.random(),
        title:"",
        completed: false




 } )
      res.status(201).send(to_do)
})

app.delete("/todo/:id" ,(req:Request, res:Response)=>{
    const id = Number(req.params.id)

    to_do.forEach((u, i)=>{
        if(u.id ===id){
            to_do.splice( i, 1)
        }
    })
        res.status(200).send(to_do)
})

app.get("/todo/all", (req:Request , res:Response)=>{

    const getAll= to_do.map(u =>u)
        
        res.status(200).send(getAll)

})

const server = app.listen(process.env.PORT || 3003, ()=>{

    if(server){
        const address =server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);

    }else{
        console.error(`Failure upon starting server.`);
    }
})