import express from 'express';//import express
import MAIN from './routes/MainRoutes.js'
import ADMIN from './routes/Admin.js'
import USER from './routes/User.js'
import {xyz} from './middleware/global.js'
const PORT = 7788;// Define port
const app = express();//Create instance of the express
app.use(express.json())
app.use(xyz)
app.use('/', MAIN)
app.use('/admin', ADMIN)
app.use('/user', USER)

app.use((req, res)=>{
    res.send("Uhh, Ohh!! No match route found")
})

app.listen(PORT, (err)=>{
    if(err) throw err;
    else console.log(`Server working on ${PORT}`);
});
