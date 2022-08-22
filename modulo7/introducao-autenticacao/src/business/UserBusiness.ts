import { UserDatabase } from '../data/UserDatabase'
import {CustomError,InvalidEmail, InvalidName,InvalidPassword,UserNotFound} from '../error/customError'
import {UserInputDTO,user,} from '../model/user'
import { Authenticatior } from '../services/authenticatior'
import { generateId } from '../services/generateId'

const idGenerator = new generateId();
const authenticator = new Authenticatior();

export class UserBusiness {
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input

      if (!name || !nickname || !email || !password) {
        throw new CustomError( 400,'Por favor preencha os campos "name","nickname", "email" e "password"');
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      }
      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const token = authenticator.generateToken({ id })
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public login = async (input: any): Promise<string> => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new CustomError(400, 'Por favor preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }
      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserByEmail(email)

      if (!user) {
        throw new UserNotFound()
      }

      if (user.password !== password) {
        throw new InvalidPassword()
      }

      const id = user.id
      const token = authenticator.generateToken({ id})
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
}
}