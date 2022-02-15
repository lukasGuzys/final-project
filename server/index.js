import express from "express";
import mongoose  from "mongoose";

const app = express();
//test
import ClientModel from "./models/Client.js";

app.use(express.json());


// test
mongoose.connect("mongodb+srv://admin:admin@final-project.dylys.mongodb.net/client?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.get("/", async (req, res) => {
    const client = new ClientModel({clientName: "Steve", clientSurname:"Rogers", clientEmail:"tony@avengers.com", clientAge: 40 });
    
    try {
        await client.save();
        res.send("client added")
    } catch(err) {
        console.log(err)
    }
});

app.listen(8080, () => {
    console.log("The server is running on port 8080")
});
