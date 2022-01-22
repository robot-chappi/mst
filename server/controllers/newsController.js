const uuid = require('uuid')
const path = require('path')
const {News} = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsController {
    async createNews(req, res, next) {
        try {
            let {title, description, descriptionMini} = req.body
            const {img, imgMini} = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileNameTwo = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgMini.mv(path.resolve(__dirname, '..', 'static', fileNameTwo))
            const news = await News.create({title, description, img: fileName, descriptionMini, imgMini: fileNameTwo})
            
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllNews(req, res) {
        const getNew = await News.findAll()
        return res.json(getNew)
    }

    async getNews(req, res) {
        let {id} = req.params
        const getOne = await News.findOne({where: {id: id}})
        return res.json(getOne)
    }

    async deleteNews(req, res, next) {
        try {
            let {id} = req.params
            const newsDelete = await News.destroy({where: {id: id}})
            return res.json(newsDelete)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new NewsController()