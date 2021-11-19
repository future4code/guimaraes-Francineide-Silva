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
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  const stringNova1 = string1.length
  const stringNova2 = string2.length
  return stringNova1 === stringNova2


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const utimoArray = array[array.length-1]
  return utimoArray

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  arrayGuardarIndice0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = arrayGuardarIndice0

  return array



}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let stringIguadade = string1.toUpperCase() === string2.toUpperCase();
  return stringIguadade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Qual o seu ano de nascimento"))
  const emissaoCarteira = Number(prompt("Qual o ano da emissão da carteira?"))

  //primeiro caso 20 anos e carteira maior que 5 anos

  let idade = anoAtual - anoNascimento 
  let dataCarteira = anoAtual - emissaoCarteira
  

  if(idade <= 20 && dataCarteira >=5 ){
    console.log(true)
  }else if (idade > 50 && dataCarteira >= 15){
      console.log(true)
  }else if(idade >20 && idade < 50 && dataCarteira >=10){
    console.log(true)
  }
  else{
    console.log(false)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if(ano % 4 === 0 && ano % 100 !==0){
    return true
  }else if(ano % 4 !== 0 && ano % 400 === 0){
    return true
  }else if(ano % 4 === 0 && ano % 400 === 0){
    return true
  }else{
    return false
  }
 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let idade =prompt("Você tem mais de 18 anos?")

    if (idade === "sim"){
      idade = true
    }else{
      idade=false
    }

  let ensino = prompt("Você possui ensino médio completo?")
    if(ensino === "sim"){
      ensino = true
    }else{
      ensino = false
    }

  let periodo = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
   
  if(periodo === "sim"){
      periodo = true
    }else{
      periodo = false
    }
    

 if (idade && ensino && periodo === true){
   console.log(true)
 }else{
   console.log(false)
 }

}