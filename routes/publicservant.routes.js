const Router=require('express')
const publicServantController = require('../controller/publicservant.controller')
const router=new Router
const PublicServantController=require('../controller/publicservant.controller')

router.post('/publicservant',PublicServantController.createPublicServant)
router.get('/publicservant',PublicServantController.getPublicServant)
router.get('/publicservant/:email',PublicServantController.getOnePublicServant)
router.put('/publicservant',PublicServantController.updatePublicServant)
router.delete('/publicservant/:email',PublicServantController.deletePublicServant)


module.exports=router