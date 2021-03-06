export{}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
//u need a body parser to handle multi-part requests
const bodyParser = require("body-parser");
//
const methodOverride = require("method-override")

// const { Server } = require('ws');

// const wss = new Server({ Server });


const taskRouter = require("./routes/function");

//config (to refer to keys without explicitly showing on files)
// const config = require("config");


const app = express()
.use((res: any) => res.sendFile("frontend/build/index.html", { root: __dirname }));

//Middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

// const mongoURI = config.get("mongoURI");

// mongoose.connect(mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
// .catch((err: any) => console.log(err));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('../frontend/build', 'index.html'));
//     app.get('*', (res: any) => {
//       res.sendFile(path.join('../frontend/build', 'index.html'));
//     });
//   }

//   app.get("*", (req, res) => {
//     let url = path.join(__dirname, '../client/build', 'index.html');
//     if (!url.startsWith('/app/')) // since we're on local windows
//       url = url.substring(1);
//     res.sendFile(url);
//   });

// wss.on('connection', (ws: any) => {
//     console.log('Client connected');
//     ws.on('close', () => console.log('Client disconnected'));
//   });

//Routes
app.use("/task", taskRouter);


//PORT Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);});
