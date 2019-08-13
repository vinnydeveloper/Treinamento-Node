const express = require('express');
const routes = express.Router();

const postcontroller = require('./controllers/postcontroller');

routes.post('/dev', (req, res)=>{
   
    res.send(`Olá  ${req.body.nome} `);
})

routes.get('/json', (req, res)=>{
        return res.json({
           nome:"Vinicius",
           php:"bom" 
        })
})


//rotas post

routes.get('/posts', postcontroller.index);
routes.post('/posts', postcontroller.store);
routes.put('/posts',postcontroller.update);
routes.delete('/posts',postcontroller.delete);

module.exports = routes;