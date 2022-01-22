const uuid = require('uuid')
const path = require('path')
const {Newsletter} = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsLetterController {
    async createSubscribe(req, res, next) {
        try {
            let {email} = req.body
            console.log(req.body)
            const news = await Newsletter.create({email})
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllFollowers(req, res) {
        const allFollowers = await Newsletter.findAll()
        return res.json(allFollowers)
    }
}

module.exports = new NewsLetterController()