const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("filomena/filomena", { titulo: "mi titulo dinámico" })
})
//create
router.get('/crear', (req, res) => {
    res.render('filomena/crear');
 })
   router.post('/', async (req, res) => {
       const body = req.body
       
       console.log(body)
       try {
           const pedidoDB = new Pedido(body)
           await pedidoDB.save()
           res.redirect('/pedido')
       } catch (error) {
           console.log('error', error)
       }
   })

module.exports = router;