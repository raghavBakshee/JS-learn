import mongoose from 'mongoose'

export const dbconnection = async () => {
    try {
        const mongoURI = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.o6wl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/geek`;

        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log("DB Connected"))
            .catch(err => console.log('Mongo DB Connection error ', err));

    }
    catch (err) {
        console.log('Error ', err)
    }
}