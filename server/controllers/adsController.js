const uuid = require('uuid')
const path = require('path')
const {Ads} = require('../models/models')
const ApiError = require('../error/ApiError')

class AdsController {
    async createAds(req, res, next) {
        try {
            let {link} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const ads = await Ads.create({link, img: fileName})
            
            return res.json(ads)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllAds(req, res) {
        const getAds = await Ads.findAll()
        return res.json(getAds)
    }

    async deleteAds(req, res, next) {
        try {
            let {id} = req.params
            const adsDelete = await Ads.destroy({where: {id: id}})
            return res.json(adsDelete)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new AdsController()