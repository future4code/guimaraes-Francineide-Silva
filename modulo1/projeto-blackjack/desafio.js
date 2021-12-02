/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
  /*const cartaUsuario = comprarCarta()
  const cartaComputador = comprarCartas()

  if(cartaUsuario === "A" || cartaComputador === "A"){
     console.log( `Se `)

  }
*/

window.alert(`Bem vindos ao jogo de Blackjack!`)
  
   if(confirm("Quer participar do jogo")){
      true 
      console.log("começar a jogor!")

   }else {
      false
      console.log("Jogo finalizado")
   }

      
         
   
     let cartaUsuario = comprarCarta()
     let cartaUsuario1 = comprarCarta() 
     cont = 3
     cont1 = 3
     teste = 0
     // TEM QUE APAGAR 
     //cartaUsuario.valor= Number(11)
     //cartaUsuario1.valor= Number(11)
     //cartaUsuario.texto = 'AS1'
     //cartaUsuario1.texto = 'AS2'
     console.log(`Carta 01 Usuario ${ cartaUsuario.texto}`)
     console.log(`Carta 02 Usuario ${ cartaUsuario1.texto}`)
     

     while (cartaUsuario.valor === 11 && cartaUsuario1.valor === 11){

      //console.log(`Entramos no IF: DEU TUDO CERTO`)
      let cartaUsuario = comprarCarta()
      let cartaUsuario1 = comprarCarta() 
      console.log(`Carta 01 Usuario ${ cartaUsuario.texto}`)
      console.log(`Carta 02 Usuario ${ cartaUsuario1.texto}`)
 
      }


   cartaUsuario.valor = cartaUsuario.valor + cartaUsuario1.valor

     console.log(`Pontuação do Usuario: ${cartaUsuario.valor}`)

     let cartaComputador =  comprarCarta()
     let cartaComputador1 =  comprarCarta() 

     console.log(`Carta 1 Computador: ${cartaComputador.texto}`)
     let cartaComputadorFim = comprarCarta()
     cartaComputadorFim.valor = cartaComputador.valor + cartaComputador1.valor

while (teste === 0){
  
   if(confirm(`Quer comprar uma carta?`)){
      true 
      let cartaUsuario1 = comprarCarta()

      cartaUsuario.valor = cartaUsuario.valor + cartaUsuario1.valor
      console.log(`Carta ${cont} Usuario ${ cartaUsuario1.texto}`)
      
      cont++
      teste = 0
   }else {
      false
      teste = 10
     // console.log(`Teste é ${teste}`)
   }
   
   
   /*let cartaUsuario1 = comprarCarta()

   cartaUsuario.valor = cartaUsuario.valor + cartaUsuario1.valor
   console.log(`Carta ${cont} Usuario ${ cartaUsuario1.texto}`)
   
   cont = cont + 1
   */
}

console.log(`Sua pontuação é: ${cartaUsuario.valor}`)
 /*if(confirm("Deseja comprar mais um carta")){
   true 
   let cartaUsuario1 = comprarCarta()
   cartaUsuario.valor = cartaUsuario.valor + cartaUsuario1.valor
   console.log(`Carta 03 Usuario ${ cartaUsuario1.texto}`)
   console.log(`Sua pontuação é: ${cartaUsuario.valor}`)

}else {
   false
   console.log(`Sua pontuação é: ${cartaUsuario.valor}`)
}*/
   console.log(`Carta 2 computador: ${cartaComputador1.texto}`)

     while (cartaComputadorFim.valor < cartaUsuario.valor && cartaUsuario.valor <= 21) {
      let cartaComputador =  comprarCarta()
      cartaComputadorFim.valor = cartaComputadorFim.valor + cartaComputador.valor
      
      console.log(`Carta ${cont1} Computador ${ cartaComputador.texto}`)
      
      cont1++
     } 
      


  console.log(`Pontuação do Computador: ${cartaComputadorFim.valor}`)

  
  

  if (cartaUsuario.valor === cartaComputadorFim.valor){
     console.log(`Empate!`)


  }else if((cartaComputadorFim.valor > cartaUsuario.valor && cartaComputadorFim.valor <= 21)||(cartaComputadorFim.valor <= 21 && cartaUsuario.valor > 21)){
     console.log(`Computador Ganhou`)

  }else if (( cartaUsuario.valor > cartaComputadorFim.valor && cartaUsuario.valor <=21 )||(cartaUsuario.valor <= 21 && cartaComputadorFim.valor > 21)){
     console.log( `Usuario Ganhou!`)

  }else{
     console.log(`Banca Vence`)
  }