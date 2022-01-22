const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRoute')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRoute')
const basketRoute = require('./basketRouter')
const commentRoute = require('./commentRouter')
const reviewsRoute = require('./reviewsRouter')
const userInfoRoute = require('./userInfoRoute')
const sendEmail = require('./sendEmailRouter')
const promoCode = require('./promoCodesRouter')
const payment = require('./paymentRouter')
const newsletters = require('./newsletterRouter')
const ads = require('./adsRouter')
const posts = require('./postsRouter')
const news = require('./newsRouter')
const coupon = require('./couponesRouter')

router.use('/post', posts)
router.use('/news', news)
router.use('/coupon', coupon)
router.use('/ads', ads)
router.use('/newsletter', newsletters)
router.use('/payment', payment)
router.use('/sendemail', sendEmail)
router.use('/promocode', promoCode)
router.use('/userinfo', userInfoRoute)
router.use('/comment', commentRoute)
router.use('/reviews', reviewsRoute)
router.use('/basket', basketRoute)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router