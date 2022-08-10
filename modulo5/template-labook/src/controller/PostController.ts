import {Request, Response} from 'express'
import {PostBusiness} from '../business/PostBusiness'


const postBusiness = new PostBusiness()

export class PostController {

    async create(req: Request, res: Response): Promise<void> {

        try {
            let message = "Success!"

            const { photo, description, type, authorId } = req.body



            await postBusiness.create({ photo, description, type, authorId })



            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
    }

    // async findAll(req: Request, res: Response): Promise<void> {

    //     try {

    //         const newPost = await postBusiness.findAll()
    //         res.status(201).send({newPost})
            
    //     } catch (error:any) {
    //         res.status(400).send(error.sqlMessage || error.message)
            
    //     }

    // }

}

