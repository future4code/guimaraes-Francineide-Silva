import {app} from "./app"
import {userRouter} from './route/userRouter'




app.get("/", async function(){
   console.log("endpoint teste")
})


app.use('/user/',userRouter)