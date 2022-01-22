const uuid = require('uuid')
const path = require('path')
const {Payment, UserInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class PaymentController {
    async createPayment(req, res, next) {
        try {
            let {name, email, card, price, customer, done, vk, userId} = req.body
            const user = await UserInfo.findOne({where: {userId: userId}})
            
            if (user.money >= price) {
                const paymentOne = await Payment.create({name, email, card, price, customer, done, vk, userId: userId})
                user.set({
                    money: Number(user.money) - Number(price)
                })
                await user.save();  
                return res.json(paymentOne)
            } else {
                return res.json('Не хватает средств!')
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getPayment(req, res) {
        try {
        let {id} = req.params
        const paymentGet = await Payment.findAll({where: {userId: id}})
        return res.json(paymentGet)
        } catch {
            return res.json('Error')
        }
    }

    async getAllPayments(req, res) {
        const allPaymentsGet = await Payment.findAll()
        return res.json(allPaymentsGet)
    }

    // async changeStatusBuy(req, res) {
    //     try {
    //     let {id, userId} = req.body
    //     const candidate = await Payment.findOne({where: {id: id, userId: userId}})
    //         candidate.set({
    //             statusbuy: 1
    //         })
    //         await candidate.save();  
    //         return res.json(candidate)
    //     } catch {
    //         return res.json('Error')
    //     }
    // }

    async changeStatusDone(req, res) {
        try {
        let {id, userId} = req.body
        const candidate = await Payment.findOne({where: {id: id}})
        const candidateTwo = await UserInfo.findOne({where: {userId: userId}})
            candidate.set({
                done: 1
            })
            await candidate.save();  
            candidateTwo.set({
                level: Number(candidateTwo.level) + 1
            })
            await candidateTwo.save();
            return res.json(candidate)
        } catch {
            return res.json('Error')
        }
    }
    
    async deletePayments(req, res, next) {
        try {
            let {id} = req.params
            await Payment.destroy({where: {id: id}})
            return res.json('Succeful Deleted!')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PaymentController()