const express = require('express');
const router = express.Router();

//----> Ruta para Ingresar Datos
router.get('/notes/add', (req, res) =>{
    res.render('notes/new_note');
})

//----> Ruta para capturar datos y enviarlos a la DB
router.post('/notes/new_note', (req, res)=>{
    console.log(req.body);
    res.send('ok');
})

router.get('/notes', (req, res) =>{
    res.send('Notas desde la Base de datos')
})

module.exports = router;