const Router = require('express')
const router = new Router()
const couponesController = require('../controllers/couponesController')

router.post('/', couponesController.createCode)
router.get('/', couponesController.getAllCodes)
router.get('/find/item', couponesController.getCode)
router.post('/use/item', couponesController.use)
router.delete('/delete/item', couponesController.deleteCode)

module.exports = router