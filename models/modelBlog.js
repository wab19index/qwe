const mongoose = require("mongoose");



// model MainCategory
const BlogSchema = new mongoose.Schema({
  status: {type:String},
  category:{type:String},
  title: {type: String},
  slug: {type: String},
  text : {type: String},
  short_description : {type: String},
  image: [{type: String}],
  seo_keywords: {type:String},
  seo_description: {type:String},
  // top: {type: Boolean,set: a => a === '' ? undefined : a},
},{ timestamps: true },)

if(this.title){
  BlogSchema.pre('save', function(next) {
    // this.slug = convert(this.title);
    this.slug = this.title.split(" ").join("-");
    next();
  });
}


const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;