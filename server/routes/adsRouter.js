const Router = require('express')
const router = new Router()
const adsController = require('../controllers/adsController')

router.post('/', adsController.createAds)
router.get('/find/item', adsController.getAllAds)
router.delete('/:id', adsController.deleteAds)

module.exports = router