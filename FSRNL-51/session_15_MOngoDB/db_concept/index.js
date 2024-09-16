import express from 'express';
import mongoose from 'mongoose';
import AuthRoute from "./routes/AuthRoutes.js"
import ProductRoute from "./routes/ProductRoutes.js"
import { dbconnection } from './dbconnection.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
// Call routes
app.use("/api/v1/auth", AuthRoute)
app.use("/api/v1/product", ProductRoute)

dbconnection();


// const mongoURI = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.o6wl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// mongoose.connect(mongoURI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=> console.log("DB Connected"))
// .catch(err => console.log('Mongo DB Connection error ', err));

// not found route
app.use((req, res)=>{
    res.status(400).send("No ROute found");
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

