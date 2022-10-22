const mongoose = require("mongoose");
const personSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    age:Number,
    favouritefood :[String],
  
});

module.exports = mongoose.model("person", personSchema);