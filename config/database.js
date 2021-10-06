const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        mongoose.connect(process.env.BD_CNN);
        console.log('conexion exitosa a la BD');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar la BD');
    }
}

module.exports = {
    dbConection
}