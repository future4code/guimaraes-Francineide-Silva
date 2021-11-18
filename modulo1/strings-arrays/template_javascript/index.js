// 1- exercicio de interpretação

/*{let array
    console.log('a. ', array) // a resposta vai ser: undefined pois não atributos
    
    }
    
    
    {array = null
    console.log('b. ', array)// a resposta é null pois foi atribuindo 
    
    }
    
    { array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length) // ele vai mostra a quantidade de caracteris
    
    
     }
    
     {let i = 0
        console.log('d. ', array[i]) // essa realmete não entendi por que a resposta foi 3
    
    
    
    }
    
    /*{ array[i+1] = 19
        console.log('e. ', array) // resposta vai acresentar mais um numero no indice
    }*/
    
    /*{ const valor = array[i+6]
        console.log('f. ', valor)// resposta acresecenta mais um numero no array
    
    }*/
    
    // 2 exercicio de interpretação
    /*{const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    // a resposta e a frase em maiusculo trocando o A por I e o de caracteres
    
    }*/
    
    // Exercícios de escrita de código
    
    //1-
    /*{ const nomeDoUsuario = prompt("Insira seu nome:")
       const emailDoUsuario = prompt("emailDoUsuario:")
       console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o) , ${nomeDoUsuario}`)
    
    
    }*/
    
    // 2
    
    
   /* { 
    const comidaFavorita = ["Macarrão", "Arroz","Feijão","Milho", "Pizzar"]
    //a
    console.log(comidaFavorita)
    //b
    console.log(`Essas são as minhas comidas preferidas 
    ${comidaFavorita[0]}
    ${comidaFavorita[1]}
    ${comidaFavorita[2]}
    ${comidaFavorita[3]}
    ${comidaFavorita[4]}`)
    
    //c
     const comidaPreferida = prompt(`Qual sua comida preferida?`)
     
     comidaFavorita.splice(1,1,comidaPreferida)
     console.log(comidaFavorita)

     
    }*/

    //3
   /* {
 

     const listaDeTarefas = [];
     const tarefa1 = prompt('Insira uma tarefa1');
     const tarefa2 = prompt('insira uma tarefa2');
     const tarefa3 = prompt('insira uma tarefa3');

     listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
     

     const indice = prompt("digite o índice da tarefa que você já realizou: 0, 1 ou 2");
     const indiceNumero = Number(indice)

     listaDeTarefas.splice(indiceNumero, 1)
     console.log(listaDeTarefas)


      }*/
     
     // Desafios
     
     /*const frase =("Eu amo a Labenu")
     const novaFrase = frase.split(` `)
     console.log(novaFrase)*/

     /*const frutas = ["Banana", "Morango","Abacaxi","Laranja","Ameixa"]
     const indiceDoAbacaxi =frutas.indexOf("Abacaxi")
     console.log(indiceDoAbacaxi)
     const comprimento = frutas.length
     console.log("Comprimento:",comprimento)*/






    