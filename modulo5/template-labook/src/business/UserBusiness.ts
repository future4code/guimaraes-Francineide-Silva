import { UserDatabase } from "../data/UserDatabase";
import {User} from '../types/User'
import {v4 as generateId} from 'uuid'

const userDatabade = new UserDatabase ()

export class UserBusiness {

    async create ({name,email,password}:any): Promise <void>{

        if (!name || !email || !password){
            throw new Error("Necessario as informaçoes(Nome, E-mail e Senha)")
        }

        const id = generateId()

        await userDatabade.create({
            id,
            name,
            email,
            password,
        })

    }

    async findAll():Promise<User[]> {
        const result = await userDatabade.findAll()
        return result

    }
}