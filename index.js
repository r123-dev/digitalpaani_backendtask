require('dotenv').config();
const express=require('express');
const app=express();
const connectDb=require('./util/db')

const cors=require("cors");
const bodyParser=require('body-parser');
const { route } = require('./routes/Route');
app.use(cors());

app.use(express.json());

app.use(bodyParser.json())
app.use("/api/libr",route);
const PORT=5000
connectDb().then(()=>{


app.listen(PORT,()=>{
  console.log(`server is running on port : ${PORT}`);
});
});