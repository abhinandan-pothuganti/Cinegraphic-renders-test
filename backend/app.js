const express =require("express");
const cors = require("cors"); 
const app = express();
const contact = require("./routes/contact");
require("./conn/conn");
require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json()); 
app.use(cors());
app.use("/api/v1",contact);

app.listen(process.env.PORT || "1000", ()=>{
    console.log("Server Started at port 1000")
})