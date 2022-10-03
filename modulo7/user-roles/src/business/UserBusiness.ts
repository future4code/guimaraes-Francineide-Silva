import { UserDatabase } from "../data/UserDatabase"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/CustomError"
import {UserInputDTO, user, EditUserInputDTO,EditUserInput,LoginUserInputDTO} from "../model/user"
import { HashManager } from "../servicer/HashManager"
import { IdGenerator } from "../servicer/IdGenerator";
import { Authenticator } from "../servicer/Authenticator"
import { AuthenticationData } from "../model/types";

const idGenerator = new IdGenerator()
const tokenGenerator = new Authenticator()
const hashManager = new HashManager()

export class UserBusiness {

  private userDB: UserDatabase
  constructor(){
    this.userDB = new UserDatabase()
  }

  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(400,'Preencha os campos "name","nickname", "email" e "password"')
      }

      if (role !== "NORMAL" && role !== "ADMIN"){
        return "NORMAL"
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id = idGenerator.generateId()

      const hashPassword = await hashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password:hashPassword,
        role 
      }
    
   
      await this.userDB.insertUser(user)
      const token = tokenGenerator.generateToken({id,role})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public login = async (input: LoginUserInputDTO): Promise<string> => {
    try {
      const { email, password } = input
    
      if (!email || !password) {
        throw new CustomError(400,'Preencha os campos"email" e "password"')
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await this.userDB.getUserByEmail(email)

      if (!user) {
        throw new UserNotFound()
      }

      const hashCompare = await hashManager.compareHash(password, user.password)

      if(!hashCompare){ 
        throw new InvalidPassword()
      }

      const payload :AuthenticationData = {
        id: user.id, 
        role: user.role
      }

      const token = tokenGenerator.generateToken(payload)
     
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

//   public editUser = async (input: EditUserInputDTO, token: string) => {
   
//       let { name, nickname, id } = input

//       if (!name || !nickname || !id || !token) {
//         throw new CustomError(400,'Preencha os campos "id", "name", "nickname" e "token"' )
//       }

//       const userExist = await this.userDB.getUserById(id)
//     if(!userExist){
//       throw new UserNotFound()
//     }

//       const tokenData = Authenticator.getTokenData(token) 

//       if(tokenData.role!== 'ADIMN') {
//         throw new Unauthorized()
//       }

//       if (name.length < 4) {
//         throw new InvalidName();
//       }

//       const editedUser: EditUserInput = {
//         id,
//         name,
//         nickname,
//       }

//       await this.userDB.editUser(editedUser)  
// }
}