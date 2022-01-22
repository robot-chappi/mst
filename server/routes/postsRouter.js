const Router = require('express')
const router = new Router()
const postController = require('../controllers/postsController')

router.post('/', postController.createPost)
router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPost)
router.delete('/:id', postController.deletePost)

module.exports = router