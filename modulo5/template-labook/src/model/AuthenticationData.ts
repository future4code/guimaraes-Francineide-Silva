export class AuthenticationData {

    constructor (

    private id: string
    ){ }

    getId(){
        return this.id
    }
    setId(newId:string){
        this.id = newId
    }
    
 }

 export interface AuthenticationDataInputDTO{
    id: string
 }

 export type authenticationData = {

    id: string,
 }