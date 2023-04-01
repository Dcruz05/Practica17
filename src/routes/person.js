let express = require('express');
let router = express.Router(); //usamos export.Router para solo usar router para hacer ruteo

router.post('/personJson',express.json({type:'*/*'}),(req,res)=>{
    console.log(`Nombre: ${req.body.Nombre}\nApellido: ${req.body.Apellido}`)  //Mostramos la informacion que recibimos por medio de una vista ejs en este caso testJson en este caso la informacion de un Json
});
router.get('/testJson',(req,res)=>{
    res.render('testJson'); // Mostramos la vista de testJson para que desde ese momento se mande la informacion a personJson
})

/* //!Borrar
router.get('/test', (req, res) => {
    res.send('TEST')
    console.log(`Nombre: ${req.body.Nombre}\nApellido: ${req.body.Edad}`)
}) 
*/
module.exports = router; //exportamos el router para poder acceder a la ruta en server.js