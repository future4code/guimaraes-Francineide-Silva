//Exercícios de interpretação de código

//1
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) // sera impresso 
  //item:{nome: "Amanda Rangel", apelido: "Mandi"}, index: 0 , array: 3
  //item: { nome: "Laís Petra", apelido: "Laura" }, index: 1, array: 3
  // item: { nome: "Letícia Chijo", apelido: "Chijo" }, index: 2, array :3
*/

//2
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
  // Vai ser impresso só os nomes ["Amanda Rangel", "Lais Petra", " Leticiao Chijo"]
  */
 //3
 /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  // Vai ser impresso [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" } ]
*/

//Exercícios de escrita de código
//1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a
 /*const nomePet = pets.map((item,index,Array) => {
     return item.nome
 })
    console.log(nomePet)

*/
//b
  /* const petsRaca = pets.filter ((pets)=> {
        return pets.raca === "Salsicha";
    });
    const nomePetsNovos = petsRaca.map((pets) =>{
        return pets.nome;
    })
    
    console.log(nomePetsNovos)

*/

//c
/*const petsClientes = pets.filter((pets)=>{
    return pets.raca.toLowerCase() === "poodle"

})
const promocaoCliente = petsClientes.map((pets) => {

    return `Voce ganhou um cupom de desconto de 10% para tosa do seu pet ${pets.nome}`

})

console.log( promocaoCliente)

*/
//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 }, 
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a
 /*
 const produtosNome = produtos.map((produtos)=>{

    return produtos.nome
 })

 console.log(produtosNome)
 */

//b
/* const produstosDesconto = produtos.map((produtos)=>{

      let desconto = produtos.preco *0.05
      let desconto2 =(produtos.preco -desconto)


      return `nome:${produtos.nome} , preço ${desconto2} `

 })

 console.log(produstosDesconto)

 */

 //c

 /*const produtosBebidas = produtos.filter((produtos)=> {

    return produtos.categoria.toLowerCase() === "bebidas"

 })

 const produtoBebidasNovo = produtosBebidas.map((produtos)=> {

    return produtos.nome
 })

 console.log( produtosBebidas)
*/

//d

/*const produtosYpe = produtos.filter((produtos)=> {
    return produtos.nome .includes("Ypê")


})

    console.log (produtosYpe)

*/

// e 

/*const produtosYpe = produtos.filter((produtos)=> {
    return produtos.nome .includes("Ypê")


})

    console.log (produtosYpe)

    const produtosYpeNovo = produtosYpe.map((produtosYpe)=>{
        return`Compre ${produtosYpe.nome} por Preço R$ ${produtosYpe.preco}`

    })

    console.log(produtosYpeNovo)
*/

//DESAFIO

/*const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //A
 
 const pokemonsNome = pokemons.map((pokemons)=> {
     return pokemons.nome
 })

 console.log(pokemonsNome)

 const pokemosOrdenados = pokemonsNome.sort()

 console.log(pokemosOrdenados)
 */