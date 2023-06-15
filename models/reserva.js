const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    restaurante: String,
    usuario: String,
    fecha: Date,
    hora: String,
    numero: Number
})

//Creamos el modelo
const Reserva = mongoose.model('reserva', reservaSchema, "reserva");

module.exports = Reserva;