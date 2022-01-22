const uuid = require('uuid')
const path = require('path')
const {Posts} = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController {
    async createPost(req, res, next) {
        try {
            let {title, description, descriptionMini} = req.body
            const {img, imgMini} = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileNameTwo = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgMini.mv(path.resolve(__dirname, '..', 'static', fileNameTwo))
            const posts = await Posts.create({title, description, img: fileName, descriptionMini, imgMini: fileNameTwo})
            
            return res.json(posts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllPosts(req, res) {
        const getPosts = await Posts.findAll()
        return res.json(getPosts)
    }

    async getPost(req, res) {
        let {id} = req.params
        const getOne = await Posts.findOne({where: {id: id}})
        return res.json(getOne)
    }

    async deletePost(req, res, next) {
        try {
            let {id} = req.params
            const adsDelete = await Posts.destroy({where: {id: id}})
            return res.json(adsDelete)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PostController()