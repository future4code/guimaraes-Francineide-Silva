//Exercícios de interpretação de código
//1-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // b false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c false

console.log("d. ", typeof resultado) // d booleanos */ 

// 2-Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
/*let primeiroNumero = prompt("Digite um numero!")  // falta o Number()
let segundoNumero = prompt("Digite outro numero!") // falta o number()

const soma = primeiroNumero + segundoNumero// Aqui esta concatenado e não somando

console.log(soma) // Na tela vai aparecer primeiroNumero segundoNumero */

// 3- Para esta´usando o peradores aritimeticos usar a Number() para realmente fazer a soma

//Exercícios de escrita de código

/*1 a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */ 


/*const idadeUsuario = Number (prompt ( "Qual sua Idade?"))
const idadeDoAmigo = Number( prompt("Qual a Idade do seu Amigo(a)"))
const diferencaDeIdade = idadeUsuario - idadeDoAmigo
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeUsuario > idadeDoAmigo)
console.log("Qual a diferença de idade?", diferencaDeIdade) */

/* 2-a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

/*const numeroPar = Number ( prompt ("Insira uma numeral par:"))
const resultado = numeroPar % 2
console.log("O resto da divisão é:", resultado) // Sempre vai resta zero por ser um numero par
// Quando o usuario colocar o numero impar sempre vai haver o resto 1 */ 

/* 3-Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas */

/*const idadeAnos = Number( prompt("Informe sua idade em anos"))
const idadeMes = idadeAnos / 12
const idadeDias = idadeAnos / 365
const idadeHoras = idadeAnos / 8760
console.log("Idade do usuario em meses:",idadeMes)
console.log("Idade do usuario em dias:", idadeDias)
console.log("Idade do usuario em horas:", idadeHoras) */ 

/*4-Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

/*const primeiroNumero = Number( prompt("Insira um numero:"))
const segundoNumero = Number( prompt("Insira um segundo numero:"))

const resposta1 = primeiroNumero > segundoNumero
const resposta2 = primeiroNumero === segundoNumero
const resposta3 = primeiroNumero / segundoNumero
const resposta4 = resposta3 !== 0
const resposta5 = segundoNumero / primeiroNumero
const resposta6 = resposta5 === 0

console.log("O primeiro numero é maior que o segundo", resposta1)
console.log(" O primeiro é igual ao segundo:", resposta2)
console.log("O primeiro numero é divisivel pelo segundo:", resposta4)
console.log("O segundo numero é divisivel pelo primeiro", resposta6) */






