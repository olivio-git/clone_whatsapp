const express=require("express");
const { 
    getAllTipoSala, 
    addTipoSala,
    deleteTipoSala,
    editTipoSala
} = require("../handlers/tipo_salaHandler");
const router=express();

router.get('/',getAllTipoSala)
router.post('/',addTipoSala)
router.delete('/:id',deleteTipoSala)
router.put('/:id',editTipoSala)

module.exports=router;