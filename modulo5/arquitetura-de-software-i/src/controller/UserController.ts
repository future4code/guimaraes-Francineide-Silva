import {UserDatabase} from '../data/UserDatabase'
import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'

export class UserController {
    createUser(arg0: string, createUser: any) {
       throw new Error("Method not implemented.");
    }

    async createUSer(req: Request, res: Response) : Promise<void> {

        
        try {
            const input = {
                
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            await new UserBusiness().createUser(input);

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}
