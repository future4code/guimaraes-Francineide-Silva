import  express,{Request, Response}  from "express";
import { AddressInfo } from "net";
import cors from 'cors'
import { products } from "./data";


const app = express()
app.use(express.json())
app.use(cors())

app.get('/test' ,(req:Request, res:Response) =>{
    res.send('API ok!')

})

app.get('/products', (req:Request, res: Response) =>{

    const getProducts = products.map((products) =>{
        
        return products
    })

   res.status(200).send(getProducts)
})

app.post('/products', (req:Request, res:Response) =>{

    const { name, price} = req.body

    products.push({

        id: Math.random() ,
        name:name,
        price: price

    });

        res.status(201).send(products)
})

//app.post('/products/price',(req:Request, res:Response) =>{"" };

app.delete('/products/:id',(req:Request, res:Response) =>{

    const id = Number(req.params.id)
    products.forEach((u, i) =>{
        if(u.id === id){
            products.splice(i, 1)
        }
    })

    res.status(200).send(products)
})


   


const server = app.listen(process.env.PORT || 3003, () =>{

    if(server){
        const adress = server.address() as AddressInfo;
        console.log(`Serve is running in http://localhost:${adress.port}`);


    }else{
        console.error(`failure upon starting server`)
    }

})