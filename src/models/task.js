const mongoose = require('mongoose');
const { Schema } = mongoose;

// creamos un esquema  o una  collecion
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);//lo exportamos  bajo esa  extrtuctura