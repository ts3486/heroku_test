export{}
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskname: {type: String, required: true, unique: true, minlength: 3, trim: true},
    description: {type: String},
    duedate: {type: String},
},

{timestamps: true})

const Task = mongoose.model("User", taskSchema);

module.exports = Task
