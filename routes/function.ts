export{}
const router = require("express").Router();

const mongoose = require("mongoose");

let Task = require("../models/task.model");

router.route("/").get((req: any,res: any) => {

    Task.find().then((posts: any) => res.json(posts))
    .catch((err: any) => res.status(400).json("Error: " + err));

 });

 module.exports = router;