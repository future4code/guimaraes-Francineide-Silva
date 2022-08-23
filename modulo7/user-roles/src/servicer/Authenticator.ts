import { AuthenticationData } from "../model/types";
import * as jwt from 'jsonwebtoken'

export class Authenticatior{

    generateToken = (payload :AuthenticationData): string =>{
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {expiresIn:process.env.JWT_EXPIRES_IN}
        )
        return token
    }

    getTokenData = (token:string): AuthenticationData =>{
        const result = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as AuthenticationData
        return result
    }
}