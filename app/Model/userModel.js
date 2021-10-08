const {Op} = require('sequelize')
const Users = require('../../db/db.user')

//Exportar nuestros modulos a utilizar
module.exports.buscarUser = async (user)=> {
    try {
        let resultado = await Users.findOne({
            where:{
                email: {
                    [Op.like]: user.email
                },
                password: {
                    [Op.like]: user.password
                }, 
            }
        })
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ops!, ¿donde nos sento?')
    }
}

module.exports.traerUsers = async ()=> {
    try {
        let resultado =  await Users.findAll()
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la consulta de usuarios')
    }
}

module.exports.crearUsers = async (user)=> {
    try {
        let resultado =  await Users.create(user)
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la creacion de usuarios')
    }
}

module.exports.editarUsers = async (id, user)=> {
    try {
        let usuarioEncontrado =  await Users.findByPk(id)
        let resultado = await usuarioEncontrado.update(user)
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la edicion de usuarios')
    }
}

module.exports.borrarUsers = async (id)=> {
    try {
        let usuarioEncontrado =  await Users.findByPk(id)
        let resultado = await usuarioEncontrado.delete()
        console.log(resultado)
        return resultado
    }catch (e){
        console.log(e)
        throw new Error ('Ocurrios un error en la eliminacion de usuarios')
    }
}
