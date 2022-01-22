const {Сoupon, Basket, BasketGame, Game, UserInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class couponesController {
    async createCode(req, res) {
        try {
        const {name, description, quantity, money} = req.body
        const code = await Сoupon.create({name, description, quantity, money})
        return res.json(code)
        } catch {
            console.log('Error')
        }
    }
    async getAllCodes(req, res) {
        const codes = await Сoupon.findAll()
        return res.json(codes)
    }
    async getCode(req, res) {
        try {
            let {name} = req.query
            const codeOne = await Сoupon.findAll({where: {name: name}})
            return res.json(codeOne)
        } catch {
            console.log('Error')
        }
    }

    async use(req, res) {
        try {
        const {id, name} = req.body
        console.log(name)
        const code = await Сoupon.findOne({where:{name: name}})
        if (code.quantity > 0) {
            const user = await UserInfo.findOne({where:{userId: id}})
            user.set({
                money: user.money + code.money, 
            })
            await user.save();  
            code.set({
                quantity: code.quantity - 1
            })
            await code.save(); 
            return res.json(code)
        } else {
            return res.json(code)
        }  
        } catch {
            console.log('Error')
        }
    }

    async deleteCode(req, res, next) {
        try {
            let {name} = req.query
            const deleteCodeOne = await Сoupon.destroy({where: {name: name}})
            return res.json(deleteCodeOne)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new couponesController()