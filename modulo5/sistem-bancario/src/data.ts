export type transactions ={
    valeu: number,
    date: string,
    describe: string
}

export type userClient ={
    name: string
    cpf: number,
    birth_of_date: string,
    balance:number,
    extract: transactions[]
}

export type account={
    clinet: userClient[],
    
}
