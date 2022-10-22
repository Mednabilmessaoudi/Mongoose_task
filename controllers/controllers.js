const person = require('../models/models');
const personSchema = require ('../models/models')






exports.addperson = async (req, res) => {
    try {
      const newperson= new personSchema(req.body);
      await newperson.save();
      res.status(200).send("person added succesfully");
    } catch (err) {
      res.status(500)
      console.log(err);
    }
  }


exports.getpersons =  async (req, res) => {
    try {
      const articles = await personSchema.find();
      res.status(200).send(person)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is such person")
    }
  }

  exports.getpersonbyfood = async (req, res) => {
    try {
    const favouritefood = req.params
    const person = await personSchema.findOne(favouritefood);
      res.status(200).send(person)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no such person")
    }
  }





  exports.getpersonById = async (req, res) => {
    try {
      const {id} = req.params
      const person = await personSchema.findById(id);
      res.status(200).send(person)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no such person")
    }
  }


  exports.editperson = async (req, res) => {
    try {
      const {id} = req.params
      const oldperson = await personSchema.findByIdAndUpdate(id,{$set:{...req.body}})
      res.status(200).send(`person updated succesfully : ${oldperson}`)
    
    } catch (err) {
      res.status(500).send("can't update")
      console.log(err);
    }
  }

  exports.deleteperson = async (req,res)=>{
    try{
    const {id} = req.params
     await personSchema.findByIdAndRemove(id)
    res.status(200).send("person removed")
    
    }catch(err){
    console.log(err);
    res.status(500).send("person not found")
    }
    
      }

      let arrayOfPeople = [
        {
          name: "Garry",
          age: 35,
          favoriteFoods: ["fried chicken", "chicken wings", "chicken nuggets"]
        },
        { name: "Hannah", age: 24, favoriteFoods: ["watermelon", "mango"] },
        { name: "Igor", age: 52, favoriteFoods: ["vegetable soup"] }
      ];
  
      
      



