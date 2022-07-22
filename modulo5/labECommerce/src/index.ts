import{Request, Response} from 'express'
import connection from "./connection";
import app from "./app"


app.get("/test" , (req:Request , res:Response)=>{
    res.send("Servidor Ok")
})