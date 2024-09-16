import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
const mongo_uri =
    `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.o6wl1.mongodb.net`;
const port = 3000;
const app = express();

const conenctDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${mongo_uri}/${DB_NAME}`);
        console.log("DB Connected "+ connectionInstance);
        app.listen(port,()=>{
            console.log("App  Running on port ", port);
        })
    }
    catch (err) {
        console.log("Error ", err);
        throw err;
    }
}
conenctDB();

/*
;(async () => {

    try {
        await mongoose.connect(`${mongo_uri}/${DB_NAME}`);
        app.on("error", (err)=>{
            console.log("Error ", err);
            throw err;
        })
        app.listen(port,()=>{
            console.log("App  Running on port ", port);
        })
    }
    catch (err) {
        console.log("Error ", err);
        throw err;
    }
})()
*/