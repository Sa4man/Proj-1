const Router=require('express')
const specializeController = require('../controller/specialize.controller')
const router=new Router
const SpecializeController=require('../controller/specialize.controller')

router.post('/specialize',SpecializeController.createSpecialize)
router.get('/specialize',SpecializeController.getSpecialize)
router.get('/specialize/:id/:email',SpecializeController.getOneSpecialize)
router.put('/specialize',SpecializeController.updateSpecialize)
router.delete('/specialize/:id/:email',SpecializeController.deleteSpecialize)


module.exports=router