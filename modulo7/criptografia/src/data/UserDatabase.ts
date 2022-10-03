import { CustomError } from '../error/CustomError'
import { EditUserInput, user } from '../model/user'
import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "User_Crip"
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname, email: user.email })
        .where({ id: user.id })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
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
  }

  async getUserAll ():Promise <user[]> {
    const user = await UserDatabase.connection(UserDatabase.TABLE_NAME).select()

    return user
  }
}
