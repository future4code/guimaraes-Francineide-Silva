export class CustomError extends Error{

    constructor(
        statusCode: number , message: string
    ){
        super(message)

    }
}

export class invalidName extends CustomError{
    constructor(){
        super(400, "Nome Invalido!")
    }
}

export class invalidEmail extends CustomError{
    constructor(){
        super(400, "Email Invalido!")
    }
}

export class invalidPassword extends CustomError{
    constructor() {
        super(400, "Senha Invalida!")
    }
}

export class invalidUser extends CustomError{

    constructor(){
        super(400, "Usuario não cadastrado")
    }

}

export class invalidPhoto extends CustomError{
    constructor(){
        super(400, "Necessario colocar uma foto no body!")
    }
}

export class invalidDescription extends CustomError{
    constructor(){
        super(400, "Necessario colocar a descrição no body")
    }
}

export class invalidType extends CustomError{
    constructor(){
        super(400, "Por favor informar o tipo no body")
    }
}

export class invalidCreatedAt extends CustomError{
    constructor(){
        super(400, "Por favor Informa a data de criação no body")

    }

}




