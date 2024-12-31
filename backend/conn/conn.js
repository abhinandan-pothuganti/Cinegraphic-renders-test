const mongoose = require("mongoose");

const conn = async () => {
    try {
        // URL encode special characters in the password if necessary
        const uri = "mongodb+srv://abhinandanpothuganti:abhi1234@cluster0.i9sbv.mongodb.net/";

        // Establish connection to MongoDB Atlas
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

conn();

