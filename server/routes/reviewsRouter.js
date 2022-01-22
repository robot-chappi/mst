const Router = require('express')
const router = new Router()
const reviewsController = require('../controllers/reviewsController')

router.post('/', reviewsController.createReviews)
router.get('/:id', reviewsController.getReviews)
router.get('/', reviewsController.getAllReviews)
router.post('/find/item', reviewsController.findReviews)
router.delete('/:id', reviewsController.deleteReviews)

module.exports = router