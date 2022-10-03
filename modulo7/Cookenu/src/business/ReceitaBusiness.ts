import {ReceitasDatabase} from '../data/ReceitasDatabase'
import { CustomError,InvalidPassword, InvalidEmail,UserNotFound,Unauthorized} from '../error/CustomError'
import {ReceitaInputDTO, receita,EditReceitaInputDTO,EditReceitaInput} from '../model/receita'
import  Authenticator  from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'


export class ReceitaBusiness {
    private receitaDB: ReceitasDatabase
    constructor(){
        this.receitaDB = new ReceitasDatabase()
    }
    public creatReceita = async (input:ReceitaInputDTO) =>{
        let {titulo, descricao, data, role} = input

        if(!titulo || !descricao || !data || !role) {
        throw new CustomError(422, "Falta de Parâmetro")
    }

          if(descricao.length< 4) {
              throw new InvalidPassword ()

    }

        if(role !== "NORMAL" && role !== "ADMIN"){
            return "NORMAL"
        }



    const id = IdGenerator.generateId()
    
    const receita :receita ={
        id,
        titulo,
        descricao,
        data,
        role

    }

    await this.receitaDB.insertReceita(receita)
    const token = Authenticator.generateToken({id,role})
    return token

}

    

    public editReceita =async (input:EditReceitaInputDTO, token: string)=>{
        let {titulo, descricao,id}= input

        if(!titulo|| !descricao|| !id) {
            throw new CustomError(422,"Ausencia de parâmetros")
        }
        const receitaExist =await this.receitaDB.getReceitaById(id)
        if(!receitaExist){
            throw new UserNotFound()
        }

        const tokenData =Authenticator.getTokenData(token)
        if(tokenData.role !== "ADMIN"){
            throw new Unauthorized()
        }

        
    }

 
}