const { Tipo_sala }=require("../bd")
module.exports={
    getAllTipoSala:()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const allData=await Tipo_sala.findAll();
                resolve(allData);
            } catch (error) {
                reject(error)
            }
        })
    },
    addTipoSala:(body)=>{
        return new Promise(async(resolve,reject)=>{
            if(!body.name){
                reject(new Error("Faltan datos de entrada!"));
            }
            try {
                const newData=await Tipo_sala.create({
                    nombre:body.name
                })
                resolve(newData);
            } catch (error) {
                reject(error)
            }
        })
    },
    deleteTipoSala:(params)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const deletData=await Tipo_sala.findByPk(params.id);
                console.log('params.id')
                console.log(deletData)
                if(deletData===null){
                    reject(Error("No se encuentra tipo de sala"))
                }
                await deletData.destroy();
                resolve('Borrado exitoso')
            } catch (error) {
                reject(error)
            }
        })
    },
    editTipoSala:(params,body)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                console.log("editando ")
                const editData=await Tipo_sala.findByPk(params.id);
                if(!editData){
                    reject("Registro no encontrado!")
                }
                await editData.update({nombre:body.name})
                resolve({
                    status:200,
                    result:editData,
                    message:"Actualizacion exitosa"
                })
            } catch (error) {
                reject(error)
            }
        })
    },
}