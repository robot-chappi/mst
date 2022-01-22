import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const createCollectionOne = async (collection) => {
    const {data} = await $authHost.post('api/collection', collection)
    return data
}

export const createReviews = async (reviews) => {
    const {data} = await $authHost.post('api/reviews', reviews)
    return data
}

export const fetchReviews = async (id) => {
    const {data} = await $host.get('api/reviews/' + id)
    return data
}

export const fetchAllReviews = async () => {
    const {data} = await $host.get('api/reviews',)
    return data
}

export const findReview = async (reviews) => {
    const {data} = await $host.post('api/reviews/find/item', reviews)
    return data
}

export const deleteReviews = async (id) => {
    const {data} = await $host.delete('api/reviews/' + id)
    return data
}

export const activatePersonalCode = async (code) => {
    const {data} = await $authHost.post('api/userinfo/update/referal', code)
    return data
}

export const getCustomers = async () => {
    const {data} = await $authHost.get('api/userinfo/customers/all', )
    return data
}

export const getCashPersonalCode = async (code) => {
    const {data} = await $authHost.post('api/userinfo/update/referalmoney', code)
    return data
}

export const updateRoleUser = async (code) => {
    const {data} = await $authHost.post('api/userinfo/update/role', code)
    return data
}

export const updateStatus = async (status) => {
    const {data} = await $authHost.post('api/userinfo/update/status', status)
    return data
}

export const updateMoney = async (money) => {
    const {data} = await $authHost.post('api/userinfo/update/money', money)
    return data
}

export const takeMoney = async (money) => {
    const {data} = await $authHost.post('api/userinfo/update/takemoney', money)
    return data
}

export const getCashCoupone = async (coupon) => {
    const {data} = await $authHost.post('api/coupon/use/item', coupon)
    return data
}

export const createOneCoupone = async (coupon) => {
    const {data} = await $authHost.post('api/coupon', coupon)
    return data
}

export const getCoupones = async () => {
    const {data} = await $authHost.get('api/coupon')
    return data
}

export const deleteCoupones = async (name) => {
    const {data} = await $host.delete('api/coupon/delete/item', {params: {
        name
    }})
    return data
}

export const getOneCoupone = async (name) => {
    const {data} = await $host.get('api/coupon/find/item', {params: {
        name
    }})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const fetchBrandOne = async (id) => {
    const {data} = await $host.get('api/brand/' + id)
    return data
}

export const fetchTypeType = async (id) => {
    const {data} = await $host.get('api/type/item/find/' + id)
    return data
}

export const fetchTypeOne = async (id) => {
    const {data} = await $host.get('api/type/' + id)
    return data
}

export const fetchCollections = async () => {
    const {data} = await $host.get('api/collection', )
    return data
}

export const getCollection = async (id) => {
    const {data} = await $host.get('api/type/item/find/' + id)
    return data
}

export const createDevice = async (device) => {
    console.log(device)
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const createAds = async (ads) => {
    console.log(ads)
    const {data} = await $authHost.post('api/ads', ads)
    return data
}

export const fetchAds = async () => {
    const {data} = await $host.get('api/ads/find/item', )
    return data
}

export const deleteAds = async (id) => {
    const {data} = await $host.delete('api/ads/' + id)
    return data
}

export const deleteColletion = async (id) => {
    const {data} = await $host.delete('api/collection/' + id)
    return data
}

// export const createPost = async (posts) => {
//     console.log(posts)
//     const {data} = await $authHost.post('api/post', posts)
//     return data
// }

// export const fetchPosts = async () => {
//     const {data} = await $host.get('api/post', )
//     return data
// }

// export const deletePost = async (id) => {
//     const {data} = await $host.delete('api/post/' + id)
//     return data
// }

export const createPromo = async (promoCode) => {
    console.log(promoCode)
    const {data} = await $authHost.post('api/promocode', promoCode)
    return data
}

export const createNewsletterSub = async (newsletterData) => {
    console.log(newsletterData)
    const {data} = await $authHost.post('api/newsletter', newsletterData)
    return data
}

export const deleteOneDeviceBasket = async (id, product) => {
    const {data} = await $host.delete('api/basket/delete/item', {params: {
        id, product
        }})
    return data
}

export const updateRating = async (rating) => {
    console.log(rating)
    const {data} = await $authHost.post('api/device/update', rating)
    return data
}

export const getAllDevices = async () => {
    const {data} = await $host.get('api/device/items/all', )
    return data
}

export const createPost = async (posts) => {
    console.log(posts)
    const {data} = await $authHost.post('api/post', posts)
    return data
}

export const fetchPosts = async () => {
    const {data} = await $host.get('api/post', )
    return data
}

export const getPost = async (id) => {
    const {data} = await $host.get('api/post/' + id)
    return data
}


export const deletePost = async (id) => {
    const {data} = await $host.delete('api/post/' + id)
    return data
}

export const createNews = async (news) => {
    console.log(news)
    const {data} = await $authHost.post('api/news', news)
    return data
}

export const fetchNews = async () => {
    const {data} = await $host.get('api/news', )
    return data
}

export const getNews = async (id) => {
    const {data} = await $host.get('api/news/' + id)
    return data
}

export const deleteNews = async (id) => {
    const {data} = await $host.delete('api/news/' + id)
    return data
}

export const fetchAllFollowers = async () => {
    const {data} = await $host.get('api/newsletter', )
    return data
}

export const fetchCodes = async () => {
    const {data} = await $host.get('api/promocode', )
    return data
}

export const fetchPromoCode = async (name) => {
    const {data} = await $host.get('api/promocode/find/item', {params: {
            name
        }})
    return data
}

export const checkPromoCode = async (name) => {
    const {data} = await $host.get('api/promocode/check/item', {params: {
            name
        }})
    return data
}

export const checkDeviceAndNext = async (userId, typeId) => {
    const {data} = await $host.get('api/promocode/exact/item', {params: {
             userId, typeId
        }})
    return data
}

export const checkDeviceForOne = async (typeId, deviceId) => {
    const {data} = await $host.get('api/promocode/one/item', {params: {
            typeId, deviceId
        }})
    return data
}

export const updatePromoCode = async (name) => {
    const {data} = await $host.post('api/promocode/update/' + name)
    return data
}

export const deleteCode = async (name) => {
    const {data} = await $host.delete('api/promocode/delete/item', {params: {
        name
    }})
    return data
}

export const fetchDevices = async (typeId, page, limit= 1000) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, page, limit
        }})
    return data
}

