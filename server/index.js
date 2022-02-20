import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
//test
import ClientModel from "./models/Client.js";

app.use(express.json());
app.use(cors());


// test
mongoose.connect("mongodb+srv://admin:admin@final-project.dylys.mongodb.net/client?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.post("/add", async (req, res) => {

    const clientName = req.body.clientName
    const clientSurname = req.body.clientSurname
    const clientEmail = req.body.clientEmail
    const clientAge = req.body.clientAge

    const client = new ClientModel({
        clientName: clientName,
        clientSurname: clientSurname,
        clientEmail: clientEmail,
        clientAge: clientAge
    });

    try {
        await client.save();
        res.send("client added")
    } catch (err) {
        console.log(err)
    }
});


app.get("/list", async (req, res) => {
    ClientModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        }
        res.send(result)
    })
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await ClientModel.findByIdAndRemove(id).exec();
    res.send("client deleted")
})

app.put("/update", async (req, res) => {

    const newClientName = req.body.newClientName;
    const id = req.body.id;

    try {
        await ClientModel.findById(id, (err, updatedClient) => {
            updatedClient.clientName = newClientName
            updatedClient.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err)
    }
});

app.listen(8080, () => {
    console.log("The server is running on port 8080")
});
