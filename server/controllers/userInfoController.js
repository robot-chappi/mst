const uuid = require('uuid')
const path = require('path')
const {User, UserInfo, UserBackground, PersonalCode} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserInfoController {
    async createInfoUser(req, res, next) {
        try {
            let {name, email, password, vk, birthday, gender, personalCode, userId, aboutmyself} = req.body
            const {img} = req.files
            const candidate = await UserInfo.findOne({where: {userId: userId}})
            if (candidate) {
                return next(ApiError.badRequest('You have already added additional information!'))
            }
           
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const userInformation = await UserInfo.create({name, email, aboutmyself, personalCode, password, vk, img: fileName, birthday, gender, userId})   
            await PersonalCode.create({name: personalCode})   
            return res.json(userInformation)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async createUserBackground(req, res, next) {
        try {
            let {userId, img} = req.body
            const candidate = await UserBackground.findOne({where: {userId: userId}})
            if (candidate) {
                return next(ApiError.badRequest('You have already added background!'))
            }
            const userbackground = await UserBackground.create({img, userId})   
            return res.json(userbackground)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateRating(req, res, next) {
        try {
            let {rating, id} = req.body
            const candidate = await UserInfo.findOne({where: {userId: id}})
            candidate.set({
                rating: rating, 
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateUserBackground(req, res, next) {
        try {
            let {userId, img} = req.body
            const candidate = await UserBackground.findOne({where: {userId: userId}})
            candidate.set({
                img: img
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOneUserBackground(req, res) {
        const {id} = req.params
        const backgroundFind = await UserBackground.findOne({where: {userId: id}})
        return res.json(backgroundFind)
    }

    async updateStatus(req, res, next) {
        try {
            let {aboutmyself, userId} = req.body

            const candidate = await UserInfo.findOne({where: {userId: userId}})
            candidate.set({
                aboutmyself: aboutmyself, 
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateInfoUser(req, res, next) {
        try {
            let {name, email, password, birthday, gender, vk, userId} = req.body
            const {img} = req.files
            
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const candidate = await UserInfo.findOne({where: {userId: userId}})
            candidate.set({
                name: name, 
                email: email, 
                password: password, 
                img: fileName, 
                birthday: birthday, 
                gender: gender,
                vk: vk, 
                userId: userId
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateMoney(req, res) {
        try {
        let {id, money} = req.body
        const candidate = await UserInfo.findOne({where: {userId: id}})
            candidate.set({
                money: Number(candidate.money) + Number(money)
            })
            await candidate.save();  
            return res.json(candidate)
        } catch {
            return res.json('Error')
        }
    }

    async takeMoney(req, res) {
        try {
        let {id, money} = req.body
        const candidate = await UserInfo.findOne({where: {userId: id}})
            candidate.set({
                money: Number(candidate.money) - Number(money)
            })
            await candidate.save();  
            return res.json(candidate)
        } catch {
            return res.json('Error')
        }
    }

    async updateReferalMoney(req, res) {
        try {
        let {id, name} = req.body
        const candidateOne = await PersonalCode.findOne({where: {name: name}})
        const candidateTwo = await UserInfo.findOne({where: {userId: id}})
            candidateTwo.set({
                money: candidateTwo.money + candidateOne.money * candidateOne.use
            })
            await candidateTwo.save(); 
            candidateOne.set({
                use: 0
            })
            await candidateOne.save(); 
            return res.json(candidateOne)
        } catch {
            return res.json('Error')
        }
    }

    async updateReferal(req, res) {
        try {
        let {id, isReferal, codeName} = req.body

        if (isReferal == 0) {
            const candidateOne = await PersonalCode.findOne({where: {name: codeName}})
            const candidate = await UserInfo.findOne({where: {userId: id}})
                candidate.set({
                    money: candidate.money + candidateOne.money,
                    isReferal: 1
                })
                console.log(candidate)
                await candidate.save();  
                candidateOne.set({
                    use: candidateOne.use + 1
                })
                await candidateOne.save(); 
                return res.json(candidateOne)
        } else {
            return next(ApiError.badRequest('You already have a referral!'))
        }

        } catch {
            return res.json('Error')
        }
    }

    async updateRole(req, res) {
        try {
        let {id, role} = req.body
        const candidate = await UserInfo.findOne({where: {userId: id}})
            candidate.set({
                role: role
            })
            await candidate.save();  
            return res.json(candidate)
        } catch {
            return res.json('Error')
        }
    }
    
    async getOneUserInfo(req, res) {
        const {id} = req.params
        const userFind = await UserInfo.findOne({where: {userId: id}})
        return res.json(userFind)
    }

    async getCustomers(req, res) {
        const customers = await UserInfo.findAll({where: {role: 1}})
        return res.json(customers)
    }
}

module.exports = new UserInfoController()