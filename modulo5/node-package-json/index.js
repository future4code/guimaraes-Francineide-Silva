//// exercicio 01
//Letra a- Primeira Etapa: dentro do arquivo index.js
// crie uma const argumeto =  process.argv[2]
//depois chama um console.log com o argumento criando antes.
//Segunda Etapa: no terminal execute o comando node index.js e os parametros desejados

//Letra B-

//const name =process.argv[2]
//const idade = Number (process.argv[3])


//console.log(`Olá , ${name}! Você tem ${idade} anos`)


//Letra c

//const novaidade = idade + 7

//console.log (`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)


// Exercico 2

//const operacao = process.argv[2]
//const num1 = Number(process.argv[3])
//const num2 = Number(process.argv[4])




//switch(operacao){
//	case "add":
//		console.log(`Add é igual: ${num1+num2}`)
//		break;
//	case "subt":
//		console.log(`subt é igual: ${num1-num2}`)
//		break;
//    case "mult":
//        console.log(`mult é igual: ${num1*num2}`)   
//        break;
//    case "div":
//        console.log(`div é igual: ${num1/num2}`)   
//        break ;
//    default:
//        console.log (`por favor acrescente dois numeros `)
           
//}


// Exercicio 3

const tarefa = process.argv[2].toLowerCase()

//const lista = novaTarefa.push(tarefa)

console.log(`Tarefa adicionada com sucesso! ${tarefa}`)

