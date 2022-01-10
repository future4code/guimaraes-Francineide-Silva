//Exercícios de interpretação de código

//1 a- o codigo testa se o numero é dividido por 2 se for ele entra
// no if e informa que "PASSOU NO TESTE", se nap vai para else.

//b- numero pares que são vidisiveis por "2"
//c- numero impares que na divisão o resto vai ser diferente de "0"


//2- a- informar o valor da fruta 
//b- o valor da maça R$ 2,25
//c- o valor seria R$ 5,00

//3-a- A primeira linha é a informação que o usuario vai colocar no 
// prompt ou se um numero
//b- quando for 10- "ESSE NÚMERO PASSOU NO TESTE" 
// e quando for -10 , vai apresentar um erro
// c- o codigo só tem um if paa compra numeros menor que "0" teria que ter
// um else não apenas essa mensagem.


// Exercícios de escrita de código
//1

/*let idadeUsuario = Number(prompt("Qual sua idade?"))


    if(idadeUsuario >= 18){

        console.log("Você pode dirigir")

    }else {
        console.log("Você não pode dirigir")
    }

*/

//2

/*const turnoDeEstudo = prompt( "Digite seu turno de estudo M-Matutino, V-vespertino, N-Noturno").toLocaleUpperCase()


    if(turnoDeEstudo === "M"){
        console.log(" Bom dia")

    }else if(turnoDeEstudo === "V"){
        console.log("Boa tarde")

    }else if(turnoDeEstudo==="N"){
        console.log ("Boa noite")
    }else {
        console.log("Informção Invalida")
    }

*/

//3

/*const turnoDeEstudo = prompt( "Digite seu turno de estudo M-Matutino, V-vespertino, N-Noturno").toLocaleUpperCase()

switch(turnoDeEstudo){
    case `M`:
        console.log("Bom dia!")
        break
    case `V`:
        console.log("Boa tarde!")
        break
    case `N`:
        console.log("Boa noite!")  
        break
    default:
        console.log( " Informação invalida ")
        break      
}

*/

//4

/*const generoFilme = prompt( "Qual o genero de filme preferido?").toLowerCase()
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if( generoFilme==="fantasia" && valorIngresso<= 15){
    console.log("Bom filme")

}else{
    console.log( "Escolha outro filme :(")

}
*/

// DASAFIO
//1

/*const generoFilme = prompt( "Qual o genero de filme preferido?").toLowerCase()
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))
let lancheCinema = prompt ("Vai compra algum lanche?").toLowerCase()

function irAoCinema(generoFilme,valorIngresso,lancheCinema){

if( generoFilme==="fantasia" && valorIngresso<= 15){
    console.log("Bom filme!")
    console.log(`Aproveite o seu `+lancheCinema)


}else{
    console.log( "Escolha outro filme :(")

}

}

irAoCinema(generoFilme,valorIngresso,lancheCinema)




//2

*/

/*let nomeCompleto = prompt ("Insira seu nome completo:").toUpperCase()
let tipoDeJogo = prompt(" Escolha o tipo de Jogo : IN-INTERNACIONLA OU DO-domestico").toUpperCase()
let etapaDoJogo = prompt("Informe a etapa do jogo, SF- (Semi-final), DT-(Decisão do terceiro lugar), FI- (final) ").toUpperCase()
let categoria = Number(prompt("Escolha a opção: 1, 2, 3 ou 4"))
let quantidadeDeIngresso = Number(prompt( "Informe a quantidade:"))

console.log(`Nome: ${nomeCompleto}`)

function irAoJogo( tipoDeJogo, etapaDoJogo,categoria,quantidadeDeIngresso){

    switch (tipoDeJogo){
        case `IN`:
            console.log("IN-Internacional")
            break
        case `DO`:
            console.log ("DO-Domestico")
            break
        default:
            console.log( "informação Invalida")
            break        
    }

    switch(etapaDoJogo) {
        case `SF`:
            console.log("SF-Semi Final")
            break
        case `DT`:
            console.log( "DT- Decisão do terceiro lugar")
            break
        case `FI`:
            console.log("Final")
            break
        default:
            console.log("Informação Invalida")
            break            
    }
    switch (categoria){
        case Number(1):
            console.log("Categoria: 1")
            break
        case Number( 2):
            console.log("Categoria: 2")
            break
        case Number(3):
            console.log("Categoria: 3")
            break
        case Number(4):
            console.log("Categoria: 4")
            break
        default:
            console.log("Informção Invalida")
            break               
    }
         
}*/