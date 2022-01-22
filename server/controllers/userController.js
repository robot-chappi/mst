const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models') 

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Такой пользователь с таким email уже существует!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async changePasswordUser(req, res, next) {
        try {
            let {email, password} = req.body
            if(!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await User.findOne({where: {email: email}})
            const hashPasswordtwo = await bcrypt.hash(password, 5)
            candidate.set({
                password: hashPasswordtwo, 
            })
            await candidate.save();  
            return res.json(candidate)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getOneUser(req, res) {
        const {id} = req.params
        const userFind = await User.findOne({where: {id: id}})
        return res.json(userFind)
    }

    async getEveryone(req, res) {
        const everyone = await User.findAll()
        return res.json(everyone)
    }
}

module.exports = new UserController()