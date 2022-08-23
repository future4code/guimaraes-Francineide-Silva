import { BaseDatabase } from './BaseDatabase'
import { CustomError } from '../error/CustomError'
import { user } from '../model/user'


export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = ""
    public insertUser = async (user: user) => {
        try {

            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password

            })
                .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(400, error.message)

        }
    }
}