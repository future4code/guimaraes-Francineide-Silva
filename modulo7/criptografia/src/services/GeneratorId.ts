import {v4} from 'uuid'

export class GeneratorId {
    generateId =()=>{
        return v4()
    }
}