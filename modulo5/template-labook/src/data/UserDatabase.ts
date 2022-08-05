import {User} from '../types/User'
import {BaseDatabase} from './BaseDatabase'

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "labook_users"

    async create ({id, name, email, password} :any ): Promise <void>{

        await UserDatabase.connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into(UserDatabase.TABLE_NAME)
    }

    async findAll(): Promise<User[]> {
        const users = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        const result = users.map((user: { id: string; name: string; email: string; password: string; })=> new User(user.id, user.name, user.email, user.password))
        return result
      }



}
