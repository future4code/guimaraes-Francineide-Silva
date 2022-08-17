import {BaseDatabase} from './BaseDatabase'
import{user} from '../model/user'
import { CustomError } from '../error/customError'

export class UserDatabase extends BaseDatabase{
    
    private static TABLE_NAME = "Intro_Auth"
    public insertUser =async (user:user)=>{
        try {

            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                nickname:user.nickname,
                email: user.email,
                password: user.password,
            })
            .into(UserDatabase.TABLE_NAME)
            
        } catch (error:any) {
            throw new CustomError(400,error.message)
            
        }

    }

    public getUserByEmail = async (email: string): Promise<user> => {
        try {
          const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .select()
            .where({ email });
    
          return result[0];
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
    }

