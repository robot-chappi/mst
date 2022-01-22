const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const UserInfo = sequelize.define('user_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    aboutmyself: {type: DataTypes.STRING, defaultValue: 'Пусто'},
    vk: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.STRING, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    money: {type: DataTypes.INTEGER, defaultValue: 0},
    role: {type: DataTypes.INTEGER, defaultValue: 0},
    personalCode: {type: DataTypes.STRING, unique: true},
    isReferal: {type: DataTypes.INTEGER, defaultValue: 0},
    userId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketGame = sequelize.define('basket_game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const PromoCode = sequelize.define('promo_code', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    discount: {type: DataTypes.INTEGER, allowNull: false},
    typeId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
})

const Сoupon = sequelize.define('coupon', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    money: {type: DataTypes.INTEGER, allowNull: false},
})

const PersonalCode = sequelize.define('personal_code', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    use: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    money: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 5},
})

const Payment = sequelize.define('payment_user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    card: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    customer: {type: DataTypes.STRING, allowNull: false},
    vk: {type: DataTypes.STRING, allowNull: false},
    done: {type: DataTypes.INTEGER, defaultValue: 0},
})

const UserBackground = sequelize.define('user_background', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    userId: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})

const Ads = sequelize.define('ads', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    link: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Posts = sequelize.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    descriptionMini: {type: DataTypes.STRING, allowNull: false},
    imgMini: {type: DataTypes.STRING, allowNull: false},
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    descriptionMini: {type: DataTypes.STRING, allowNull: false},
    imgMini: {type: DataTypes.STRING, allowNull: false},
})

const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    description: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    imgBig: {type: DataTypes.STRING, allowNull: false},
})

const Newsletter = sequelize.define('newsletter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Reviews = sequelize.define('reviews', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    customerId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
    userId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
})

const Comment = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    text: {type: DataTypes.STRING, unique: false, allowNull: false},
    deviceId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
    userId: {type: DataTypes.INTEGER, unique: false, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const GameInfo = sequelize.define('game_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(UserInfo);
UserInfo.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Payment)
Payment.belongsTo(User)

Basket.hasMany(BasketGame)
BasketGame.belongsTo(Basket)

Type.hasMany(Game)
Game.belongsTo(Type)

Type.hasMany(PromoCode)
PromoCode.belongsTo(Type)

Game.hasMany(Rating)
Rating.belongsTo(Game)

Game.hasMany(Comment)
Comment.belongsTo(Game)

Game.hasMany(BasketGame)
BasketGame.belongsTo(Game)

Game.hasMany(GameInfo, {as: 'info'});
GameInfo.belongsTo(Game)


module.exports = {
    User, Basket,
    BasketGame, Game,
    Type, 
    Rating, TypeBrand,
    GameInfo, Comment,
    UserInfo, PromoCode,
    Сoupon,
    Payment, Newsletter,
    Ads, Posts, News, UserBackground, PersonalCode, Reviews
}

