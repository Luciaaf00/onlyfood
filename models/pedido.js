const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    restaurante: String,
    comida: String,
    cantidad: String
})

//Creamos el modelo
const Pedido = mongoose.model('pedido', pedidoSchema, "pedido");

module.exports = Pedido;