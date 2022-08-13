import {Request, Response} from 'express'
import {PostBusiness} from '../business/PostBusiness'
import {PostInputDTO} from '../model/Post'


const postBusiness = new PostBusiness()

export class PostController {

    async create(req: Request, res: Response): Promise<void> {

        try {
            let message = "Post criado com sucesso!"

            const { photo, description, type,createdAt, authorId } = req.body

            const post: PostInputDTO ={
                photo,
                description,
                type,
                createdAt,
                authorId
            }


            await postBusiness.create(post)



            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
    }

}

