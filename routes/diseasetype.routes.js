const Router=require('express')
const diseaseController = require('../controller/diseasetype.controller')
const router=new Router
const DiseaseTypeController=require('../controller/diseasetype.controller')

router.post('/diseasetype',DiseaseTypeController.createDiseaseType)
router.get('/diseasetype',DiseaseTypeController.getDiseaseType)
router.get('/diseasetype/:id',DiseaseTypeController.getOneDiseaseType)
router.put('/diseasetype',DiseaseTypeController.updateDiseaseType)
router.delete('/diseasetype/:id',DiseaseTypeController.deleteDiseaseType)


module.exports=router