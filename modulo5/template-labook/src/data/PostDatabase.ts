import {post} from '../types/Post'
import {BaseDatabase} from './BaseDatabase'

export class PostDatabase extends BaseDatabase{

    private static TABLE_NAME = "labook_posts"

    async create ({photo, description, type, authorId} :any ): Promise <void>{

        await PostDatabase.connection
            .insert({
                id:
                photo,
                description,
                type,
                author_id: authorId
            })
            .into(PostDatabase.TABLE_NAME)
    }
}

    // async findAll(): Promise<post[]> {
    //     const postNew = await PostDatabase.connection(PostDatabase.TABLE_NAME)
    //     const result = postNew.map((post: { id: string; photo: string; description: string; type: string; authorId:string})=> new post(post.id, post.photo, post.description, post.type, post.authorId))
    //     return result
    //   }





