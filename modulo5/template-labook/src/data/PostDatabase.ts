import {BaseDatabase} from './BaseDatabase'
import {Post,PostInputDTO,post} from '../model/Post'

export class PostDatabase extends BaseDatabase{

    private static TABLE_NAME = "labook_posts"

    async create (post:post ): Promise <void>{

        await PostDatabase.connection
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at:post.createdAt,
                author_id: post.authorId
            })
            .into(PostDatabase.TABLE_NAME)
    }
}





