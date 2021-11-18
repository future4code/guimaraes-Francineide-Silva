// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Insira a altura do triangulo:"))
let largura = Number(prompt("Insira a base do triangulo:"))
//let respostaArea = altura * largura
console.log ( altura * largura)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Insira o ano atual:"))
  let anoDeNascimeto = Number(prompt("Insira o ano do seu nascimento:"))
 // let idade = anoAtual - anoDeNascimeto
  console.log(anoAtual-anoDeNascimeto)



}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return(peso/(altura*altura))


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome completo?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu E-mail?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Qual sua primeiro cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?")
  const cor3 = prompt("Qual sua terceira cor favorita?")

  const cores = [cor1, cor2, cor3]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

 string:"oi"

return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  //let custoShow = Number(prompt("Qual o valor do Espetaculo?"))
  //let valorIndividual = Number(prompt("Qual o valor do ingresso?"))

  //let quadidadeDePessoas = [custoShow / valorIndividual]

  return custo/valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  //const string1 = prompt("Insira uma primeira palavra:")
  //const string2 = prompt("insira a segunda palavra:")
 // const stringNova = string1 === string2
  
  //console.log("As plavras tem a mesma quantidade de letras:",contagem01)

  //string1
  //string2
  //const novaString = [string1 === string2]
  //console.log(novaString) 

  return string1===string2
  return string1!==string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  



}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}