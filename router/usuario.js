const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("usuario/usuario", { titulo: "mi titulo dinámico" })
})
module.exports = router;