import {Request, Response} from 'express'
import {UserBusiness} from '../business/UserBusiness'


const userBusiness =new UserBusiness()

export class UserController {

    async create (req: Request, res: Response): Promise <void>{
        try {

            const {name, email, password} =req.body

            await userBusiness.create({name, email, password})

            res.status(201).send({ message: "Ùsuarioa criado com Sucesso"})
            
        } catch (error:any) {

            res.status(400).send(error.sqlMessage || error.message)
            
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {

        try {

            const CadastroUsuario = await userBusiness.findAll()
            res.status(201).send({CadastroUsuario})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
            
        }

    }

}