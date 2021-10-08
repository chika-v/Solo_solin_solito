//Importar los metodos que voy a utilizar
const modeloUsers = require('../Model/userModel')

//exportar los modulos que vamos a utilizar
module.exports.findUser = async (user) => {
    try {
        const resultado = await modeloUsers.buscarUser(user)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al buscar usuario')
    }
}

module.exports.getUsers = async () => {
    try {
        const resultado = await modeloUsers.traerUsers()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al traer usuarios')
    }
}

module.exports.createUsers = async (user) => {
    try {
        const resultado = await modeloUsers.crearUsers(user)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al crear usuarios')
    }
}

module.exports.editUsers = async (id, user) => {
    try {
        const resultado = await modeloUsers.editarUsers(id,user)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al editar usuarios')
    }
}

module.exports.deleteUsers = async (id) => {
    try {
        const resultado = await modeloUsers.borrarUsers(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al eliminar usuarios')
    }
}