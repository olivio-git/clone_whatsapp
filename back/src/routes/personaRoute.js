const express=require("express");
const { getAllPersons, addPerson, deletePerson, editPerson } = require("../handlers/personaHandler");

const router=express();
router.get('/',getAllPersons);
router.post('/',addPerson);
router.delete('/:id',deletePerson);
router.put('/:id',editPerson);

module.exports=router;