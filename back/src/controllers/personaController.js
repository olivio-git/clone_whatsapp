const {Persona}=require("../bd");
module.exports={
    getAllPersons:()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const personas=await Persona.findAll();
                if(!personas){
                    rejec(new Error("No se encontraron datos"))
                }
                resolve(personas);
            } catch (error) {
                reject(error)
            }
        })
    },
    addPerson:(body)=>{
        return new Promise(async(resolve,reject)=>{
            if(!body.name || !body.apellido || !body.fechaNac || !body.direccion){
                reject(new Error("Faltan datos"))
            }
            try {
                const newPerson=await Persona.create({
                    nombre:body.name,
                    apellido:body.apellido,
                    fechaNac:body.fechaNac,
                    direccion:body.direccion
                })
                resolve(newPerson);
            } catch (error) {
                reject(error)
            }
        })
    },
    deletePerson:(params)=>{
        return new Promise(async(resolve,reject)=>{
            try { 
                const persona=await Persona.findByPk(params.id);
                if(!persona){
                    reject(new Error("Persona no encontrada"))
                }
                await persona.destroy();
                resolve('Borrado con exito')
            } catch (error) {
                reject(error)
            }
        })
    },
    editPerson:(params,body)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const persona=await Persona.findByPk(params.id);
                if(!persona){
                    reject(new Error("Persona no encontrada"))
                }
                await persona.update({
                    nombre:body.name?body.name:persona.name,
                    apellido:body.apellido?body.apellido:persona.apellido,
                    fechaNac:body.fechaNac?body.fechaNac:persona.fechaNac,
                    direccion:body.direccion?body.direccion:persona.direccion
                })
                resolve({
                    status:200,
                    result:persona,
                    message:"Actualizacion exitosa"
                })
            } catch (error) {
                reject(error)
            }
        })
    },
}