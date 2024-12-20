const mongoose = require("mongoose");



// model MainCategory
const MessageSchema = new mongoose.Schema({
  status:{type:String},
  name:{type:String},
  email:{type:String},
  message:{type:String},
},
{ timestamps: true },)

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;