const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsletterController')

router.post('/', newsController.createSubscribe)
router.get('/', newsController.getAllFollowers)

module.exports = router