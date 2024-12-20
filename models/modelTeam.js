const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const TeamSchema = new mongoose.Schema({
  name:{type:String},
  facebook:{type:String},
  instagram:{type:String},
  linkEdin: {type: String},
  image: [{type: String}],
  position:{type: String},
},{ timestamps: true },)

if(this.title){
  TeamSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}


const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;