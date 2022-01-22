const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/changepassword', userController.changePasswordUser)
router.get('/auth', authMiddleware, userController.check)
router.get('/everyone', userController.getEveryone)
router.get('/:id', userController.getOneUser)

module.exports = router