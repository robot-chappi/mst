const uuid = require('uuid')
const path = require('path')
const {Game, Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentController {
    async createComment(req, res, next) {
        try {
            let {name, rating, text, deviceId, userId, img} = req.body
            console.log(req.body)
            const comment = await Comment.create({name, rating, text, deviceId, userId, img})
            return res.json(comment)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getComments(req, res) {
        let {id} = req.params
        const commentsGet = await Comment.findAll({where: {deviceId: id}})
        return res.json(commentsGet)
    }

    async findComment(req, res) {
        try {
        let {name, rating, text} = req.query
        const commentsFind = await Comment.findAll({where: {name: name, rating: rating, text: text}})
        return res.json(commentsFind)
        } catch {
            return res.json('Error')
        }
    }

    async getAllComments(req, res) {
        const allCommentsGet = await Comment.findAll()
        return res.json(allCommentsGet)
    }
    
    async deleteComments(req, res, next) {
        try {
            let {id} = req.params
            await Comment.destroy({where: {id: id}})
            return res.json('Succeful Deleted!')
        } catch (e) {
            return res.json('Error')
        }
    }
}

module.exports = new CommentController()