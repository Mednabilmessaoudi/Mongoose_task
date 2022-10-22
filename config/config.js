const mongoose = require('mongoose')




const configdb= ()=>{
    try{
mongoose.connect("mongodb+srv://person:person@cluster0.g3c7lr1.mongodb.net/?retryWrites=true&w=majority")

console.log("you are connected");

    }catch(err) {
console.log(err);
    }
}

module.exports = configdb;