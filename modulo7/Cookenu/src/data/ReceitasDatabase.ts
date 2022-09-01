import { BaseDatabase } from './BaseDatabase'
import { CustomError } from '../error/CustomError'
import { receita,ReceitaInputDTO } from '../model/receita'


export class ReceitasDatabase extends BaseDatabase {

    private static TABLE_NAME = "Revenue_Cookenu"
    public insertReceita = async (receita: receita) => {
        try {

            await ReceitasDatabase.connection.insert({
                id: receita.id,
                titulo:receita.titulo,
                descricao: receita.descricao,
                data: receita.data

            })
                .into(ReceitasDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(400, error.message)

        }
    }

    

    public getReceitaById = async (id:string)=>{
        try {
            const result = await ReceitasDatabase.connection(ReceitasDatabase.TABLE_NAME)
            .select()
            .where({id})
            return result[0]
            
        } catch (error: any) {
            throw new CustomError(400, error.message)
            
        }
    }

    public editReceita = async( receita:ReceitaInputDTO) => {
        try {
            await ReceitasDatabase.connection
            .update({tituli: receita.titulo, descricao: receita.descricao})
            .where ({id: receita.id})
            .into(ReceitasDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new CustomError(400, error.message)
            
        }
    }


    public getReceitaAll = async (): Promise<receita[]> =>{
        const receita = await ReceitasDatabase.connection(ReceitasDatabase.TABLE_NAME).select()
        return receita
    }

    

}