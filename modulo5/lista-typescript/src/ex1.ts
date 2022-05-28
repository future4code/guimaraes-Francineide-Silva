// EXERCICIO 

//1-



function dataNivi  (name:string, data:string){

   
   
   const novaDataNac = data.split("/")

    
   console.log(`Olá me chamo ${name}, nasci no dia ${novaDataNac[0]} do mês de ${novaDataNac[1]} do ano de ${novaDataNac[2]}`)
    

}

dataNivi("pedro","05/02/1998")

