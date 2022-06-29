import {Request, Response} from "express"
import connection from "./connection"


export const getUserName = async(req: Request,res: Response): Promise<void> =>{

    const name = req.params.name as string

    try {

        const listName =await connection.raw(`SELECT *FROM aula48_exercicio WHERE id = '%${name}%'`)

        res.status(200).send(listName)
        
    } catch (error:any) {
        
        res.send(error.message || error.sqlMessage)
        
    }


}