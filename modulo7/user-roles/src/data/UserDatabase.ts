import { BaseDatabase } from "./BaseDatabase";
import {user, EditUserInput} from "../model/user"
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase{
  static getUserById(id: string) {
    throw new Error("Method not implemented.");
  }
    private static TABLE_NAME = "Intro_Auth"
    public insertUser =async (user:user)=>{
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                nickname:user.nickname,
                email: user.email,
                password: user.password,
                role: user.role,
            })
            .into(UserDatabase.TABLE_NAME)
            
        } catch (error:any) {
            throw new CustomError(400, error.message)
            
        }
    }
    public editUser = async (user: EditUserInput) => {
        try {
          await UserDatabase.connection
            .update({ name: user.name, nickname: user.nickname })
            .where({ id: user.id })
            .into(UserDatabase.TABLE_NAME);
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      }
    
      public getUserByEmail = async (email: string) => {
        try {
          const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .select()
            .where({email})
          return result[0]
        } catch (error: any) {
          throw new CustomError(400, error.message)
        }
      }
      
      public getUserById = async (id: string) => {
        try {
          const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .select()
            .where({id})
          return result[0]
        } catch (error: any) {
          throw new CustomError(400, error.message)
        }
      }
    
}
