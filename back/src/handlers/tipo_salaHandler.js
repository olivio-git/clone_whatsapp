const { getAllTipoSala, addTipoSala, deleteTipoSala, editTipoSala } = require("../controllers/tipo_salaController")

module.exports={
    getAllTipoSala:async(req,res)=>{
        try {
            const result=await getAllTipoSala();
            res.status(200).json(result)         
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    },
    addTipoSala:async(req,res)=>{
        try {
            const result=await addTipoSala(req.body);
            res.status(200).json(result)         
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    },
    deleteTipoSala:async(req,res)=>{
        try {
            const result=await deleteTipoSala(req.params);
            res.status(200).json(result)               
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    },
    editTipoSala:async(req,res)=>{
        try {
            const result=await editTipoSala(req.params,req.body);
            res.status(200).json(result)         
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    },
}