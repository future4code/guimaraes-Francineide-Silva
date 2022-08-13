import { UserDatabase } from "../data/UserDatabase";
import { User, user, userInputDIO } from '../model/User'
import { invalidName, invalidEmail, invalidPassword, invalidUser } from '../error/CustomError'
import { generateId } from '../servces/generateId'


const userDatabade = new UserDatabase()

export class UserBusiness {

    async create(input: userInputDIO): Promise<void> {

        const { name, email, password } = input

        if (!name) {

            throw new invalidName()
        }

        if (!email) {

            throw new invalidEmail()
        }

        if (!password) {

            throw new invalidPassword()
        }

        const id = generateId()

        const user: user = {
            id,
            name,
            email,
            password,

        }

        await userDatabade.create(user)

    }

    async getUserBusiness (): Promise<User[]> {
        
        const users  = await userDatabade.getUserAll()

        if(users.length< 1){
            throw new invalidUser()
        }

        return users

    }
}