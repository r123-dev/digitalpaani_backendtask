const mongoose=require('mongoose');

require('dotenv').config({ path: '../env' });

const connectdb=async ()=>{
    try {
         mongoose.connect(process.env.URI);
        console.log("connection successful")
    } catch (error) {
        console.log("database connection error");
        process.exit(0);
    }
}

module.exports=connectdb;