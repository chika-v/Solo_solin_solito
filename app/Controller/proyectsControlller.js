//Importar los metodos que voy a utilizar
const modeloProyects = require('../Model/proyectsModel')

//exportar los modulos que vamos a utilizar
module.exports.findProyect = async (proyect) => {
    try {
        const resultado = await modeloProyects.buscarProyecto(proyect)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al buscar el proyecto')
    }
}

module.exports.getProyects = async () => {
    try {
        const resultado = await modeloProyects.traerProyectos()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al traer el proyectos')
    }
}

module.exports.createProyects = async (proyect) => {
    try {
        const resultado = await modeloUsers.crearProyectos(proyect)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al crear los proyectos')
    }
}

module.exports.editProyects = async (id, user) => {
    try {
        const resultado = await modeloUsers.editarProyectos(id,proyect)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al editar los proyectos')
    }
}

module.exports.deleteProyects = async (id) => {
    try {
        const resultado = await modeloUsers.borrarProyectos(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al eliminar los proyectos')
    }
}