export const findOneComment = async (name, rating, text) => {
    const {data} = await $host.get('api/comment/find/item', {params: {
        name, rating, text
        }})
    return data
}

export const fetchAllComments = async () => {
    const {data} = await $host.get('api/comment', )
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const fetchOneCollectionDevices = async (id) => {
    const {data} = await $host.get('api/device/all/items/collection/' + id)
    return data
}

export const fetchOneCollection = async (id) => {
    const {data} = await $host.get('api/device/items/allcollection/' + id)
    return data
}

export const fetchOneCollectionMobile = async (id) => {
    const {data} = await $host.get('api/type/mobile/find/' + id)
    return data
}

export const fetchOneCollectionPC = async (id) => {
    const {data} = await $host.get('api/type/pc/find/' + id)
    return data
}

export const addToCard = async (basketItem) => {
    console.log(basketItem)
    const {data} = await $host.post('api/basket', basketItem)
    return console.log(data)
}

export const fetchBasketDevices = async (basketAll) => {
    const {data} = await $host.get('api/basket/' + basketAll)
    return data
}

export const deleteBasketDevices = async (id) => {
    const {data} = await $host.delete('api/basket/' + id)
    return data
}

export const deleteTypes = async (id) => {
    const {data} = await $host.delete('api/type/' + id)
    return data
}

export const deleteBrands = async (id) => {
    const {data} = await $host.delete('api/brand/' + id)
    return data
}

export const deleteDevices = async (id) => {
    const {data} = await $host.delete('api/device/' + id)
    return data
}

export const deleteComments = async (id) => {
    const {data} = await $host.delete('api/comment/' + id)
    return data
}

export const addComment = async (CommentItem) => {
    console.log(CommentItem)
    const {data} = await $host.post('api/comment', CommentItem)
    return console.log(data)
}

export const fetchComments = async (CommentAll) => {
    const {data} = await $host.get('api/comment/' + CommentAll)
    console.log(data)
    return data
}

export const addUserInfo = async (userAboutInfo) => {
    console.log(userAboutInfo)
    const {data} = await $host.post('api/userinfo', userAboutInfo)
    return console.log(data)
}

export const updateRatingCustomer = async (rating) => {
    const {data} = await $host.post('api/userinfo/update/rating', rating)
    return console.log(data)
}

export const addUserBackground = async (userBackground) => {
    console.log(userBackground)
    const {data} = await $host.post('api/userinfo/create/background', userBackground)
    return console.log(data)
}

export const fetchOneUserBackground = async (id) => {
    const {data} = await $host.get('api/userinfo/find/item/' + id)
    return data
}

export const updateUserBackground = async (userBackground) => {
    console.log(userBackground)
    const {data} = await $host.post('api/userinfo/update/background', userBackground)
    return console.log(data)
}

export const fetchUserData = async (id) => {
    const {data} = await $host.get('api/userinfo/' + id)
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/user/' + id)
    return data
}

export const fetchEveryone = async () => {
    const {data} = await $host.get('api/user/everyone')
    return data
}

export const updateUserInfo = async (updateUserAboutInfo) => {
    console.log(updateUserAboutInfo)
    const {data} = await $host.post('api/userinfo/update', updateUserAboutInfo)
    return console.log(data)
}

export const sendEmailUser = async (sendEmailUserInfo) => {
    console.log(sendEmailUserInfo)
    const {data} = await $host.post('api/sendemail', sendEmailUserInfo)
    return console.log(data)
}

export const sendEmailCodeUser = async (sendCode) => {
    console.log(sendCode)
    const {data} = await $host.post('api/sendemail/reg', sendCode)
    return console.log(data)
}

export const sendEmailCodeForChangePassword = async (sendCodeData) => {
    console.log(sendCodeData)
    const {data} = await $host.post('api/sendemail/changepaswd', sendCodeData)
    return console.log(data)
}

export const sendEmailAll = async (sendDataForAll) => {
    console.log(sendDataForAll)
    const {data} = await $host.post('api/sendemail/sendall', sendDataForAll)
    return console.log(data)
}

export const createPayment = async (paymentData) => {
    console.log(paymentData)
    const {data} = await $authHost.post('api/payment', paymentData)
    return data
}

export const fetchPayments = async () => {
    const {data} = await $host.get('api/payment', )
    return data
}

export const changePaymentStatusBuy = async (paymentData) => {
    console.log(paymentData)
    const {data} = await $authHost.post('api/payment/update/statusbuy', paymentData)
    return data
}

export const changePaymentStatusDone = async (paymentData) => {
    console.log(paymentData)
    const {data} = await $authHost.post('api/payment/update/done', paymentData)
    return data
}


export const fetchPaymentOne = async (id) => {
    const {data} = await $host.get('api/payment/' + id)
    return data
}

export const deletePayment = async (id) => {
    const {data} = await $host.delete('api/payment/' + id)
    return data
}