import {v4} from 'uuid'

export class GeneratorId{
    static generateId() {
        throw new Error("Method not implemented.")
    }
    generateId =() =>{
        return v4()
    }
}

