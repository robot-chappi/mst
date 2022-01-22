const Router = require('express')
const router = new Router()
const sendEmailOneController = require('../controllers/sendEmailController')
const sendLetterForPassword = require('../controllers/sendEmailController')

router.post('/', sendEmailOneController.sendLetter)
router.post('/reg', sendEmailOneController.sendLetterForPassword)
router.post('/changepaswd', sendEmailOneController.sendLetterForChangePassword)
router.post('/sendall', sendEmailOneController.sendLettersEveryBody)

module.exports = router