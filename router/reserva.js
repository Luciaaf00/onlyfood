const express = require('express');
const router = express.Router();
const Reserva = require('../models/reserva');

router.get('/', async (req, res) => {
    try {
        const arrayReservaDB = await Reserva.find();
        console.log(arrayReservaDB);
        res.render("reserva/reserva", { 
            arrayReserva: arrayReservaDB
        })
    } catch (error) {
        console.error(error)
    }
})
//create
router.get('/crear', (req, res) => {
    res.render('reserva/crear');
 })
   router.post('/', async (req, res) => {
       const body = req.body
       console.log(body)
       try {
           const reservaDB = new Reserva(body)
           await reservaDB.save()
           res.redirect('/reserva')
       } catch (error) {
           console.log('error', error)
       }
   })
 //view
 router.get('/:id', async(req, res) => {
     const id = req.params.id
     try {
         const reservaDB = await Reserva.findOne({ _id: id })
         console.log(reservaDB)
         res.render('reserva/detalle', {
             reserva: reservaDB,
             error: false
         })
     } catch (error) {
         console.log('Se ha producido un error', error)
         res.render('reserva/detalle', {
             error: true,
             mensaje: 'Reserva no encontrado!'
         })
     }
 })
 //delete
 router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const reservaDB = await Reserva.findByIdAndDelete({ _id: id });
        console.log(reservaDB)
        if (!reservaDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar Reserva.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Reserva eliminado.'
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
        const reservaDB = await Reserva.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(reservaDB)
        res.json({
            estado: true,
            mensaje: 'Reserva editado'
        })

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar Reserva'
        })
    }
})
module.exports = router;