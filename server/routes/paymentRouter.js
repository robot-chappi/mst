const Router = require('express')
const router = new Router()
const paymentController = require('../controllers/paymentController')

router.post('/', paymentController.createPayment)
// router.post('/update/statusbuy', paymentController.changeStatusBuy)
router.post('/update/done', paymentController.changeStatusDone)
router.get('/', paymentController.getAllPayments)
router.get('/:id', paymentController.getPayment)
router.delete('/:id', paymentController.deletePayments)

module.exports = router