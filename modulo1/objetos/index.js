//Exercícios de interpretação de código
//1
//a
// console.log( "Matheus Nachtergaele")
//console.log ("Virginia Cavendish")
// console.log("Globo" "14h")

//2
//a
//console.log("Juba")
// console.log("Juca")
// consloe.log("Juco")

//b
// Fez uma troca dos nomes de cada animal.

//3
//a 
//console.log("false") // ele entede que falso porque vem informando no codigo
// console.log("undefined") // não existe essa informação no objeto


//Exercícios de escrita de código
//Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

/*const pessoa = {

    nome: "Francineide",
    apelidos:["Fran","Neide", "Neidinha"]
   
   
}

 function pessoa1() {

    const informacao=(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    return informacao
    
}

console.log(pessoa1())

const pessoaNova ={
    ...pessoa,
    apelidos : ["Flor", "Docinho","Lua"]
}

  function pessoa2() {

    const informacao2 =(`Eu sou ${pessoaNova.nome}, mas pode me chamar de: ${pessoaNova.apelidos[0]} , ${pessoaNova.apelidos[1]} ou ${pessoaNova.apelidos[2]}`)
    return informacao2
    
}

console.log(pessoa2())*/




//2
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão

/*const pessoa1 ={

    nome:"Marta",
    idade: 35,
    profissao: "Professora"

}

const pessoa2 ={

    nome:"Juliana",
    idade: 25,
    profissao: "Fisioterapeuta"
}

//b Escreva uma função que receba esses objetos e retorne um array com as seguintes informações

function imprimaPessoa () {

    const novaPessoa ={
        ...pessoa1

    }
    const novaPessoa2 = {
        ...pessoa2
    }
    
    const fraseNomes = 
    `1-O valor do ${novaPessoa.nome}, ${novaPessoa2.nome}
    2-O numero de caracteres do valor: ${novaPessoa.nome.length}, ${novaPessoa2.nome.length} 
    3-O valor de : ${novaPessoa.idade}, ${novaPessoa2.idade} 
    4-O valor de : ${novaPessoa.profissao}, ${novaPessoa2.profissao} 
    5-O numero de caracteres do valor: ${novaPessoa.profissao.length}, ${novaPessoa2.profissao.length}`

    return fraseNomes
    

}

console.log(imprimaPessoa())*/



//3
// Crie uma variável de escopo global que guarde um array vazio chamada
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

/*
        const carrinho =[]


    function sacolaFrutas() {
        const fruta = {
            fruta1: 'banana', disponivel1: true,
            fruta2: 'Uva', disponivel2: true,
            fruta3: 'Laranja', disponivel3: false 

        }

    carrinho.push(`Tem a fruta: ${fruta.fruta1}, está no carrinho? ${fruta.disponivel1}`)
    carrinho.push(`Tem a fruta: ${fruta.fruta2}, está no carrinho? ${fruta.disponivel2}`)
    carrinho.push(`Tem a fruta: ${fruta.fruta3}, está no carrinho? ${fruta.disponivel3}`)

    return carrinho


}

    console.log(sacolaFrutas())*/

    // Desafio

    //1
   /*function dadosUsuari() {
        const nomeUsuario = prompt("Insira seu nome:")
        let idadeUsuario = Number(prompt("Insira sua idade:"))
        let profissaoUsuario = prompt("insira sua profissão:")

        const usuario = (`Nome: ${nomeUsuario }, profissão: ${profissaoUsuario}, idade:${idadeUsuario}`)
        return usuario

    }


    console.log(dadosUsuari())*/



 //2-


/*function filmes() {
    const filme1 ={
        nome: "carros",
        anoDeLançamento: 2006
    }
    const filme2 ={ 
        nome:"As Branquelas",
        anoDeLançamento: 2004

    }

    const filmeAno = `O primeiro filme, ${filme1.nome}, foi lançadoantes do segundo filme ${filme2.nome}? false`
    const filmeAno = `O O primeiro filme, ${filme1.nome}, foi lançado no mesmo ano do  segundo filme ${filme2.nome}? false`

    return filmeAno
}



console.log( filmes())*/



