import express from "express";
import mongoose  from "mongoose";

const app = express();

app.use(express.json());


// test
mongoose.connect("", {
    useNewUrlParser: true,
});

app.listen(8080, () => {
    console.log("The server is running on port 8080")
})