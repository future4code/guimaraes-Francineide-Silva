// Exercícios de interpretação de código
//1
/*let valor = 0
for(let i = 0; i < 5; i++) {
    // 0 - 0+ 0= 0
    // 1 / 1+ 0 = 1
    // 2 / 2 +1 = 3
    // 3 / 3 + 3= 6
    // 4  / 6 + 4 = 10
  valor += i
}
console.log(valor) // O Valor impresso vai ser 10 porque é maior que a condição "5"
*/

//2

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} // vai ser impresso uma a lista com os numeros maior que 18[ 19,2,23,25,27,30]
*/

//3

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} // O numero informado vai ser a quantidade de asteriscos impresso junt com o numeor de linhas
*/


//Exercícios de escrita de código

/*let numeroBicho = Number(prompt( `Quantos Bichinhos voce tem?`))
let arrayNome = []

if(numeroBicho === 0){
  console.log( `Você pode adotar um pet`)

}else if(numeroBicho> 0){
  for( let i =0 ; i< numeroBicho; i++){
    arrayNome.push(prompt(`Qual o nome do seu pet?`))

  }
    console.log(`Os nomes são:`, arrayNome)
}
*/

//2
//let arrayOriginal=[10,25,32,440,58,667,70]

//a

/*function imprimirlista(arrayOriginal){
  return arrayOriginal
}

console.log (imprimirlista(arrayOriginal))
*/

//b
/*
for (let num of arrayOriginal){
  num = num/10
  console.log(num)

}

*/




