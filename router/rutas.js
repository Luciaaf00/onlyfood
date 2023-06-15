const express = require('express') //Requerimos Express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "mi titulo dinámico" })
})
// Por último, vamos a exportarlo:
module.exports = router;