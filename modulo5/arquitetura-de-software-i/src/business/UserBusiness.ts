import  {UserDatabase}  from '../data/UserDatabase'
import {v4 as generateId } from 'uuid'
import {user} from '../types/user'




export class UserBusiness {

    async createUser(user:any): Promise<void> {

        try{

            if(!user.name || !user.email || !user.password ){
                throw new Error("Please fill all the fields");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = generateId();
          
            await new UserDatabase().createUser(id, user.name, user.email, user.password);
         
            
        }catch(error:any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
}
}