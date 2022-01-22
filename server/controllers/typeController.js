const uuid = require('uuid')
const path = require('path')
const {Type, Game} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const type = await Type.create({name, img: fileName})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
    async getOneType(req, res) {
        const {id} = req.params
        const types = await Type.findOne({where: {id: id}})
        return res.json(types)
    }

    async getAllTypesPC(req, res) {
        const {id} = req.params
        const types = await Game.findAll({where: {typeId: id}, limit: 6})
        return res.json(types)
    }

    async getAllTypeDevices(req, res) {
        const {id} = req.params
        const types = await Game.findAll({where: {typeId: id}})
        return res.json(types)
    }

    async getAllTypesMobile(req, res) {
        const {id} = req.params
        const types = await Game.findAll({where: {typeId: id}, limit: 3})
        return res.json(types)
    }
    
    async getOne(req, res) {
        try {
        const {id} = req.params
        const game = await Game.findOne({where: {id: id}})
    
        const type = await Type.findOne({where: {id: game.typeId}})
        return res.json(type)
        } catch {
            res.json("Wait")
        }
    }
    async deleteType(req, res, next) {
        try {
            let {id} = req.params
            const deletetype = await Type.destroy({where: {id: id}})
            return res.json(deletetype)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TypeController()