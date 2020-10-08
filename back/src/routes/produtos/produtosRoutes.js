const router = require('express').Router()
const controller = require('./controller')


router.get('/produtos', async function(req, res){
    try{
        await controller.getAll(req, res)
    }catch(error){
        return res.send('Nao foi possivel fazer a consulta')
    }
})
