import { PostDatabase } from "../data/PostDatabase";
import {post, PostInputDTO} from '../model/Post'
import {generateId} from '../servces/generateId'
import { invalidPhoto , invalidDescription, invalidCreatedAt, invalidType,} from "../error/CustomError";



const postDatabade = new PostDatabase ()

export class PostBusiness {



    async create (input:PostInputDTO): Promise <void>{

        const{photo, description, type, authorId} = input

        if (!photo ){

            throw new invalidPhoto()

        }

        if (!description ){

            throw new invalidDescription()
            
        }
        if (!type ){

            throw new invalidType()
            
        }
        

        const id = generateId()
        const createdAt = new Date()

        const post: post ={

            id,
            photo,
            description,
            type,
            createdAt,
            authorId


        }

        await postDatabade.create(post)

    }
}



