const uuid = require('uuid')
const path = require('path')
const {Game, Reviews} = require('../models/models')
const ApiError = require('../error/ApiError')

class ReviewsUserController {
    async createReviews(req, res, next) {
        try {
            let {name, text, customerId, rating, userId, img} = req.body
            console.log(req.body)
            const reviews = await Reviews.create({name, img, rating, text, customerId, userId})
            return res.json(reviews)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getReviews(req, res) {
        let {id} = req.params
        const commentsGet = await Reviews.findAll({where: {customerId: id}})
        return res.json(commentsGet)
    }

    async findReviews(req, res) {
        try {
        let {name, text} = req.body
        console.log(name)
        console.log(text)
        const commentsFind = await Reviews.findAll({where: {name: name, text: text}})
        return res.json(commentsFind)
        } catch {
            return res.json('Error')
        }
    }

    async getAllReviews(req, res) {
        const allCommentsGet = await Reviews.findAll()
        return res.json(allCommentsGet)
    }
    
    async deleteReviews(req, res, next) {
        try {
            let {id} = req.params
            await Reviews.destroy({where: {id: id}})
            return res.json('Succefull Deleted!')
        } catch (e) {
            return res.json('Error')
        }
    }
}

module.exports = new ReviewsUserController()