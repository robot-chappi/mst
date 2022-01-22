const uuid = require('uuid')
const path = require('path')
const {Basket, BasketGame, Game} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req, res, next) {
        try {
            let {basketId, deviceId} = req.body
            console.log(req.body.basketId)
            const basket = await BasketGame.create({basketId, gameId: deviceId})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getBasketDevice(req, res) {
        let {id} = req.params
        const basketget = await BasketGame.findAll({where: {basketId: id}})
        console.log(basketget)

        let obj = JSON.parse(JSON.stringify(basketget))

        
        var vul = obj.map(function(num) {
            return num.gameId;
            })

        
        const list = await Game.findAll({where: {id: vul}})
        return res.json(list)
    }
    async deleteBasketDevices(req, res, next) {
        try {
            let {id} = req.params
            const basket = await BasketGame.destroy({where: {basketId: id}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOneDevice(req, res, next) {
        try {
            let {id, product} = req.query
            console.log(id)
            console.log(product)
            const basket = await BasketGame.destroy({where: {basketId: id, gameId: product}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController()