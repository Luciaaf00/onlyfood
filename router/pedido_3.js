const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.get('/', async (req, res) => {
    try {
        const arrayPedidoDB = await Pedido.find();
        console.log(arrayPedidoDB);
        res.render("filomena/pedido", { 
            arrayPedido: arrayPedidoDB
        })
    } catch (error) {
        console.error(error)
    }
})
//create
router.get('/crear', (req, res) => {
    res.render('miss/crear');
 })
   router.post('/', async (req, res) => {
       const body = req.body
       const valor = {
         restaurante: 'Restaurante Miss',
         comida: body.comida,
         cantidad: body.cantidad
       };
       console.log(body)
       try {
           const pedidoDB = new Pedido(valor)
           await pedidoDB.save()
           res.redirect('/pedido_3')
       } catch (error) {
           console.log('error', error)
       }
   })

 //delete
 router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const pedidoDB = await Pedido.findByIdAndDelete({ _id: id });
        console.log(pedidoDB)
        if (!pedidoDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar Pedido.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Pedido eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})
//update
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const pedidoDB = await Pedido.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(pedidoDB)
        res.json({
            estado: true,
            mensaje: 'Pedido editado'
        })

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar Pedido'
        })
    }
})
module.exports = router;