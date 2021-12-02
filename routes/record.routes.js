const Router=require('express')
const recordController = require('../controller/record.controller')
const router=new Router
const RecordController=require('../controller/record.controller')

router.post('/record',RecordController.createRecord)
router.get('/record',RecordController.getRecord)
router.get('/record/:email/:cname/:disease_code',RecordController.getOneRecord)
router.put('/record',RecordController.updateRecord)
router.delete('/record/:email/:cname/:disease_code',RecordController.deleteRecord)


module.exports=router