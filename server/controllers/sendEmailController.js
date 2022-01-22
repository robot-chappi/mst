const uuid = require('uuid')
const path = require('path')
const mailer = require('../email/sendEmailSupper');
const {User, Newsletter} = require('../models/models') 

class sendEmailOneController {
    async sendLetter(req, res, next) {
        try {
            let {userId, name, email, reason, message} = req.body
            const letter = {        
                to: 'supper-store-samurai@mail.ru',
                subject: 'New question to technical support!',
                html: `
                <h2>From a person: ${name}</h2>
                <ul>
                    <li>Id: ${userId}</li>
                    <li>Email: ${email}</li>
                    <li>Reason: ${reason}</li>
                    <li>Message: ${message}</li>
                </ul>`
            }
            mailer(letter) 
            return res.json(console.error)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async sendLetterForPassword(req, res, next) {
        try {
            let {email, code} = req.body
            const letter = {        
                to: `${email}`,
                subject: 'Confirm your email',
                html: `
                <ul>Your email confirmation code: ${code}</ul>
                <ul>If you did not registering in the online store "Samurai Shop", then just ignore this email</ul>`
            }
            mailer(letter) 
            return res.json(console.error)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async sendLetterForChangePassword(req, res, next) {
        try {
            let {email, code} = req.body
            const letter = {        
                to: `${email}`,
                subject: 'Confirm your action (password change)',
                html: `
                <ul>Your code for change password: ${code}</ul>
                <ul>If you did not change password in the online store "Samurai Shop", then just ignore this email</ul>
                <ul>You're safe</ul>`
            }
            mailer(letter) 
            return res.json(console.error)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async sendLettersEveryBody(req, res, next) {
        try {
            let {emailuser, subject, theme, message, img, varios} = req.body
            const users = await User.findAll()
            const newsletterUsers = await Newsletter.findAll()
            // const textUsers = [{email: 'robot.chappi2020@gmail.com'}, {email: 'danuul123fedoscov@gmail.com'}, {email: 'chappiccat@gmail.com'}, {email: 'supper-shop-samurai@mail.ru'},]
            const textUsers = [{email: 'supper-shop-samurai@mail.ru'},]
            if (varios == 0) {
                const letter = {        
                    to: `${emailuser}`,
                    subject: `${theme}`,
                    html: `
                            <style type="text/css">
                            
                            p { 
                                font-size: 120%; 
                                font-family: Verdana, Arial, Helvetica, sans-serif; 
                                color: #000;
                                text-align: center;
                            }

                            .fp2 {
                                font-size: 200%; 
                            }

                            .header_samuri {
                                background: #080808;
                                padding-top: 27px;
                                padding-bottom: 10px;
                                color: #fff;
                            }
                            .footage {
                                padding-top: 10px;
                                background: #000;
                                color: #fff;
                                
                            }

                            </style>
                                <div>
                                    <div class="header_samuri">
                                        <p class="fp2">${theme}</p>
                                    </div>
                                    <div class="footage">
                                        <p>${message}</p>
                                        <img src="${img}" width="100%" height="100%" alt="imgg">
                                    </div>
                                </div>`,
                }
                mailer(letter)}
            if (varios == 1) {
                users.map((f) => {
                    const letter = {        
                        to: `${f.email}`,
                        subject: `${subject}`,
                        html: `
                            <style type="text/css">
                            
                            p { 
                                font-size: 120%; 
                                font-family: Verdana, Arial, Helvetica, sans-serif; 
                                color: #000;
                                text-align: center;
                            }

                            .fp2 {
                                font-size: 200%; 
                            }

                            .header_samuri {
                                background: #080808;
                                padding-top: 27px;
                                padding-bottom: 10px;
                                color: #fff;
                            }
                            .footage {
                                padding-top: 10px;
                                background: #000;
                                color: #fff;
                                
                            }

                            </style>
                                <div>
                                    <div class="header_samuri">
                                        <p class="fp2">${theme}</p>
                                    </div>
                                    <div class="footage">
                                        <p>${message}</p>
                                        <img src="${img}" width="100%" height="600" alt="imgg">
                                    </div>
                                </div>`,
                        
                    }
                    mailer(letter) 
                })}
                if (varios == 1) {
                users.map((f) => {
                    const letter = {        
                        to: `${f.email}`,
                        subject: `${subject}`,
                        html: `
                            <style type="text/css">
                            
                            p { 
                                font-size: 120%; 
                                font-family: Verdana, Arial, Helvetica, sans-serif; 
                                color: #000;
                                text-align: center;
                            }

                            .fp2 {
                                font-size: 200%; 
                            }

                            .header_samuri {
                                background: #080808;
                                padding-top: 27px;
                                padding-bottom: 10px;
                                color: #fff;
                            }
                            .footage {
                                padding-top: 10px;
                                background: #000;
                                color: #fff;
                                
                            }

                            </style>
                                <div>
                                    <div class="header_samuri">
                                        <p class="fp2">${theme}</p>
                                    </div>
                                    <div class="footage">
                                        <p>${message}</p>
                                        <img src="${img}" width="100%" height="600" alt="imgg">
                                    </div>
                                </div>`,
                        
                    }
                    mailer(letter) 
                })}
            if (varios == 2) {
                newsletterUsers.map((f) => {
                        const letter = {        
                            to: `${f.email}`,
                            subject: `${subject}`,
                            html: `
                                <style type="text/css">
                                
                                p { 
                                    font-size: 120%; 
                                    font-family: Verdana, Arial, Helvetica, sans-serif; 
                                    color: #000;
                                    text-align: center;
                                }
    
                                .fp2 {
                                    font-size: 200%; 
                                }
    
                                .header_samuri {
                                    background: #080808;
                                    padding-top: 27px;
                                    padding-bottom: 10px;
                                    color: #fff;
                                }
                                .footage {
                                    padding-top: 10px;
                                    background: #000;
                                    color: #fff;
                                    
                                }
    
                                </style>
                                    <div>
                                        <div class="header_samuri">
                                            <p class="fp2">${theme}</p>
                                        </div>
                                        <div class="footage">
                                            <p>${message}</p>
                                            <img src="${img}" width="100%" height="600" alt="imgg">
                                        </div>
                                    </div>`,
                            
                        }
                        mailer(letter) 
                    })}
            return res.json(users)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new sendEmailOneController()