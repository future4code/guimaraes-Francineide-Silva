import express, {Request, Response} from 'express'
import { AddressInfo} from 'net'
import cors from 'cors'
import {v4 as generateId} from 'uuid'
import { users, User, USER_TYPE } from './data'




const app = express()

app.use(express.json())
app.use(cors())


app.get('/users', (req: Request, res:Response) =>{

       
    const getAll = users.map (u => u)

    res.status(200).send(getAll)
    
})

// 1- a- metodo GET para buscar a lista de usuarios
// 1- B - A entidade é chamada por "/users"


app.get('/type/:type' , (req:Request, res:Response) =>{

    let errorCode = 500
    try {

        const type = req.params.type as string

        if(!type) {
            errorCode = 422
            throw new Error("Falta parametros para busca");

            
        }

        const userAd = users.filter((userAd)=>{

            if(type.toUpperCase() === USER_TYPE.ADMIN){
                return userAd
            }
            
        })

            res.status(200).send(userAd)

    } catch (error: any) {
        res.status(errorCode).send(users)
        
    }

})


const server = app.listen(process.env.PORT || 3003, () =>{

    if(server) {
        const address = server.address() as AddressInfo
        console.log (` Server is running in http://localhost: ${address.port}`)

    }else{
        console.error(`Failure upon starting server`)
    }
})