const Router=require('express')
const doctorController = require('../controller/doctor.controller')
const router=new Router
const DoctorController=require('../controller/doctor.controller')

router.post('/doctor',DoctorController.createDoctor)
router.get('/doctor',DoctorController.getDoctor)
router.get('/doctor/:email',DoctorController.getOneDoctor)
router.put('/doctor',DoctorController.updateDoctor)
router.delete('/doctor/:email',DoctorController.deleteDoctor)


module.exports=router