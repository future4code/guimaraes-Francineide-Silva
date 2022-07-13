import knex from "knex";
import dotenv from "dotenv";
import {UserAccount} from "./user";

dotenv.config();

export class userDataBase{

private connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   },
});


public getAll =async () =>{

    try {

        const result = await this.connection('UserAccount')
        .select ('*')
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message); 
    }
}

public create = async (user :UserAccount) => {
    try {
        await this.connection('UserAccount')
        .insert({
            cpf: UserAccount.getCpf(), 
            name: UserAccount.getName(), 
            age: UserAccount.getAge()
        })
        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message); 
    }
}

}