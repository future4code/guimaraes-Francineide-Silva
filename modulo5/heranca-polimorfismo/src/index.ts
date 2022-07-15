import {Request, Response} from 'express'
import connection from "./connection"
import app from "./app"
import {User} from  "./classes/User"
import {Customer} from "./classes/Customer"

app.get("/", (req:Request, res:Response) => {

    res.send("Servidor ok")

})

// const Nene = new User("02", "nene@gmail.com", "Nene", "1542" )

// console.log(Nene)

// //1-A - sim -e possivel imprimir a senha 
// //1-B -Sempre que chamamos no console a memsagem aparece antes dos dados 

//2

//  const CustomerNew  = new Customer ("03", "xuxu1@gmail.com", "Xuxu","1478","1234567899")
 
//  console.log(CustomerNew.interoduceYourself())

// 2-A  a mensagem apareceu uma vez no mometo da chamada
// 2-B  Sim, porque estamos estendendo a classe User.


// 3 -A sim, não entendi o porque mesmo sendo privado 


