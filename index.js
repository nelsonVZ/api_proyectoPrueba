const express = require('express'); //exportamos
const { dbConection } = require('./config/database');
const cors = require('cors');
require('dotenv').config();
//creamos el servidor
const app = express();

//Configuracion de cors
app.use(cors());

//console.log(process.env);
//Conexion a la BD
dbConection();

//Rutas de la API
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenido a node'
    });
});
//levantamos el servidor
app.listen(process.env.PORT, () => {
    console.log('servidor levantado en el puerto: ' + process.env.PORT);
})