const Router=require('express')
const discoverController = require('../controller/discover.controller')
const router=new Router
const DiscoverController=require('../controller/discover.controller')

router.post('/discover',DiscoverController.createDiscover)
router.get('/discover',DiscoverController.getDiscover)
router.get('/discover/:cname/:disease_code',DiscoverController.getOneDiscover)
router.put('/discover',DiscoverController.updateDiscover)
router.delete('/discover/:cname/:disease_code',DiscoverController.deleteDiscover)


module.exports=router