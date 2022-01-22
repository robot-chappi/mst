const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.create)
router.get('/:id', basketController.getBasketDevice)
router.delete('/:id', basketController.deleteBasketDevices)
router.delete('/delete/item', basketController.deleteOneDevice)

module.exports = router