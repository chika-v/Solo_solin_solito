//Importamos los modulos que vamos a utilizar
const controladorUsers = require('../Controller/userController')


//Exportar los modulos para ser usados.
module.exports = async (app)=> {
    app.get('/login', async (req,res)=> {
        try{
            console.log("entrando a login")
            res.render('login')
        }catch (error) {
            console.log(error)
            res.status(500).json('Ocurrio un error accediendo al login')
        }
    })

    app.post('/login_user' , async (req,res)=> {
        const usuarioBuscar = req.body
        try{
            let resultado = await controladorUsers.findUser(usuarioBuscar)
            res.status(200).json({
                message: "Wiii!, usuario encontrado",
                success: true,
                resultado
            })
        }catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Chale!, usuario no encontrado",
                success: false,
            })
        }
    })

    app.get('/user/:tipo' , async (req,res)=> {
        try{
            let resultado = await controladorUsers.muestraUsers(req.params.tipo)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        }
    })

    app.get('/user/:tipo' , async (req,res)=> {
        try{
            let resultado = await controladorUsers.muestraUsers(req.params.tipo)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        }
    })

}
