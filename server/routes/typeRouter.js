const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.get('/pc/find/:id', typeController.getAllTypesPC)
router.get('/mobile/find/:id', typeController.getAllTypesMobile)
router.get('/all/find/:id', typeController.getAllTypeDevices)
router.get('/:id', typeController.getOne)
router.get('/item/find/:id', typeController.getOneType)
router.delete('/:id', typeController.deleteType)

module.exports = router