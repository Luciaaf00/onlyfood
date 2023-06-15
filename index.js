const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Conexion Mongodb
const port = process.env.PORT ||4000
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.esikzyc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
 mongoose.connect(uri,
   { useNewUrlParser: true, useUnifiedTopology: true }
 )
   .then(() => console.log('Base de datos conectada'))
   .catch(e => console.log(e))

 //Middleware
app.use(express.static(__dirname + '/public'));

//Motor de plantillas 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")




//Llamadas a las rutas
app.use('/', require('./router/rutas'))
app.use('/filomena', require('./router/filomena'))
app.use('/pedido', require('./router/pedido'))
app.use('/pedido_2', require('./router/pedido_2'))
app.use('/pedido_3', require('./router/pedido_3'))
app.use('/pedido_4', require('./router/pedido_4'))
app.use('/escapada',require('./router/escapada'))
app.use('/usuario',require('./router/usuario'))
app.use('/miss',require('./router/miss'))
app.use('/hamboor',require('./router/hamboor'))
app.use('/reserva',require('./router/reserva'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})