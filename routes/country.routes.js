const Router=require('express')
const countryController = require('../controller/country.controller')
const router=new Router
const CountryTypeController=require('../controller/country.controller')

router.post('/country',CountryTypeController.createCountry)
router.get('/country',CountryTypeController.getCountry)
router.get('/country/:cname',CountryTypeController.getOneCountry)
router.put('/country',CountryTypeController.updateCountry)
router.delete('/country/:cname',CountryTypeController.deleteCountry)


module.exports=router