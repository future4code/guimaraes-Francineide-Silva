export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 

 export class Post  {
    static map: any

    constructor (

    private id: string,
    private photo: string,
    private description: string,
    private type: POST_TYPES,
    private createdAt: Date,
    private authorId: string

    ) { }


    getId(){
        return this.id
    }

    getPhoto(){
        return this.photo
    }

    getDescription(){
        return this.description
    }

    getType(){
        return this.type
    }

    getCreatedAd(){
        return this.createdAt
    }

    getAuthorId(){
        return this.authorId
    }

    setId(newId:string){
        this.id =newId
    }

    setPhoto(newPhoto:string){
        this.photo = newPhoto
    }

    setDescription(newDescription:string){
        this.description = newDescription
    }

    setType(newType:POST_TYPES){
        this.type = newType
    }

    setCreatedAd(newCreatedAd:Date){
        this.createdAt = newCreatedAd
    }

    setAuthorId(newAuthorId:string){
        this.authorId = newAuthorId  
    }
 }

export interface PostInputDTO {


    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string

}

export type post = {
    
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}
