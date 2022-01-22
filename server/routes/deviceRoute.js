const Router = require('express')
const router = new Router()
const gameController = require('../controllers/deviceController')

router.post('/', gameController.create)
router.post('/update', gameController.updateRating)
router.get('/', gameController.getAlll)
router.get('/items/all', gameController.getAllDevice)
router.get('/:id', gameController.getOne)
router.get('/all/items/collection/:id', gameController.getOneCollection)
router.get('/items/allcollection/:id', gameController.getOneCollectionPC)
router.get('/items/allcollectionmob/:id', gameController.getOneCollectionMobile)
router.delete('/:id', gameController.deleteDevice)


module.exports = router