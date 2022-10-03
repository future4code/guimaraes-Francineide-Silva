import { Request, Response } from "express";
import {ReceitaBusiness} from"../business/ReceitaBusiness";
import {ReceitaInputDTO, EditReceitaInputDTO} from "../model/receita"


export class ReceitaController{
    private receitaBusiness: ReceitaBusiness
    constructor(){
        this.receitaBusiness = new ReceitaBusiness()
    }

    public signup =async (req: Request, res: Response)=>{
        try {
            const input: ReceitaInputDTO ={
                id: req.body.id,
                titulo:req.body.titulo,
                descricao: req.body.decricao,
                data: req.body.data,
                role: req.body.role,
            }

            const token =await this.receitaBusiness.creatReceita(input)
            res.status(201).send({ message:"Receita criada com sucesso!", token})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
            
        }
    }

    
    public editReceita =async (req: Request, res: Response) =>{
        try {
            const token =req.headers.authorization as string
            const input:EditReceitaInputDTO = {
                titulo: req.body.titulo,
               descricao: req.body.descricao,
                id: req.body.id,
            }

            await this.receitaBusiness.editReceita(input, token)
            res.status(200).send({ message: "Receita alterada com sucesso"})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
            
        }
    }
}