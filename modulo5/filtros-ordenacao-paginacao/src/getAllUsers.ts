
import{Request, Response} from "express"
import connection from "./connection"
//import {recipe} from "./types"



export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{

    let statusCode
   
    try {

        
        const users = await selectAllUsers()
       
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No found")
       }
        async function selectAllUsers():Promise<any> {
        const result = await connection.raw(`
           SELECT id, name, email, type
           FROM aula48_exercicio;
        `)
        
     
        return result[0]
     }

       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }

    // const toRecipe = (input: any): recipe => {
    //     return {
    //       id: input.id,
    //       name: input.name,
    //       email: input.email,
    //       type: input.type,
         
    //     };
    }
