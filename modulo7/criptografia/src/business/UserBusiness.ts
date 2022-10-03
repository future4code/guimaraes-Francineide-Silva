import {UserDatabase} from '../data/UserDatabase'
import {CustomError,InvalidEmail,InvalidName,InvalidPassword,Unauthorized, UserNotFound, InvalidNickname,UserAlreadyExist } from '../error/CustomError'
import{UserInputDTO,user,EditUserInputDTO, EditUserInput,LoginInputDTO} from '../model/user'
import { Authenticator } from '../services/Authenticator'
import { GeneratorId } from '../services/GeneratorId'
import {HashManager} from '../services/HashManager'

const idGenerator = new GeneratorId()
const authenticator = new Authenticator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager()

export class UserBusiness {
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if(name === name){
        throw new UserAlreadyExist()
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      const id: string = idGenerator.generateId();
      const hashPassword = await hashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password:hashPassword
      }
    
      await userDatabase.insertUser(user);
      const token = authenticator.generateToken({ id });
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input:LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
  
      const user = await userDatabase.getUserByEmail(email);

      if (!user) {
        throw new UserNotFound();
      }

      const hashCompare = await hashManager.compareHash(password, user.password)

      if (!hashCompare) {
        throw new InvalidPassword();
      }

      const id = user.id
      const token = authenticator.generateToken({ id});
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname,  email, token } = input;

      if (!name || !nickname || !email  ) {
        throw new CustomError(400,'Preencha os campos , "name" e "nickname", "e-mail ')
      }
      const {id} = authenticator.getTokenData(token)

      if(id){
        throw new Unauthorized()
      }
      
      if (name.length < 4) {
        throw new InvalidName();
      }

      if(nickname.length<2){
        throw new InvalidNickname()
      }
      if(!email){
        throw new InvalidEmail()
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
        email,
      }

      
      await userDatabase.editUser(editUserInput)
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }
  async getUserBusiness (): Promise<user[]> {
    const users = await userDatabase.getUserAll()

    if(users.length < 1) {
      throw new UserNotFound();
    }

    return users;

  }


}
