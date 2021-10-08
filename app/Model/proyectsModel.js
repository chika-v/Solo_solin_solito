const {Op} = require('sequelize')
const Proyectos = require('../../db/db.proyects')

//Exportar nuestros modulos a utilizar
module.exports.buscarProyecto = async (proyect)=> {
    try {
        let resultado = await Proyectos.findOne({
            where:{
                owner: {
                    [Op.like]: proyect.owner
                },
                proyectName: {
                    [Op.like]: proyect.proyectName
                }, 
            }
        })
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ops!, ¿donde quedo')
    }
}

module.exports.traerProyectos = async ()=> {
    try {
        let resultado =  await Proyectos.findAll()
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la consulta de los proyectos')
    }
}

module.exports.crearProyectos = async (proyect)=> {
    try {
        let resultado =  await Proyectos.create(proyect)
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la creacion del proyecto')
    }
}

module.exports.editarProyectos = async (id, proyect)=> {
    try {
        let proyectoEncontrado =  await Proyectos.findByPk(id)
        let resultado = await proyectoEncontrado.update(proyect)
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la edicion de los proyectos')
    }
}

module.exports.borrarProyectos = async (id)=> {
    try {
        let proyectoEncontrado =  await Proyectos.findByPk(id)
        let resultado = await proyectoEncontrado.delete()
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la eliminacion de los proyectos')
    }
}
