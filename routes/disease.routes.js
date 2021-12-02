const Router=require('express')
const diseaseController = require('../controller/disease.controller')
const router=new Router
const DiseaseController=require('../controller/disease.controller')

router.post('/disease',diseaseController.createDisease)
router.get('/disease',diseaseController.getDisease)
router.get('/disease/:disease_code',diseaseController.getOneDisease)
router.put('/disease',diseaseController.updateDisease)
router.delete('/disease/:disease_code',diseaseController.deleteDisease)


module.exports=router