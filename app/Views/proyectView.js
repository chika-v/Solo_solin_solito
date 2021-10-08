//Importamos los modulos que vamos a utilizar
const controladorProyects = require('../Controller/proyectsControlller')


//Exportar los modulos para ser usados.
module.exports = async (app)=> {
    app.get('/inicio', async (req,res)=> {
        try{
            console.log("entrando a inicio")
            res.render('inicio')
        }catch (error) {
            console.log(error)
            res.status(500).json('Ocurrio un error accediendo al inicio')
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