//Importo los modulos necesarios
const db = require("./db/db.conexion");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const sequelize = require("./db/db.conexion");
const Users = require("./db/db.user")
const userView = require("./app/Views/userView")
const proyectView = require("./app/Views/proyectView")
const Proyectos = require("./db/db.proyects")
//Middleware globales

app.use(express.json());
app.use(cors());


// Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//app.use('/', router);

//Levantamos nuestro servidor
async function inicioServer() {
    try {
        await Proyectos.sync({alter:true})
        await Users.sync({alter:true})
        await sequelize.authenticate()
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();


//Rutas 
userView(app)
proyectView(app)