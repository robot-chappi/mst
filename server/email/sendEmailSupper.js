const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
           // Пожалуйста, используйте свой собственный аккаунт для рассылки
            user: 'supper-store-samurai@mail.ru', // (замените звездочики на название вашего почтового ящика)
            pass: 'RpC6Zxhhg2t2fKjD2smt' //  (замените звездочики на пароль вашего почтового ящика)
        }, 
        // Qer-vWT-5fs-n2Q                  8rf-wYK-n2g-iiz 
        // CkkQngYUvvBGnaJ0inv4              samuraiEEfsdfssdSDFsamuraiFFSF        RpC6Zxhhg2t2fKjD2smt
        tls: {
            rejectUnauthorized: false
        }
    },
    {
        from: 'Samurai Shop <supper-store-samurai@mail.ru>',
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer