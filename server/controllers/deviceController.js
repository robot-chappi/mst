const uuid = require('uuid')
const path = require('path')
const {Game, GameInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, typeId, info, description} = req.body
            const {img, imgBig} = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileNameBig = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgBig.mv(path.resolve(__dirname, '..', 'static', fileNameBig))
            const device = await Game.create({name, price, typeId, img: fileName, imgBig: fileNameBig, description})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: device.id
                    })
                );
            }
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAlll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 1000
        let offset = page * limit - limit
        let devices;
        if (!typeId) {
            devices = await Game.findAndCountAll({limit, offset})
        }

        if (typeId) {
            devices = await Game.findAndCountAll({where:{typeId}, limit, offset})
        }
        return res.json(devices)
    }

    async getAllDevice(req, res) {
        const devices = await Game.findAndCountAll()
        return res.json(devices)
    }
    
    async getOne(req, res) {
        const {id} = req.params
        const device = await Game.findOne({where: {id}, include: [{model: GameInfo, as: 'info'}]})
        return res.json(device)
    }

    async getOneCollection(req, res) {
        const {id} = req.params
        const device = await Game.findAll({where: {typeId: id}})
        return res.json(device)
    }

    async getOneCollectionPC(req, res) {
        const {id} = req.params
        const device = await Game.findAll({where: {typeId: id}, limit: 6})
        return res.json(device)
    }

    async getOneCollectionMobile(req, res) {
        const {id} = req.params
        const device = await Game.findAll({where: {typeId: id}, limit: 3})
        return res.json(device)
    }

    async updateRating(req, res, next) {
        try {
            let {rating, id} = req.body
            const candidate = await Game.findOne({where: {id: id}})
            candidate.set({
                rating: rating, 
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteDevice(req, res, next) {
        try {
            let {id} = req.params
            await Game.destroy({where: {id: id}})
            await GameInfo.destroy({where: {gameId: id}})
            await GameInfo.destroy({where: {gameId: null}})
            return res.json('Succeful Deleted!')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new DeviceController()