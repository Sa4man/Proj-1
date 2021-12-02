const Router=require('express')
const usersController = require('../controller/users.controller')
const router=new Router
const UsersController=require('../controller/users.controller')

router.post('/users',UsersController.createUsers)
router.get('/users',UsersController.getUsers)
router.get('/users/:email',UsersController.getOneUsers)
router.put('/users',UsersController.updateUsers)
router.delete('/users/:email',UsersController.deleteUsers)


module.exports=router