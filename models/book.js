import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
 title:{
    type: String,
    required: true
 },
 author:{
    type: String,
    required: true
 },
 publicationYear:{
    type:String,
    required:true
 }


});

export default mongoose.model("book", bookSchema);