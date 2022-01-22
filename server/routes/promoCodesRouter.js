const Router = require('express')
const router = new Router()
const promoCodeController = require('../controllers/promoCodesController')

router.post('/', promoCodeController.createCode)
router.get('/', promoCodeController.getAllCodes)
router.get('/find/item', promoCodeController.getCode)
router.get('/check/item', promoCodeController.checkCode)
router.get('/exact/item', promoCodeController.checkDeviceCode)
router.get('/one/item', promoCodeController.checkDeviceCodeForOne)
router.delete('/delete/item', promoCodeController.deleteCode)
router.post('/update/:id', promoCodeController.updateCount)

module.exports = router