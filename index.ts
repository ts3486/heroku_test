export{}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//u need a body parser to handle multi-part requests
const bodyParser = require("body-parser");
//
const methodOverride = require("method-override")


const taskRouter = require("./routes/function");

//config (to refer to keys without explicitly showing on files)
// const config = require("config");


const app = express();

//Middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

// const mongoURI = config.get("mongoURI");

// mongoose.connect(mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
// .catch((err: any) => console.log(err));

//Routes
app.use("/task", taskRouter);


//PORT Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);});
