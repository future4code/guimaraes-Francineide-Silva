import {Request, Response} from 'express'
import {UserBusiness} from '../business/UserBusiness'
import {userInputDIO} from '../model/User'


const userBusiness =new UserBusiness()

export class UserController {

    async create (req: Request, res: Response): Promise <void>{

        try {

           
            
            const {name, email, password} =req.body

            let message = "Usuário cadastrado com sucesso"

            const user : userInputDIO ={

                name,
                email,
                password
            }

            await userBusiness.create(user)

            res.status(201).send({ message})
            
        } catch (error:any) {

            res.status(400).send(error.sqlMessage || error.message)
            
        }
    }

    async getAllUserControlles(req: Request, res: Response): Promise<void> {

        try {

            const users = await userBusiness.getUserBusiness()
            res.status(201).send(users)
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
            
        }

    }

} 