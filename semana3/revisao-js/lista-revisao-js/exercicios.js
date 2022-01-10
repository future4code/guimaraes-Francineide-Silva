// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    console.log(retornaArrayInvertido)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
    return array.sort(function compararNumeros(a, b) {
        return a - b
      })
 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares = []

    for (i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            arrayPares.push(array[i])
        }
    }

    return arrayPares
    
    
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
        let  arrayPares  =  [ ] 
        for  ( const  e  of  array )  {
            if  ( e  %  2  ===  0 )
            arrayPares . push ( e * e )
    
        } 
        return arrayPares
    

}

  
    


// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return Math . max ( ... array ) 
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = undefined
    let menorNumero = undefined
    let maiorDivisivelPorMenor = undefined
    let diferenca = undefined
 
    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true
    } else {
        maiorDivisivelPorMenor = false
    }

    diferenca = maiorNumero - menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let array =[]
    for (let i=0; array.length < n; i++){
        if (i%2===0){
            array.push(i)
        }
    }
    return array
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if  ( ladoA  ===  ladoB  &&  ladoB  ===  ladoC  )  {
        return  'Equilátero'
    }  else  if  ( ladoA  ===  ladoB  ||  ladoB  ===  ladoC  ||  ladoA  ===  ladoC ) {
        return 'Isósceles'
    }  else  {
        return  'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let  novoArray  =  array . sort ( function compararNumeros ( a ,  b )  {
       return  a  -  b ;
      } ) 

    return  [ novoArray [ novoArray . length  -  2 ] ,  novoArray [ 1 ] ] ;
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    const objetoFilme = {  
    nome: 'O Diabo Veste Prada',
    ano: '2006',
    diretor: 'David Frankel',
    atores: ['Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci']}

    const frase = `Venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, dirigido por ${objetoFilme.diretor} e estrelado por ${objetoFilme.atores}.`
    return frase
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    /*const pessoa={ 
        nome: "Atrodev",
        idade: 25,
        email:"astrodev@labenu.com.br",
        endereco: "Rua do Futuro,4"
    }*/

    const novaPessoa={
        ...pessoa,
        nome: "ANÔNIMO"
    }
   
    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let autorizado = pessoas.filter ( (pessoas) => {
        return (pessoas.idade> 14 && pessoas.idade < 60 && pessoas.altura> 1.5)

    })
    return autorizado
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let naoAutorizado = pessoas.filter((pessoa) => {
        return ! (pessoa.idade> 14 && pessoa.idade < 60 && pessoa.altura> 1.5)

    })
 
    return naoAutorizado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    contas [ 0 ] . saldoTotal  =  500
    contas [ 1 ] . saldoTotal  =  6260
    contas [ 2 ] . saldoTotal  =  - 3340
    contas [ 3 ] . saldoTotal  =  - 1900
    contas [ 4 ] . saldoTotal  =  1300
    contas [ 5 ] . saldoTotal  =  1400

    contas [ 0 ] . compras  =  [ ]
    contas [ 1 ] . compras  =  [ ]
    contas [ 2 ] . compras  =  [ ]
    contas [ 3 ] . compras  =  [ ]
    contas [ 4 ] . compras  =  [ ]
    contas [ 5 ] . compras  =  [ ]

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas . sort ( ( a ,  b )  =>  ( a . nome  >  b . nome ? 1 : - 1 ) )
    return consultas
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

  
 consultas . sort ( ( a ,  b )  =>  ( a . dataDaConsulta  -  b . dataDaConsulta? -1 :  1 ) )

  console.log(consultas)
  return consultas.sort()
   



}
