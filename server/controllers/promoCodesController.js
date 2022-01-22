const {PromoCode, Basket, BasketGame, Game} = require('../models/models')
const ApiError = require('../error/ApiError')

class PromoCodeController {
    async createCode(req, res) {
        try {
        const {name, description, quantity, discount, typeId} = req.body
        const code = await PromoCode.create({name, description, quantity, discount, typeId})
        return res.json(code)
        } catch {
            console.log('Error')
        }
    }
    async getAllCodes(req, res) {
        const codes = await PromoCode.findAll()
        return res.json(codes)
    }
    async getCode(req, res) {
        let {name} = req.query
        const codeOne = await PromoCode.findAll({where: {name: name}})
        return res.json(codeOne)
    }
    async checkCode(req, res, next) {
        let {name} = req.query
        const codeOne = await PromoCode.findOne({where: {name: name}})
        return res.json(codeOne)
    }
    async checkDeviceCode(req, res, next) {
        let {typeId, userId} = req.query
        const basketPromo = await BasketGame.findAll({where: {basketId: userId}})
        console.log(basketPromo)

        let obj = JSON.parse(JSON.stringify(basketPromo))

        
        var vul = obj.map(function(num) {
            return num.gameId;
            })

        
        const listOne = await Game.findAndCountAll({where: {id: vul}})
        const listTwo = await Game.findAndCountAll({where: {id: vul, typeId: typeId}})
        console.log(listOne.count)
        console.log(listTwo.count)
        if (listOne.count != listTwo.count) {
            return res.json('Error')
        }

        return res.json(listOne)
    }
    async checkDeviceCodeForOne(req, res, next) {
        let {typeId, deviceId} = req.query

        const listOne = await Game.findAndCountAll({where: {id: deviceId}})
        const listTwo = await Game.findAndCountAll({where: {id: deviceId, typeId: typeId}})
        console.log(listOne.count)
        console.log(listTwo.count)
        if (listOne.count != listTwo.count) {
            return res.json('Error')
        }

        return res.json(listOne)
    }
    async deleteCode(req, res, next) {
        try {
            let {name} = req.query
            const deleteCodeOne = await PromoCode.destroy({where: {name: name}})
            return res.json(deleteCodeOne)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async updateCount(req, res, next) {
        try {
            let {id} = req.params
            console.log(id)
            const candidate = await PromoCode.findOne({where: {name: id}})
            candidate.set({
                quantity: (candidate.quantity - 1), 
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PromoCodeController()