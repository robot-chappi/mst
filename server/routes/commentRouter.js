const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.post('/', commentController.createComment)
router.get('/:id', commentController.getComments)
router.get('/', commentController.getAllComments)
router.get('/find/item', commentController.findComment)
router.delete('/:id', commentController.deleteComments)

module.exports = router