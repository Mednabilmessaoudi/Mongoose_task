const express = require ('express');

const {
    addperson,
    getpersons,
    getpersonbyfood,
    getpersonById,
    editperson,
    deleteperson 

} = require ('../controllers/controllers');


const routes = express.Router();


routes.get("/search/:id",getpersonById)
routes.delete("/delete/:id" , deleteperson )
routes.get("/category/:favouritefood",getpersonbyfood)
routes.post("/add",addperson)
routes.get("/persons",getpersons)
routes.put("/edit/:id", editperson);

module.exports = routes;