import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
    },
    clientSurname: {
        type: String,
        required: true,
    },
    clientEmail: {
        type: String,
        required: true,
    },
    clientAge: {
        type: Number,
        required: true,
    }
});

//test
const Client = mongoose.model("Client", ClientSchema)

export default Client
