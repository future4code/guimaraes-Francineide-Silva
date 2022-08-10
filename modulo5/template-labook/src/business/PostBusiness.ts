import { PostDatabase } from "../data/PostDatabase";
import {post} from '../types/Post'
import {v4 as generateId} from 'uuid'

const postDatabade = new PostDatabase ()

export class PostBusiness {

    async create ({photo, description, type, authorId}:any): Promise <void>{

        if (!photo || !description || !type || !authorId){
            throw new Error("Necessario as informaçoes(photo, description, type, authorId)")
        }

        const postId: string = generateId()

        await postDatabade.create({
            id:postId,
            photo,
            description,
            type,
            author_id: authorId
        })

    }
}

//     async findAll():Promise<post[]> {
//         const result = await postDatabade.findAll()
//         return result

//     }
// 