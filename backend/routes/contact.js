const router = require("express").Router();
const contact = require("../models/contact");

router.post("/post",async(req,res) => {
    try {
        const{name, phone, email, subject } = req.body;
        const newContact = new contact({name, phone, email, subject});
        await newContact.save().then(()=> {
            res.status(200).json({message:"Data Saved"});
        },()=> {
                res.status(400).json({message:"Data not saved"});
        }    
        );
    } catch (error) {
        res.status(400).json({message:"Technical Error ocurres"});
    }
});

module.exports = router;