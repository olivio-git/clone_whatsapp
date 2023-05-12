const { getAllPersons, addPerson,deletePerson, editPerson } = require("../controllers/personaController")

module.exports={
    getAllPersons:async(req,res)=>{
        try {
            const result=await getAllPersons();
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    },
    addPerson:async(req,res)=>{
        try {
            const result=await addPerson(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    },
    deletePerson:async(req,res)=>{
        try {
            const result=await deletePerson(req.params);
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    },
    editPerson:async(req,res)=>{
        try {
            const result=await editPerson(req.params,req.body);
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
}