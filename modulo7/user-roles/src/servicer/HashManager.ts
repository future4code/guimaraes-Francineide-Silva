import * as  bcrypt from 'bcryptjs'

export class HashManager {
    static compareHash(password: string, password: any) {
        throw new Error("Method not implemented.")
    }

    generateHash = async (pass:string): Promise <string> =>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.gensalt(rounds)
        const result =await bcrypt.hash(pass, salt)
        return result

    }

    compareHash =async (pass: string, hash: string): Promise<boolean> =>{
        return bcrypt.compare(pass, hash)
    }
    static generateHash: any
}
