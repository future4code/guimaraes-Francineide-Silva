export type receita = {
    id: string
    titulo: string
    descricao: string
    data: string
    role: string
    
 }
 
 export interface ReceitaInputDTO {
    id: string,
    titulo: string,
    descricao: string,
    data: string,
    role: string

 }
 
 export interface EditReceitaInputDTO {
    titulo: string,
    descricao: string,
    id: string
 }
 
 export interface EditReceitaInput {
   titulo: string,
    descricao: string,
    id: string
 }